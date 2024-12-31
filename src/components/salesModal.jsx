"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SalesModal = ({ closeModal }) => {
  const [productName, setProductName] = useState("");
  const [variant, setVariant] = useState("");
  const [color, setColor] = useState("");
  const [imei1, setImei1] = useState("");
  const [imei2, setImei2] = useState("");
  const [price, setPrice] = useState(""); // Changed to empty string
  const [gst, setGst] = useState(""); // Changed to empty string
  const [totalValue, setTotalValue] = useState(0);
  const [gstAmount, setGstAmount] = useState(0);

  // Customer details
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");

  // Example data for variant and color options
  const variantOptions = ["Variant 1", "Variant 2", "Variant 3"];
  const colorOptions = ["Red", "Blue", "Green", "Black", "White"];

  // Function to calculate GST and total value
  const calculateGST = () => {
    const priceValue = parseFloat(price) || 0; // Ensure price is a number
    const gstValue = parseFloat(gst) || 0; // Ensure gst is a number
    const gstAmount = (priceValue * gstValue) / 100;
    setGstAmount(gstAmount);
    const total = priceValue + gstAmount;
    setTotalValue(total);
  };

  useEffect(() => {
    if (price && gst) {
      calculateGST();
    } else {
      setGstAmount(0);
      setTotalValue(0);
    }
  }, [price, gst]);

  // Function to handle form submission (simulate save)
  const handleSave = async () => {
    try {
      // Simulate backend save (replace with your API request)
      console.log("Sale saved successfully!");
      toast.success("Sale saved successfully!");
      // Close the modal after saving
      closeModal();
    } catch (error) {
      console.error("Error saving sale:", error);
      toast.error("Failed to save sale.");
    }
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg w-[750px] h-[450px]">
        <h1 className="text-xl mb-4">New Sale</h1>
        <form>
          <div className="grid grid-cols-4 gap-4 mb-4">
            {/* Customer Details */}
            <div className="col-span-2">
              <label htmlFor="customerName" className="block text-sm font-medium">Customer Name</label>
              <input
                type="text"
                id="customerName"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="address" className="block text-sm font-medium">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="invoiceNo" className="block text-sm font-medium">Invoice No</label>
              <input
                type="text"
                id="invoiceNo"
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="invoiceDate" className="block text-sm font-medium">Invoice Date</label>
              <input
                type="date"
                id="invoiceDate"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* Product Details */}
            <div className="col-span-2">
              <label htmlFor="productName" className="block text-sm font-medium">Product Name</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="variant" className="block text-sm font-medium">Variant</label>
              <select
                id="variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md"
              >
                <option value="">Select Variant</option>
                {variantOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="color" className="block text-sm font-medium">Color</label>
              <select
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md"
              >
                <option value="">Select Color</option>
                {colorOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="imei1" className="block text-sm font-medium">IMEI No 1</label>
              <input
                type="text"
                id="imei1"
                value={imei1}
                onChange={(e) => setImei1(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="imei2" className="block text-sm font-medium">IMEI No 2</label>
              <input
                type="text"
                id="imei2"
                value={imei2}
                onChange={(e) => setImei2(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium">Price</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="gst" className="block text-sm font-medium">GST (%)</label>
              <input
                type="number"
                id="gst"
                value={gst}
                onChange={(e) => setGst(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="gstAmount" className="block text-sm font-medium">GST Amount</label>
              <input
                type="text"
                id="gstAmount"
                value={gstAmount.toFixed(2)}
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="totalValue" className="block text-sm font-medium">Total Value</label>
              <input
                type="text"
                id="totalValue"
                value={totalValue.toFixed(2)}
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="ml-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SalesModal;