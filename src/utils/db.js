import mongoose from "mongoose";

let isConnected = false; // Track the connection status

const connectDB = async () => {
    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);

        isConnected = true;
        console.log("MongoDB connected:", db.connection.host);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
    }
};

export default connectDB;
