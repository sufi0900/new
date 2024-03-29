import React from "react";
import { groq } from "next-sanity";
import { client } from "@/utils/sanity.client";
import { AllProducts } from "@/app/features/products";
import { IBreadcrumbItem, IProduct } from "@/utils/model";

// Define your category and products query using the slug
const categoryAndProductsQuery = groq`
  *[_type == "category" && slug.current == $slug]{
    "categoryId": _id,
    name,
    "slug": slug.current,
    "products": *[_type == "product" && references(^._id)] {
      _id,
      name,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      category->{name, "slug": slug.current},
    }
  }[0]
`;

function CategoryPage({ category }) {
  // Assuming you have a component AllProducts to render products and Breadcrumbs for navigation
  const breadcrumbItems: IBreadcrumbItem[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Categories",
      link: "/categories",
    },
  ];

  return (
    <>
      {/* <h1>{category.name}</h1> */}
      {/* Render your breadcrumbs and products list components here */}
      <AllProducts
        products={category.products}
        breadcrumbItems={breadcrumbItems}
      />
    </>
  );
}

// Using getServerSideProps for server-side rendering
// export async function getServerSideProps(context) {
//   const { slug } = context.params;
//   const category = await client.fetch(categoryAndProductsQuery, { slug });

//   // If no category is found, return a 404 page
//   if (!category) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       category,
//     },
//   };
// }

export default CategoryPage;
