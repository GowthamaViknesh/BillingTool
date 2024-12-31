"use client";
import React, { useState } from "react";

export default function InventoryMaintenance() {
  const [rows, setRows] = useState([
    { billNo: "", purchaserName: "", productName: "", quantity: "", price: "", billDate: "" },
  ]);

  const [error, setError] = useState(""); // To display validation errors

  const addRow = () => {
    setRows([
      ...rows,
      { billNo: "", purchaserName: "", productName: "", quantity: "", price: "", billDate: "" },
    ]);
  };

  const deleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const validateRows = () => {
    for (let row of rows) {
      if (
        !row.billNo ||
        !row.purchaserName ||
        !row.productName ||
        !row.quantity ||
        !row.price ||
        !row.billDate
      ) {
        setError("All fields are required. Please fill out all fields.");
        return false;
      }
      if (row.quantity <= 0 || row.price <= 0) {
        setError("Quantity and Price must be greater than zero.");
        return false;
      }
    }
    setError(""); // Clear errors if validation passes
    return true;
  };

  const handleSave = () => {
    if (validateRows()) {
      console.log("Saved Data:", rows);
      alert("Data saved successfully!"); // Replace this with an API call or toast
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Inventory Maintenance</h1>
        <button
          onClick={addRow}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Row
        </button>
      </div>

      {error && (
        <div className="mb-4 text-red-600 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {rows.map((row, index) => (
          <div key={index} className="grid grid-cols-7 gap-4 items-center mb-4 border-b pb-4">
            {/* Bill Number */}
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Bill No"
              value={row.billNo}
              onChange={(e) => handleInputChange(index, "billNo", e.target.value)}
            />
            {/* Purchaser Name */}
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Purchaser Name"
              value={row.purchaserName}
              onChange={(e) => handleInputChange(index, "purchaserName", e.target.value)}
            />
            {/* Product Name */}
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Product Name"
              value={row.productName}
              onChange={(e) => handleInputChange(index, "productName", e.target.value)}
            />
            {/* Quantity */}
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Quantity"
              value={row.quantity}
              onChange={(e) => handleInputChange(index, "quantity", e.target.value)}
            />
            {/* Price */}
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Price"
              value={row.price}
              onChange={(e) => handleInputChange(index, "price", e.target.value)}
            />
            {/* Bill Date */}
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={row.billDate}
              onChange={(e) => handleInputChange(index, "billDate", e.target.value)}
            />
            {/* Delete Button */}
            <button
              onClick={() => deleteRow(index)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
