"use client";
import { Card } from "@chakra-ui/react";
import { getSubstring } from "@/utils/helpers";
import { IProduct } from "@/utils/model";
// import { styled } from "@mui/material/styles";

import Link from "next/link";

import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card w="xs" pos="relative" m="0.5rem">
      <div className="card rounded-lg border bg-white p-6 shadow-sm transition duration-300 ease-in-out hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 flex items-center justify-center">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar
                alt="Verified"
                src={product.mainImage}
                style={{ width: "40px", height: "40px" }}
              />
            }
          >
            <Avatar
              alt="AI Tool Logo"
              src="/images/1.jpg"
              style={{ width: "100px", height: "100px" }}
            />
          </Badge>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          {getSubstring(product.name, 20)}
        </h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {/* {getSubstring(product.description, 30)}{" "} */}
        </p>
        <div className="mb-4 flex items-center">
          {/* Star Rating */}
          <div className="mr-2 flex">
            <svg
              className="text-yellow-400 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.396-.802 1.556-.802 1.952 0l1.837 3.729 4.118.598c.85.123 1.191 1.171.575 1.771l-2.982 2.904.704 4.093c.15.87-.764 1.53-1.512 1.12l-3.676-1.933-3.676 1.933c-.748.41-1.662-.25-1.512-1.12l.704-4.093-2.982-2.904c-.616-.6-.275-1.648.575-1.771l4.118-.598 1.837-3.729z" />
            </svg>
            {/* ... */}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            (4.5)
          </span>
        </div>
        <div className="mb-4 flex gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-900">
            New
          </span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">
            Featured
          </span>
          <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 rounded-full px-3 py-1 text-sm font-semibold">
            Popular
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <Link
            href={`/categories/${product.category.slug}/${product.slug}`}
            className="mb-2 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 sm:mb-0"
          >
            Visit AI Tool
          </Link>
          <a
            href="/how-to-use-ai-tool-1"
            className="inline-block rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 ease-in-out hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            How to Use
          </a>
        </div>
      </div>

      {/* <AddToWishlistButton product={product} /> */}
      {/* <CardBody>
        <Link href={`/products/${product.slug}`}>
          <Box
            bg={`center / contain no-repeat url(${product.mainImage})`}
            borderRadius="lg"
            boxSize="200px"
            mx="auto"
          />
        </Link>
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Link href={`/products/${product.slug}`}>
              <Heading size="sm">{getSubstring(product.name, 20)}</Heading>
            </Link>
            <Flex color="brand.primaryDark" fontWeight="bold">
              <Text fontSize="sm">$ </Text>
              <Text fontSize="lg">{product.price}</Text>
            </Flex>
          </Flex>
          <Text fontSize="sm"> {getSubstring(product.description, 30)} </Text> */}
      {/* <Rating rating={product.rating} /> */}

      {/* <AddToCartButton product={product} /> */}
      {/* </Stack>
      </CardBody> */}
    </Card>
  );
};
