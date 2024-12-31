import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
  },

  category: {
    type: String,
    required: [true, "Product category is required"],
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: 0,
  },

  stock: {
    type: Number,
    required: [true, "Product stock is required"],
    min: 0,
  },

  varient: {
    type: String,
    required: true
  },

  color: {
    type: String,
    required: false
  },

  sku: {
    type: String,
    unique: true,
    required: [true, "SKU is required"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const productModel = mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
