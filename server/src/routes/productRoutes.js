import express from "express";
import { Product, File } from "../models/index.js";
import { authenticateToken } from "../middlewares/index.js";
import multer from "multer";
import path from "path";


const router = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.resolve("src/public/uploads");
    console.log("Saving file to:", uploadPath); // Debugging log
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

//upload product image
router.post(
  "/uploads",
  [authenticateToken, upload.single("file")],
  async (req, res) => {
    try {
      const fileObj = {
        name: req.file.filename,
        path: req.file.path,
      };

      const file = new File(fileObj);
      await file.save();
      return res.json(file);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

//create product
router.post("/", authenticateToken, async (req, res) => {
  try {

   
    const userId = req.user._id;

    const productObj = {
      name: req.body.name,
      description: req.body.description,
      price: parseInt(req.body.price),
      userId: userId,
      fileId: req.body.fileId,
      quantity: parseInt(req.body.quantity),
      isDeleted: false,
    };
    const product = new Product(productObj);
    await product.save();
    return res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

//get all products
router.get("/", authenticateToken, async (req, res) => {
  try {
    let current = req?.query?.current ?? "1";
    current = parseInt(current);

    let pageSize = req?.query?.pageSize ?? "10"; // Default page size to 10
    pageSize = parseInt(pageSize);

    const sort = req?.query?.sort ?? "asc";
    const pipeline = [];

    pipeline.push({
      $match: {
        isDeleted: false,
      },
    });

    switch (sort) {
      case "asc":
        pipeline.push({
          $sort: {
            createdAt: 1,
          },
        });
        break;

      case "desc":
        pipeline.push({
          $sort: {
            createdAt: -1,
          },
        });
        break;
    }

    pipeline.push({
      $skip: (current - 1) * pageSize,
    });

    pipeline.push({
      $limit: pageSize,
    });

    pipeline.push({
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    });

    pipeline.push({
      $lookup: {
        from: "files",
        localField: "fileId",
        foreignField: "_id",
        as: "file",
      },
    });

    let products = await Product.aggregate(pipeline);

    // Add `id` field to each product
    products = products.map((product) => ({
      id: product._id, // Map MongoDB `_id` to `id`
      ...product,
    }));

    return res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

//update product
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updateProduct = await Product.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (updateProduct) {
      return res.json(updateProduct);
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
});

//amend product
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const id = req.params.id;
    const amendProduct = await Product.findByIdAndDelete(
      id,
      { isDeleted: true },
      { new: true }
    );
    if (amendProduct) {
      return res.json(amendProduct);
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
});

export default router;
