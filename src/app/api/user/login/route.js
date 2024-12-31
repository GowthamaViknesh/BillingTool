import bcrypt from "bcrypt";
import connectDB from "@/utils/db";
import userModel from "@/models/userModel";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      return new Response(
        JSON.stringify({ status: 404, message: "User not found!" }),
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid password." }),
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const response = NextResponse.json({ message: "Login successful", user });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    return response;

    // return new Response(
    //   JSON.stringify({ status: 200, token, existingUser }),
    //   { status: 200 }
    // );
  } catch (error) {
    console.error("Error logging in user:", error);
    return new Response(
      JSON.stringify({ message: "Failed to login user", error: error.message }),
      { status: 500 }
    );
  }
}