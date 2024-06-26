/* eslint-disable react/jsx-key */
"use client";
import { Button } from "@mui/material";
import { CustomBreadcrumb } from "@/components/CustomBreadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { IBreadcrumbItem, IProduct } from "@/utils/model";
import React, { useState } from "react";
// import { usePagination } from "@mantine/hooks";
// import { Hero } from "@/components/Hero/Hero";

interface AllProductsProps {
  products: IProduct[];
  breadcrumbItems?: IBreadcrumbItem[];
}

const itemsPerPage = 10;

export const AllProducts = ({
  products,
  breadcrumbItems,
}: AllProductsProps) => {
  const [visibleProducts, setVisibleProducts] = useState(
    products.slice(0, itemsPerPage),
  );

  // const total = Math.ceil(products.length / itemsPerPage);
  // const pagination = usePagination({
  //   total,
  //   initialPage: 1,
  //   onChange(page) {
  //     const start = (page - 1) * itemsPerPage;
  //     const end = start + itemsPerPage;
  //     setVisibleProducts(products.slice(start, end));
  //   },
  // });

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      page
      {visibleProducts.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  );
};
