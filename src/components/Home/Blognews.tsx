import React from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import Image from "next/image";






const Blognews = () => {
  const blogs = [
    {
      id: 1,
      image: "./last1.svg",
      date: "10 February 2022",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      link: "#",
    },
    {
      id: 2,
      image: "./last2.svg",
      date: "10 February 2022",
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
      link: "#",
    },
    {
      id: 3,
      image: "./last3.svg",
      date: "10 February 2022",
      title: "Curabitur rutrum velit ac congue malesuada",
      link: "#",
    },
  ];

  return (
    <div className="w-full bg-black py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-xl italic text-yellow-500">Blog Post</h2>
        <h1 className="text-4xl font-bold text-yellow-500 mt-2">
          La<span className="text-white">test News & Blog</span>
        </h1>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg text-left"
            >
              {/* Blog Image */}
              <Image
                src={blog.image}
                alt={blog.title}
                width={56}
                height={56}
                className="w-full h-56 object-cover"
              />
              {/* Blog Content */}
              <div className="p-6">
                <p className="text-yellow-500 text-sm">{blog.date}</p>
                <h3 className="text-lg text-white font-semibold mt-2">
                  {blog.title}
                </h3>
                <a
                  href={blog.link}
                  className="inline-block mt-4 text-yellow-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
              {/* Social Icons */}
              <div className="flex items-right justify-end px-6 py-4 border-t border-gray-700 gap-9">
                <button className="text-gray-400 hover:text-yellow-500">
                  <i className="fas fa-thumbs-up"> <FaRegThumbsUp /> </i> {/* Like Icon */}
                </button>
                <button className="text-yellow-400 hover:text-white-500">
                  <i className="fas fa-share"><FaRegMessage /></i> {/* Message Icon */}
                </button>
                <button className="text-gray-400 hover:text-yellow-500">
                  <i className="fas fa-share"><FaShareAlt /> </i> {/* Share Icon */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blognews;
