import React from 'react';

export default function StockPage() {
  // Example data (can be replaced with dynamic data)
  const tableData = [
    {
      purchaserName: 'John Doe',
      billNo: 'B1234',
      productName: 'Laptop',
      qty: 1,
      price: 1200,
      color: 'Silver',
      variant: 'i7, 16GB RAM',
    },
    {
      purchaserName: 'Jane Smith',
      billNo: 'B1235',
      productName: 'Smartphone',
      qty: 2,
      price: 800,
      color: 'Black',
      variant: '64GB Storage',
    },
    {
      purchaserName: 'David Brown',
      billNo: 'B1236',
      productName: 'Headphones',
      qty: 3,
      price: 150,
      color: 'White',
      variant: 'Noise-Cancelling',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-purple-600">Stock Details</h1>
      <table className="min-w-full border-collapse border border-purple-400">
        <thead className="bg-purple-200">
          <tr>
            <th className="px-4 py-2 border-b text-purple-700">Purchaser Name</th>
            <th className="px-4 py-2 border-b text-purple-700">Bill No</th>
            <th className="px-4 py-2 border-b text-purple-700">Product Name</th>
            <th className="px-4 py-2 border-b text-purple-700">Quantity</th>
            <th className="px-4 py-2 border-b text-purple-700">Price</th>
            <th className="px-4 py-2 border-b text-purple-700">Color</th>
            <th className="px-4 py-2 border-b text-purple-700">Variant</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="text-center hover:bg-purple-50">
              <td className="px-4 py-2 border-b text-purple-600">{row.purchaserName}</td>
              <td className="px-4 py-2 border-b text-purple-600">{row.billNo}</td>
              <td className="px-4 py-2 border-b text-purple-600">{row.productName}</td>
              <td className="px-4 py-2 border-b text-purple-600">{row.qty}</td>
              <td className="px-4 py-2 border-b text-purple-600">${row.price}</td>
              <td className="px-4 py-2 border-b text-purple-600">{row.color}</td>
              <td className="px-4 py-2 border-b text-purple-600">{row.variant}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
