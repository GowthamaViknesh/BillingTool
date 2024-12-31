import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name:{
    type:String,
    required:true,
    unique:true},
    
    email:{
    type:String,
    required:true,
    unique:true
    },
    password:{type:String,
    required:true
    },  
  },
  { timestamps: true }
);

// Check if the model already exists before defining it
const userModel =
  mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
