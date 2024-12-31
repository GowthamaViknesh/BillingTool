import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import connectDB from "@/utils/db";
import userModel from "@/models/userModel";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password } = await req.json();

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "Email already in use" }), { status: 400 });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Send a welcome email
    const transporter = nodemailer.createTransport({
      service: "Gmail", // You can use other email services (e.g., Outlook, Yahoo)
      auth: {
        user: process.env.EMAIL_USER, // Your email address from environment variables
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Our App!",
      text: `Hello ${name},\n\nThank you for registering. We're excited to have you on board!\n\nBest regards,\nYour App Team`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "User registered and email sent successfully", user: newUser }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return new Response(
      JSON.stringify({ message: "Failed to register user", error: error.message }),
      { status: 500 }
    );
  }
}