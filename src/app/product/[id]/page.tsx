'use client'; 
import { useEffect, useState } from 'react';
import { client, urlFor } from '../../../lib/sanityClient';
import { Food } from '../../types/food';

// Fetch single product data from Sanity
async function getProduct(id: string): Promise<Food | null> {
  const query = `*[_type == "food" && _id == $id][0]{
    _id,
    name,
    category,
    price,
    description,
    available,
    image {
      asset -> {
        url
      }
    }
  }`;
  const product = await client.fetch(query, { id });
  return product;
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1); 
  const [product, setProduct] = useState<Food | null>(null);

  // Fetch product data when the component mounts
  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct = await getProduct(params.id);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, [params.id]);

  // Handle quantity changes
  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    setQuantity((prev) =>
      type === 'increment' ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  // Handle add to cart
  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      quantity,
      total: product.price * quantity,
      image: urlFor(product.image).url(),
    };

    // Save to localStorage or global cart state
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart];

    // Check if the product is already in the cart
    const existingProduct = updatedCart.find((item: any) => item.id === cartItem.id);
    if (existingProduct) {
      existingProduct.quantity += quantity; 
      existingProduct.total = existingProduct.price * existingProduct.quantity;
    } else {
      updatedCart.push(cartItem); 
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.name} has been added to your cart!`);
  };

  if (!product) return <div className="text-center text-gray-600">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg p-6">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={urlFor(product.image!).url()}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-yellow-500 mb-6">₹{product.price}</p>
          {product.available ? (
            <span className="text-green-600 text-lg mb-4 block">Available</span>
          ) : (
            <span className="text-red-600 text-lg mb-4 block">Unavailable</span>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <button
              onClick={() => handleQuantityChange('decrement')}
              className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded-l focus:outline-none"
            >
              -
            </button>
            <span className="px-6 py-2 text-lg font-bold bg-gray-100">{quantity}</span>
            <button
              onClick={() => handleQuantityChange('increment')}
              className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded-r focus:outline-none"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full px-6 py-3 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
