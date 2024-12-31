"use server";
import { NextResponse } from "next/server";

import connectDB from "@/utils/db"; // Make sure you have a utility to connect to MongoDB
import productModel from "@/models/billingModel"; // Ensure this path matches your project structure

export async function POST(req) {
  try {
    await connectDB(); // Connect to the database
    // Parse the incoming JSON payload
    const {
      invoice,
      invoicedate,
      customername,
      address,
      productname,
      quantity,
      varient,
      price,
      gst
    } = await req.json();

    // Calculate the total price (assuming GST is a percentage as a string)
    const gstPercentage = parseFloat(gst) / 100;
    const totalprice = quantity * price * (1 + gstPercentage);

    // Create a new product instance
    const newProduct = new productModel({
      invoice,
      invoicedate,
      customername,
      address,
      productname,
      quantity,
      price,
      varient,
      totalprice,
      gst,
    });

    // Save the product to the database
    await newProduct.save();

    return NextResponse.json(
      {
        message: "Product added successfully",
        product: newProduct,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving product:", error);
    return NextResponse.json(
      {
        message: "Failed to add product",
        error: error.message,
      },
      { status: 500 }
    );
  }
}