/* eslint-disable react/jsx-key */
"use client";
import { Button } from "@mui/material";
import { CustomBreadcrumb } from "@/components/CustomBreadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { IBreadcrumbItem, IProduct } from "@/utils/model";
import React, { useState } from "react";
import { usePagination } from "@mantine/hooks";
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

  const total = Math.ceil(products.length / itemsPerPage);
  const pagination = usePagination({
    total,
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setVisibleProducts(products.slice(start, end));
    },
  });

  return (
    <>
      <CustomBreadcrumb items={breadcrumbItems} />
      <div>
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {itemsPerPage < products.length && (
        <div>
          {pagination.range.map((range) =>
            range === "dots" ? (
              <Button key={range}>...</Button>
            ) : (
              <Button>{range}</Button>
            ),
          )}
        </div>
      )}
    </>
  );
};
