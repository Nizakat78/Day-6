'use client';
import React, { useState, useEffect } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Link from 'next/link';


interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  quantity: number;
  total: number;
}

const ProductCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setProducts(cart);
  }, []);

  // Handle remove product from cart
  const handleRemoveProduct = (id: string) => {
    const updatedCart = products.filter((product) => product.id !== id);
    setProducts(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate cart subtotal
  const cartSubtotal = products.reduce((total, product) => total + product.total, 0);

  return (
    <div className="p-4 bg-white text-black min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <Link href="/Checkout">
            <button className="flex items-center text-yellow-400 text-lg">
              <MdOutlineShoppingCart className="w-6 h-6" />
              <span className="ml-2">{products.length} Items</span>
            </button>
          </Link>
        </div>

        {/* Cart Items */}
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="py-3">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-700">
                <td className="py-3 flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p>{product.name}</p>
                  </div>
                </td>
                <td>₹{product.price.toFixed(2)}</td>
                <td>{product.quantity}</td>
                <td>₹{product.total.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    className="text-red-500"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Bill Section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-lg font-semibold mb-2">Total Bill</h2>
            <div className="flex justify-between mb-2">
              <span>Cart Subtotal</span>
              <span>{cartSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Amount</span>
              <span>₹{cartSubtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <Link href="/Checkout">
          <button className="w-full mt-4 py-3 bg-orange-500 text-white text-center text-lg font-semibold rounded">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCart;
