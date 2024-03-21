"use client";
import { Card } from "@mui/material";

import Avatar from "@mui/material/Avatar"; // Add this import statement
import Breadcrumb from "@/components/Common/Breadcrumb";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { CalendarMonth, Email, Person } from "@mui/icons-material";
// import { SectionHeading } from '@src/components/SectionHeading';
import { ICategory } from "@/utils/model";
import Image from "next/image";
import Link from "next/link";

interface TopCategoriesProps {
  categories: ICategory[];
}

export const TopCategories = ({ categories }: TopCategoriesProps) => {
  return (
    <section id="features" className="py-5 md:py-5 lg:py-5">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.id} className="w-full">
              <div
                className="wow fadeInUp transform overflow-hidden rounded-lg border border-gray-200 p-2 shadow-lg transition duration-300 hover:scale-105 dark:border-gray-700"
                data-wow-delay=".15s"
              >
                <Link href={`/categories/${category.id}`}>
                  <a>
                    <Image
                      src={category.image}
                      alt={category.name}
                      height={100}
                      width={100}
                      className="h-48 w-full object-cover"
                    />
                  </a>
                </Link>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface TopCategoryCardProps {
  category: ICategory;
}

const TopCategoryCard = ({ category }: TopCategoryCardProps) => (
  // <Link href={`/categories/${category.id}`}>
  <div>
    <Image src={category.image} alt={category.name} height={100} width={100} />

    <div>
      <h1>{category.name}</h1>
    </div>
  </div>
  // </Link>
);
