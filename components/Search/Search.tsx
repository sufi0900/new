/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
// import { SearchIcon } from "@chakra-ui/icons";
"use client";

import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  Text,
  useOutsideClick,
} from "@chakra-ui/react";
import { IProduct } from "@/utils/model";
import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { inputGroup } from "./Style";
import { SearchOff } from "@mui/icons-material";

const query: string = groq`
    *[_type == "product" && (name match $searchText || description match $searchText) ] {
      ...,
      "id": _id,
      "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "image": image.asset->url
        },
        "gallery": gallery[].asset->url
    }
`;

export const Search = () => {
  const ref = useRef<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  useOutsideClick({
    ref: ref,
    handler: () => {
      setIsModalOpen(false);
      setProducts([]);
    },
  });

  const fetchProducts = async () => {
    setIsLoading(true);
    const products: IProduct[] = await client.fetch(query, {
      searchText: `*${searchText}*`,
    });
    setProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText.trim().length >= 3) {
        fetchProducts();
        setIsModalOpen(true); // Show the modal when searching
      } else {
        setIsModalOpen(false); // Hide the modal if search text is empty
        setProducts([]); // Clear the products list
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchText]);

  // Close the modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsModalOpen(false);
        setProducts([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-50">
      <div className="mb-8 w-full">
        <input
          className="w-full rounded-md border p-4 text-lg"
          type="search"
          placeholder="Search..."
          value={searchText}
          onClick={() => setIsModalOpen(true)}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <SearchOff className="absolute right-4 top-1/2 -translate-y-1/2 transform" />
      </div>
      {isModalOpen && (
        <div className="absolute top-full z-50 max-h-80 w-full overflow-y-auto bg-white p-2 shadow-md dark:border-gray-700 dark:bg-gray-800">
          {products.length === 0 ? (
            isLoading ? (
              <div>Loading...</div>
            ) : (
              <div>No Products Found</div>
            )
          ) : (
            <SearchedProductList products={products} />
          )}
        </div>
      )}
    </div>
  );
};

interface SearchedProductListProps {
  products: IProduct[];
}

const SearchedProductList = ({ products }: SearchedProductListProps) => {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className={`z-50 border-b border-gray-200 bg-white p-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
        >
          <Link href={`/products/${product.slug}`}>
            <div className="flex items-center">
              <img
                src={product.mainImage}
                alt={product.name}
                className="mr-2 h-6 w-6"
              />
              <span className="text-gray-600 dark:text-gray-300">
                {product.name}
              </span>
            </div>
            <div className="flex justify-end">
              <span className="text-sm">{product.category.name}</span>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
