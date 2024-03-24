import { AllProducts } from "@/app/features/products";
import { IBreadcrumbItem, ICategory, IProduct } from "@/utils/model";
import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";
import React from "react";

const query: string = groq`
*[_type == "product" && references(*[_type == "category" && slug.current == $id]._id)] {
       
        "id": _id,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{ name, "image": image.asset->url  },
    }
`;

export const revalidate = 60; // revalidate this page every 60 seconds

type Props = {
  params: {
    id: string;
  };
};

async function CategoryPage({ params: { id } }: Props) {
  const products: IProduct[] = await client.fetch(query, { id });

  return (
    <>
      <AllProducts
        products={products}
        breadcrumbItems={[{ name: products[0]?.category?.name, link: "#" }]}
      />
    </>
  );
}

export default CategoryPage;

export async function generateStaticParams() {
  const query = groq`*[_type == "category"] {
    "id": _id
  }`;

  const categories: ICategory[] = await client.fetch(
    groq`*[_type == "category"]{ ..., "slug": slug.current }`,
  );

  return categories.map((category) => ({
    params: { id: category.slug },
  }));
}
