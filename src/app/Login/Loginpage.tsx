import React from 'react'
import Image from 'next/image'

const Loginpage = () => {
  return (
        <div className="flex justify-center items-center min-h-screen bg-white">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                  Remember me?
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
              >
                Login
              </button>
              <a
                href="#"
                className="block text-sm text-center text-gray-500 mt-4 hover:underline"
              >
                Forgot password?
              </a>
            </form>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">OR</span>
              </div>
            </div>
            <div className="space-y-4">
              <button className="w-full py-2 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100">
                <Image
                  src="/Google.svg"
                  alt="Google"
                  className="h-5 w-5 mr-2"
                />
                Login with Google
              </button>
              <button className="w-full py-2 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100">
                <Image
                  src="/Apple.svg"
                  alt="Apple"
                  className="h-5 w-5 mr-2"
                />
                Login with Apple
              </button>
            </div>
          </div>
        </div>
    
    
  )
}

export default Loginpage
