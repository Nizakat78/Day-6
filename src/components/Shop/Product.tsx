"use client";
import { useState, useEffect } from "react";
import { Food } from "../../app/types/food";
import { client, urlFor } from "../../lib/sanityClient";

import { FaAnglesLeft } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import Link from "next/link";

// Function to fetch food data from Sanity with filtering
async function getFoods(page: number = 1, filters: any): Promise<Food[]> {
  const query = `*[_type == "food" && 
                  (name match "${filters.search || ''}*" || 
                   category in [${filters.categories.map((cat: string) => `"${cat}"`).join(', ')}]) &&
                  price >= ${filters.priceMin} && price <= ${filters.priceMax}]{
    _id,
    name,
    category,
    price,
    originalPrice,
    tags,
    description,
    available,
    image {
      asset -> {
        _id,
        url
      }
    }
  }[${(page - 1) * 9}...${page * 9}]`; // Show 9 items per page

  const foods = await client.fetch(query);
  return foods;
}

export default function FoodsPage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3); // Update dynamically if needed
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(100);

  useEffect(() => {
    const fetchFoods = async () => {
      const filters = { search, categories, priceMin, priceMax };
      const fetchedFoods = await getFoods(currentPage, filters);
      setFoods(fetchedFoods);
    };

    fetchFoods();
  }, [currentPage, search, categories, priceMin, priceMax]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    e.target.name === "min" ? setPriceMin(value) : setPriceMax(value);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Products Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {foods.length > 0 ? (
              foods.map((food) => (
                <Link key={food._id} href={`/product/${food._id}`}>
                  <div className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer">
                    {food.image?.asset ? (
                      <img
                        src={urlFor(food.image).width(500).url()}
                        alt={food.name}
                        className="w-full h-40 object-cover"
                      />
                    ) : (
                      <img
                        src="/placeholder.jpg"
                        alt="Placeholder"
                        className="w-full h-40 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h2 className="text-lg font-semibold">{food.name}</h2>
                      <div className="flex items-center justify-between mt-2">
                        {food.originalPrice && (
                          <span className="text-gray-500 line-through">
                            ₹{food.originalPrice}
                          </span>
                        )}
                        <span className="text-xl font-bold">₹{food.price}</span>
                      </div>
                      {food.available ? (
                        <span className="text-sm text-green-500">Available</span>
                      ) : (
                        <span className="text-sm text-red-500">Unavailable</span>
                      )}
                      <p className="text-sm text-gray-500">{food.description}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No food items available for this filter.</p>
            )}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1 bg-gray-100 p-4 rounded-md">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full p-2 pl-10 border border-gray-300 rounded-md"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <LiaSearchSolid className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>

            <h3 className="text-lg font-bold mt-6 mb-4">Categories</h3>
            <ul>
              {["Sandwiches", "Burger", "Chicken Chup", "Drink", "Pizza", "Thi", "Non Veg", "Uncategorized"].map(
                (category) => (
                  <li key={category} className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={categories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      {category}
                    </label>
                  </li>
                )
              )}
            </ul>

            {/* Price Filter */}
            <div>
              <h3 className="text-lg font-bold mb-4">Filter By Price</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={priceMin}
                name="min"
                onChange={handlePriceChange}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="100"
                value={priceMax}
                name="max"
                onChange={handlePriceChange}
                className="w-full"
              />
              <p>From ₹{priceMin} to ₹{priceMax}</p>
            </div>
          </aside>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border border-yellow-500"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            <FaAnglesLeft />
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border border-yellow-500 ${
                currentPage === index + 1 ? "bg-yellow-200" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border border-yellow-500"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
          >
            <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </div>
  );
}
