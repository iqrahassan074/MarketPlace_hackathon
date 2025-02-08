import { Product } from "../../../../types/Products";
import { getProduct } from "@/sanity/lib/getProduct";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  
  const product: Product | null = await getProduct(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const productImageUrl = product.productImage ? urlFor(product.productImage).url() : null;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-square">
          {productImageUrl && (
            <Image
              src={productImageUrl}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-xl text-gray-500 mt-4">{`$${product.price}`}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
























