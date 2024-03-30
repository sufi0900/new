// import { Hero } from "@/app/Hero/Hero";

import { AllProducts } from "@/app/features/products";
import { IBreadcrumbItem, ICategory, IProduct } from "@/utils/model";
import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";
import React from "react";

const query: string = groq`
    *[_type == "product" && references($slug)] {
        ...,
        "id": _id,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{ name, "slug": slug.current, "image": image.asset->url  },
    }
`;

export const revalidate = 60; // revalidate this page every 60 seconds

type Props = {
  params: {
    slug: string; // change 'id' to 'slug'
  };
};

const items: IBreadcrumbItem[] = [
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Categories",
    link: "/categories",
  },
];

async function CategoryPage({ params: { slug } }: Props) {
  const products: IProduct[] = await client.fetch(query, { slug });

  return (
    <>
      <AllProducts
        products={products}
        breadcrumbItems={[
          ...items,
          {
            name: products[0]?.category?.name,
            link: `/categories/${products[0]?.category?.slug}`,
          },
        ]}
      />
    </>
  );
}

export default CategoryPage;

export async function generateStaticParams() {
  const query = groq`*[_type == "category"] {
    "id": _id,
    "slug": slug.current,
  }`;

  const categories: ICategory[] = await client.fetch(query);

  return categories.map((category) => ({
    params: { slug: category.slug }, // designate the 'slug' as a parameter for each category route
  }));
}
