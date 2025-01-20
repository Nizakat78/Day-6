import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create a Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // Ensure this is set in your .env.local
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!, // Ensure this is set in your .env.local
  apiVersion: '2021-08-31', // Check for the latest API version if needed
  useCdn: true,
});

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Create a helper function to generate image URLs
export const urlFor = (source: any) => {
  console.log("Sanity Image Source:", source);
  return builder.image(source);
};
