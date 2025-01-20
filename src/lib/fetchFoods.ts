import { client } from './sanityClient';
import { Food } from '../app/types/food';

// Function to fetch foods data
export async function getFoods(): Promise<Food[]> {
  const query = `*[_type == "food"]{
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
  }`;
  
  const foods = await client.fetch(query);
  return foods;
}
