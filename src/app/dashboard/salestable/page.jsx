import Link from "next/link";

export default function Sales() {
  const salesData = [
    { 
      siNo: 1, 
      productName: "Product A", 
      invoiceDate: "2024-12-31", 
      variant: "Variant A", 
      color: "Red", 
      totalPrice: 100 
    },
    { 
      siNo: 2, 
      productName: "Product B", 
      invoiceDate: "2024-12-30", 
      variant: "Variant B", 
      color: "Blue", 
      totalPrice: 200 
    },
    // Add more rows as needed
  ];

  return (
    <div className="p-6">
      <div className="absolute top-14 right-0 m-4">
        <Link href="../../dashboard/sales">
          <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
            New Sales
          </button>
        </Link>
      </div>
      <h1 className="text-xl font-bold mb-4">Sales Table</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 px-4 py-2">Si. No</th>
            <th className="border border-gray-300 px-4 py-2">Name of the Product</th>
            <th className="border border-gray-300 px-4 py-2">Date of Invoice</th>
            <th className="border border-gray-300 px-4 py-2">Variant</th>
            <th className="border border-gray-300 px-4 py-2">Color</th>
            <th className="border border-gray-300 px-4 py-2">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{item.siNo}</td>
              <td className="border border-gray-300 px-4 py-2">{item.productName}</td>
              <td className="border border-gray-300 px-4 py-2">{item.invoiceDate}</td>
              <td className="border border-gray-300 px-4 py-2">{item.variant}</td>
              <td className="border border-gray-300 px-4 py-2">{item.color}</td>
              <td className="border border-gray-300 px-4 py-2">{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
