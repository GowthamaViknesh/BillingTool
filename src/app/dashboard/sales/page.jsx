export default function SalesPage() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Sales</h1>
        <div className="grid grid-cols-4 gap-4">
          {/* Customer Details */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="customerName">Customer Name</label>
            <input
              id="customerName"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter customer name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="customerPhone">Customer Phone</label>
            <input
              id="customerPhone"
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter phone number"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter address"
            />
          </div>
  
          {/* Product Details */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="productName">Product Name</label>
            <input
              id="productName"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="variant">Variant</label>
            <input
              id="variant"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter variant"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="color">Color</label>
            <input
              id="color"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter color"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="imei1">IMEI1 No</label>
            <input
              id="imei1"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter IMEI1 number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="imei2">IMEI2 No</label>
            <input
              id="imei2"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter IMEI2 number"
            />
          </div>
  
          {/* Pricing Details */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="gst">GST</label>
            <input
              id="gst"
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter GST"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1" htmlFor="totalPrice">Total Price</label>
            <input
              id="totalPrice"
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter total price"
            />
          </div>
        </div>
  
        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Save
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Print
          </button>
        </div>
      </div>
    );
  }
  