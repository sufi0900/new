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
    <Box>
      <h1 title=" Shop Our Top Categories" />

      <Grid>
        {categories.map((category) => (
          <div key={category.id}>
            <TopCategoryCard category={category} />
          </div>
        ))}
      </Grid>

      <Link href="/categories">
        <button>Browse All Categories</button>
      </Link>
    </Box>
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
