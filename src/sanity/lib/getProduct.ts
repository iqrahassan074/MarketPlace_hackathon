import { sanityfetch } from "./fetch";  
import { groq } from "next-sanity";
import { Product } from "../../../types/Products";  

export async function getProduct(slug: string): Promise<Product | null> {
  const query = groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    price,
    description,
    "productImage": productImage.asset->url
  }`;

  
  const product = await sanityfetch({
    query,
    params: { slug },
  });

  return product || null;  
}
















