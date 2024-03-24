// import { Hero } from "@/app/Hero/Hero";

import { AllCategories } from "@/components/categories/index";
import { ICategory } from "@/utils/model";
import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";

const getAllCategoriesQueries = `
*[_type == "category" && slug.current == $slug][0] {
  "id": _id,
  name,
  "slug": slug.current,
  "image": image.asset->url 
}

`;

const getCategoriesAsync = () => {
  return client.fetch(groq`${getAllCategoriesQueries}`);
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function AllCategoriesPage() {
  const categories: ICategory[] = await client.fetch(
    groq`*[_type == "category"]{ ..., "slug": slug.current }`,
  );

  return (
    <>
      <AllCategories categories={categories} />
    </>
  );
}
