import { Hero } from "@/components/Hero/Hero";
import { AllProducts } from "@/app/features/products";
import { IProduct } from "@/utils/model";
import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";

const getAllProductsQueries: string = `
    *[_type == "product"] {
        "id": _id,
        name,
        description,
        price,   
        rating,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "slug": slug.current,
            "image": image.asset->url
        },
    }
`;

const getProductsAsync = () => {
  return client.fetch(groq`${getAllProductsQueries}`);
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function ProductsPage() {
  const products: IProduct[] = await getProductsAsync();

  return (
    <>
      <AllProducts products={products} />
    </>
  );
}
