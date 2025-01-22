"use client"
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Food } from '../../app/types/food';

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // Ensure env variables are set correctly
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2021-08-31',
  useCdn: true, // Use the CDN for faster responses
});

// Image URL builder for Sanity
const builder = imageUrlBuilder(client);
export const urlFor = (source: Parameters<typeof builder.image>[0]) =>
  builder.image(source);

// Fetch food items from Sanity
export async function getFoods(
  page: number = 1,
  filters: {
    search?: string;
    categories?: string[];
    priceMin?: number;
    priceMax?: number;
  } = {}
): Promise<Food[]> {
  const query = `*[_type == "food" && 
    (name match "${filters.search || ''}*" || 
    category in [${(filters.categories || [])
      .map((cat) => `"${cat}"`)
      .join(', ')}]) &&
    price >= ${filters.priceMin || 0} && price <= ${filters.priceMax || 100}] {
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
        url
      }
    }
  }[${(page - 1) * 9}...${page * 9}]`;

  try {
    const foods: Food[] = await client.fetch(query);
    return foods;
  } catch (error) {
    console.error('Error fetching foods:', error);
    return [];
  }
}

// Food type definition
export interface Food {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  description?: string;
  available?: boolean;
  image?: {
    asset: {
      url: string;
    };
  };
}

// FoodsPage component
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { LiaSearchSolid } from 'react-icons/lia';

export default function FoodsPage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState<number>(0);
  const [priceMax, setPriceMax] = useState<number>(100);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalPages, setTotalPages] = useState<number>(3); // Adjust dynamically if required

  useEffect(() => {
    const fetchFoods = async () => {
      const filters = { search, categories, priceMin, priceMax };
      const fetchedFoods = await getFoods(currentPage, filters);
      setFoods(fetchedFoods);
    };

    fetchFoods();
  }, [currentPage, search, categories, priceMin, priceMax]);

  const handleCategoryChange = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Product Grid */}
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
                onChange={(e) => setPriceMin(Number(e.target.value))}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="100"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
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
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage <= 1}
          >
           
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border border-yellow-500 ${
                currentPage === index + 1 ? "bg-yellow-200" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          
           

        </div>
      </div>
    </div>
  );
}
