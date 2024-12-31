"use server";

import connectDB from "@/utils/db";
import products from "@/models/productModel";


//POST request to save the products
export async function POST(req) {
  try {
    await connectDB();

    const { name, category, price, stock, sku } = await req.json();

    if (!name || !category || !price || !stock || !sku) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    const newProduct = new products({ name, category, price, stock, sku });
    await newProduct.save();

    return new Response(
      JSON.stringify({ message: "Product saved successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving product:", error);
    return new Response(
      JSON.stringify({ message: "Failed to save product", error: error.message }),
      { status: 500 }
    );
  }
}

// GET request to retrieve all products
export async function GET(req) {
  try {
    await connectDB();
    const product = await products.find();
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch products", error: error.message }), { status: 500 });
  }
}
