"use client";
import { Card, Grid } from "@mui/material";
import { ICategory } from "@/utils/model";
import Image from "next/image";
import Link from "next/link";

interface AllCategoriesProps {
  categories: ICategory[];
}
export const AllCategories = ({ categories }: AllCategoriesProps) => {
  return (
    <Grid>
      {categories?.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Grid>
  );
};

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => (
  <Link href={`/categories/${category.id}`}>
    <Card>
      <Image
        src={category.image}
        alt={category.name}
        height={200}
        width={200}
      />

      <div>
        <h1>{category.name}</h1>
      </div>
    </Card>
  </Link>
);
