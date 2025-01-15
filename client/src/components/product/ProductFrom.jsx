import { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "../../common/components";

export const ProductFrom = ({
  productPlaceholder,
  onSubmitProductFrom,
  isSubmitting,
}) => {
  const [error, setErrors] = useState({});
  const [product, setProduct] = useState(productPlaceholder);

  const handleOnChange = (event) => {
    const fieldName = event.target.name;
    setProduct({ ...product, [fieldName]: event.target.value });
  };

  const handleOnPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProduct((prev) => ({
        ...prev,
        photo: file,
        photoPreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleOnSubmitProductForm = (event) => {
    event.preventDefault();
    if (product.name.length > 20) {
      setErrors({ name: "Max limit 20 characters" });
      return;
    }
    if (product.price < 0) {
      setErrors({ price: "Price can not be negative" });
      return;
    }
    if (product.quantity < 0) {
      setErrors({ quantity: "Quantity can not be negative" });
      return;
    }

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("photo", product.photo);
    onSubmitProductFrom(formData);
  };

  const isEditing = Boolean(productPlaceholder.id);

  return (
    <Box
      sx={{
        height: "500px",
        overflow: "auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <form onSubmit={handleOnSubmitProductForm}>
        <Stack spacing={2} px={8} py={6}>
          <Typography variant="h3">Product From</Typography>
          <TextField
            required
            label="Name"
            type="text"
            name="name"
            error={Boolean(error.name)}
            onChange={handleOnChange}
            value={product.name}
          />
          <TextField
            required
            multiline
            rows={4}
            label="Description"
            name="description"
            error={Boolean(error.description)}
            onChange={handleOnChange}
            value={product.description}
          />

          <TextField
            required
            label="Price"
            type="number"
            name="price"
            error={Boolean(error.price)}
            onChange={handleOnChange}
            value={product.price}
          />
          <TextField
            required
            label="Quantity"
            type="number"
            name="quantity"
            error={Boolean(error.quantity)}
            onChange={handleOnChange}
            value={product.quantity}
          />

          <input type="file" accept="image/*" onChange={handleOnPhotoChange} />
          {/* Display Preview */}
          {product.photoPreview && (
            <Box display="flex" justifyContent="center" mt={2}>
              <img
                src={product.photoPreview}
                alt="Preview"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          )}

          <Box display="flex" justifyContent="flex-end" gap={4}>
            <Button color="error" variant="outlined" type="reset">
              Cancel
            </Button>
            <Button variant="outlined" type="submit" disabled={isSubmitting}>
              {isEditing ? "Edit" : "Add"}
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};
