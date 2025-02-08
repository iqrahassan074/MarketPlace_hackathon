"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";
import { Product } from "../../../../types/Products";
import Swal from "sweetalert2";
import Image from "next/image"; 

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData: Product[] = await client.fetch(allproducts);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });

    addToCart(product);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>
      {products.length === 0 ? (
        <p>No products available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-gray-100 border p-4 rounded-lg shadow-lg flex flex-col items-center transition duration-200 hover:scale-105"
            >
              <div className="w-full">
                <div className="w-full mb-4">
                  {product.productImage ? (
                    <Image
                      src={urlFor(product.productImage).width(500).url() || "/placeholder-image.jpg"}
                      alt={product.title}
                      width={500} 
                      height={400}
                      className="object-cover w-full h-64 rounded-md"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
                      <span>No Image Available</span>
                    </div>
                  )}
                </div>

                <Link href={`/product/${product.slug.current}`}>
                  <h2 className="text-xl font-bold text-center mb-2 cursor-pointer hover:text-purple-600">
                    {product.title}
                  </h2>
                </Link>

                <p className="text-left font-semibold py-2 text-lg">
                  {`$${(product.price ?? 0).toFixed(2)} `}
                </p>

                <button
                  className="bg-gradient-to-r from-blue-300 via-indigo-300 to-teal-300 text-black items-center font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
