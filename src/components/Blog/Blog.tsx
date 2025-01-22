import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { FaCommentAlt } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";




const BlogPage: React.FC = () => {
  const recentPosts = [
    {
      id: 1,
      title: "How to Create Engaging Content",
      date: "March 5, 2023",
      image: "/Blog3.svg",
    },
    {
      id: 2,
      title: "The Benefits of Digital Detox",
      date: "April 12, 2023",
      image: "/Blog4.svg",
    },
    {
      id: 3,
      title: "Photography Tips for Beginners",
      date: "May 19, 2023",
      image: "/Blog5.svg",
    },
    {
      id: 4,
      title: "10 Tips for Starting Your Blog",
      date: "June 10, 2023",
      image: "/Blog6.svg",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
          <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="/Blog1.svg"
                alt="Blog Post"
                className="w-full h-[520px] object-cover"
              />
              <div className="p-6">
                <div className="flex items-center flex-wrap mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 text-sm font-bold rounded">
                    14 Feb
                  </span>
                  <div className="ml-4 text-gray-600 flex items-center space-x-2">
                    <span className="flex items-center space-x-1 text-yellow-500">
                      <FaCalendarDays />
                      <span>Feb 14, 2022</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaCommentAlt />
                      <span>3 Comments</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <RiAdminLine />
                      <span>Admin</span>
                    </span>
                  </div>
                </div>
                <h1 className="text-2xl font-bold mb-4">
                10 Reasons To Do A Digital Detox Challenge                </h1>
                <p className="text-gray-700 mb-4">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </p>
                <button className="text-orange-500 font-bold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="/Blog7.svg"
                alt="Blog Post"
                className="w-full h-[520px] object-cover"
              />
              <div className="p-6">
                <div className="flex items-center flex-wrap mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 text-sm font-bold rounded">
                    14 Feb
                  </span>
                  <div className="ml-4 text-gray-600 flex items-center space-x-2">
                    <span className="flex items-center space-x-1 text-yellow-500">
                      <FaCalendarDays />
                      <span>Feb 14, 2022</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaCommentAlt />
                      <span>3 Comments</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <RiAdminLine />
                      <span>Admin</span>
                    </span>
                  </div>
                </div>
                <h1 className="text-2xl font-bold mb-4">
                Traditional Soft Pretzels with Sweet Beer Cheese                </h1>
                <p className="text-gray-700 mb-4">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </p>
                <button className="text-orange-500 font-bold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md overflow-hidden mb-6">
              <img
                src="/Blog8.svg"
                alt="Blog Post"
                className="w-full h-[520px] object-cover"
              />
              <div className="p-6">
                <div className="flex items-center flex-wrap mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 text-sm font-bold rounded">
                    14 Feb
                  </span>
                  <div className="ml-4 text-gray-600 flex items-center space-x-2">
                    <span className="flex items-center space-x-1 text-yellow-500">
                      <FaCalendarDays />
                      <span>Feb 14, 2022</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaCommentAlt />
                      <span>3 Comments</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <RiAdminLine />
                      <span>Admin</span>
                    </span>
                  </div>
                </div>
                <h1 className="text-2xl font-bold mb-4">
                  The Ultimate Hangover Burger: Egg in a Hole Burger
                </h1>
                <p className="text-gray-700 mb-4">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </p>
                <button className="text-orange-500 font-bold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="/Blog9.svg"
                alt="Blog Post"
                className="w-full h-[520px] object-cover"
              />
              <div className="p-6">
                <div className="flex items-center flex-wrap mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 text-sm font-bold rounded">
                    14 Feb
                  </span>
                  <div className="ml-4 text-gray-600 flex items-center space-x-2">
                    <span className="flex items-center space-x-1 text-yellow-500">
                      <FaCalendarDays />
                      <span>Feb 14, 2022</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaCommentAlt />
                      <span>3 Comments</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <RiAdminLine />
                      <span>Admin</span>
                    </span>
                  </div>
                </div>
                <h1 className="text-2xl font-bold mb-4">
                  My Favorite Easy Black Pizza Toast Recipe
                </h1>
                <p className="text-gray-700 mb-4">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </p>
                <button className="text-orange-500 font-bold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search Your Keyword..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Author Widget */}
            <div className="bg-white shadow-md rounded-md p-6 mb-6">
              <div className="flex flex-col items-center text-center">
                <img
                  src="Blog2.svg"
                  alt="Author"
                  className="rounded-full w-20 h-20 mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Prince Miyako</h2>
                <p className="text-gray-600">Blogger/Photographer</p>
                <div className="flex items-center justify-center mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-orange-500 hover:scale-110 transition-transform"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.432l-6 5.843 1.417 8.278L12 18.812l-7.417 4.74L6 15.275 0 9.432l8.332-1.277z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-6 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis distinctio, odio eligendi suscipit reprehenderit
                  atque.
                </p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <CiTwitter />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <FaInstagram />
                  </a>
                </div>
              </div>
              
            </div>

            {/* Recent Posts */}
            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
              <ul>
                {recentPosts.map((post) => (
                  <li key={post.id} className="mb-4 flex items-center">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-md mr-4 object-cover"
                    />
                    <div>
                      <a
                        href="#"
                        className="text-orange-500 font-bold hover:underline"
                      >
                        {post.date}
                      </a>
                      <p className="text-gray-600">{post.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
           {/* Filter by Menu */}
           <div className="mt-6">
        <div className="mb-6 bg-white shadow-md rounded-md p-6 gap-9 ">
          <h3 className="text-lg font-bold mb-4">Filter By Menu</h3>
          <div className="space-y-4">
            {[
              {
                image: "/Blog10.svg",
                name: "Chicken Fry",
                price: "$26",
              },
              {
                image: "/Blog12.svg",
                name: "Burger Food",
                price: "$46",
              },
              {
                image: "/Blog13.svg",
                name: "Pizza",
                price: "$16",
              },
              {
                image: "/Blog14.svg",
                name: "Fresh Fruits",
                price: "$36",
              },
              {
                image: "/Blog15.svg",
                name: "Vegetables",
                price: "$16",
              },
            ].map((item) => (
              
              <div className="flex items-center space-x-4 " key={item.name}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded"
                />
                <div className="flex justify-between w-full">
                  <p className="text-black font-bold">{item.name}</p>
                  <p className="text-black font-bold">{item.price}</p>
                </div>
              </div>
            
            ))}
          </div>
        </div>
        </div>

       {/* Popular Tags */}
              <div className="mb-6 bg-white shadow-md rounded-md p-6 gap-9">
                <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["Sandwich", "Tikka", "Burger", "Restaurant","Chicken Sharma","Health","Fastfood","Food","Pizza","Burger","Chicken"].map((tag) => (
                    <span
                      key={tag}
                      className="border border-gray-300 text-sm px-3 py-1 rounded hover:bg-yellow-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>


        {/* Photo Gallery */}
                    <div className="mb-6 bg-white shadow-md rounded-md p-6">
                      <h3 className="text-lg font-bold mb-4">Photo Gallery</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <img
                          src="/Blog16.svg"
                          alt="Gallery"
                          className="rounded"
                        />
                        <img
                          src="/Blog21.svg"
                          alt="Gallery"
                          className="rounded"
                        />
                        <img
                          src="/Blog17.svg"
                          alt="Gallery"
                          className="rounded"
                        />
                        <img
                          src="/Blog18.svg"
                          alt="Gallery"
                          className="rounded"
                        />
                        <img
                          src="/Blog19.svg"
                          alt="Gallery"
                          className="rounded"
                        />
                        <img
                          src="/Blog20.svg"
                          alt="Gallery"
                          className="rounded"
                        />
                      </div>
                    </div>


              {/* Follow Us */}
              <div className="text-center mb-6 bg-white shadow-md rounded-md p-6">
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="bg-white p-3 rounded-full hover:bg-yellow-500 border-2 border-gray-300 flex justify-center items-center">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="#" className="bg-white p-3 rounded-full hover:bg-yellow-500 border-2 border-gray-300 flex justify-center items-center">
                    <CiTwitter className="text-xl" />
                  </a>
                  <a href="#" className="bg-white p-3 rounded-full hover:bg-yellow-500 border-2 border-gray-300 flex justify-center items-center">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="#" className="bg-white p-3 rounded-full hover:bg-yellow-500 border-2 border-gray-300 flex justify-center items-center">
                    <FaPinterest className="text-xl" />
                  </a>
                  <a href="#" className="bg-white p-3 rounded-full hover:bg-yellow-500 border-2 border-gray-300 flex justify-center items-center">
                    <FaYoutube className="text-xl" />
                  </a>
                </div>
              </div>


      
          </div>
        </div>
         {/* Buttons at the End */}
         <div className="mt-8 flex justify-center gap-4">
                <button className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md hover:text-white hover:bg-yellow-500 border-yellow-500">
                  <FaAnglesLeft />
                </button>
                <button className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md hover:text-white hover:bg-yellow-500 border-yellow-500">
                  1
                </button>
                <button className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md hover:text-white hover:bg-yellow-500 border-yellow-500">
                  2
                </button>
                <button className="px-4 py-2 bg-white text-yellow-500 rounded-md  hover:text-white shadow-md hover:bg-yellow-500 border-yellow-500">
                  3
                </button>
                <button className="px-4 py-2 bg-white text-yellow-500  hover:text-white rounded-md shadow-md hover:bg-yellow-500 border-yellow-500">
                  <FaAngleDoubleRight />
                </button>
              </div>
      </div>
     
    </div>
  );
};

export default BlogPage;
