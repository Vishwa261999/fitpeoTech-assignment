import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "Abstract 3D",
    subtitle: "Lorem ipsum dolor sit amet",
    stock: "32 in stock",
    price: "$ 45.99.00",
    sales: 20,
  },
  {
    id: 2,
    name: "Sarphens illustration",
    subtitle: "Lorem ipsum dolor sit amet",
    stock: "30 in stock",
    price: "$ 35.00",
    sales: 10,
  },
];

const Table = () => {
  const [searchText, setSearchText] = useState("");
  const [filterOption, setFilterOption] = useState("all");

  // Filter products based on search text and selected filter option
  const filteredProducts = data.filter((product) => {
    return (
      (product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchText.toLowerCase())) &&
      (filterOption === "all" || filterOption === product.stock)
    );
  });

  return (
    <div className="bg-white shadow-lg p-8 mx-9 rounded-lg">
      <div className="container mx-auto">
        <div className="flex justify-between mb-4">
          <div className="text-3xl font-bold">Product List</div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full p-2 pl-12 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              <div className="absolute top-2.5 left-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-search"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
            <div className="">
              {/* Filter dropdown */}
              <select
                value={filterOption}
                onChange={(e) => setFilterOption(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="all">Last 30 days</option>
                {data.map((product) => (
                  <option key={product.id} value={product.stock}>
                    {product.stock}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <table className="w-full">
          <thead className="border-b border-b-gray-300">
            <tr>
              <th className="w-[70%]  text-left p-4">Product Name</th>
              <th className=" text-center p-4 font-medium">Stock</th>
              <th className=" text-center p-4 font-medium">Price</th>
              <th className=" text-center p-4 font-medium">Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id}>
                <td className="p-4">
                  <div className="flex items-center">
                    <img
                      src="https://media.istockphoto.com/id/1465031336/photo/aerial-view-of-ripple-sea-waves-blue-sea-texture-with-waves-water-sea-or-ocean-for-background.webp?s=2048x2048&w=is&k=20&c=YqbneUNk898E3tHZLAu3vTK2J9GWwU89hR9c4r3A3DI="
                      alt={`Product ${product.id}`}
                      className="w-18 h-12 object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <div className="text-lg font-semibold">
                        {product.name}
                      </div>
                      <div className="text-gray-600">{product.subtitle}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center">{product.stock}</td>
                <td className="p-4  text-center font-bold">{product.price}</td>
                <td className="p-4  text-center">{product.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
