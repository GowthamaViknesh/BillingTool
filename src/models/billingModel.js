import mongoose from "mongoose";

const billingSchema = new mongoose.Schema(
  {
    invoice: {
      type: String,
      required: true,
    },

    invoicedate: {
      type: Date,
      required: true,
    },

    customername: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    productname: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number, // Changed to Number type for numeric quantity
      required: true,
    },

    price: {
      type: Number, // Changed to Number type for numeric price
      required: true,
    },

    varient: {
      type: String,
      required: true
    },

    totalprice: {
      type: Number,
      required: true,
    },

    gst: {
      type: String, // Keeping as String, assuming GST will be in percentage form
      required: true,
    },
  },
  { timestamps: true }
);

// Check if the model already exists before defining it
const billingModel =
  mongoose.models.product || mongoose.model("billing", billingSchema);

export default billingModel;
