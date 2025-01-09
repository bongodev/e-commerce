import express from 'express';
import { Product } from '../models/index.js';
import { authenticateToken } from '../middlewares/index.js';

const router = express.Router();

//create product
router.post('/',authenticateToken, async(req,res) =>{
    try{
        const userId=req.user._id;
        const productObj={
            name:req.body.name,
            price: parseInt(req.body.price),
            userId: userId,
            quantity: parseInt(req.body.quantity),
            isDeleted: false,
        };
        const product= new Product(productObj)
        await product.save()
        return res.status(201).json(product)
    }catch(error){
        res.status(500).json({message:"Something went wrong"})
    }
})

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
router.put("/:id", authenticateToken, async(req,res) =>{
    try{
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
    }
    catch(error){
        res.status(500).json({ message: "something went wrong" });
    }
})




export default router;