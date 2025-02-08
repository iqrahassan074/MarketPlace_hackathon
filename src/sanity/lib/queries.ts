import { groq } from "next-sanity";

export const allproducts = groq`
  *[_type == "product"]{
    _id,
    title,
    description,
    price,
    "productImage": productImage.asset->url, 
    slug {
      current
    }
  }
`;



