import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create a Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity Project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Sanity Dataset (e.g., 'production')
  apiVersion: '2021-08-31',                            // API version
  useCdn: true,                                        // Use the CDN for faster responses
});

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export const urlFor = (source) => builder.image(source);
