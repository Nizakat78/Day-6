"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { client, urlFor } from '../../lib/sanityClient';

// Define the structure of the image field properly
type Chef = {
  name: string;
  position: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

export default function FoodCategory() {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    // Fetch chef data from Sanity
    const fetchChefs = async () => {
      const query = `*[_type == "chef"]{
        name,
        position,
        image
      }`;
      const data = await client.fetch<Chef[]>(query);
      setChefs(data);
    };

    fetchChefs();
  }, []);

  return (
    <section className="relative py-15 bg-cover bg-center">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 py-12 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          <span className="text-orange-500">Chefs</span>
          <br />
          <span className="text-yellow-500">Me</span>et Our Chef
        </h2>

        {/* Flexbox for the chef items */}
        <div className="flex flex-wrap justify-center gap-4">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white rounded-md shadow-lg relative overflow-hidden"
            >
      
      
                
               <Image
                src={urlFor(chef.image).width(300).url()} // Generate image URL
                alt={chef.name}
                className="w-full h-auto object-cover"
                width={250}
                height={250}
              />
    
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-90 p-3">
                <h3 className="text-lg font-bold text-black text-left">{chef.name}</h3>
                <p className="text-sm text-gray-600 text-left">{chef.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/3 lg:w-1/4 absolute bottom-0 left-0 transform rotate-40 md:rotate-0">
          <div className="overflow-hidden">
            <Image
              src="/bg3.svg"
              alt="Food Item"
              width={444}
              height={532}
              className="object-cover w-full h-[330px] md:h-[400px] lg:h-[450px] object-left-bottom"
            />
          </div>
        </div>

        {/* See More Button */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}
