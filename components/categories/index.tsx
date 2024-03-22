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
      {categories.map((category) => (
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
    <div className="-mx-4 flex flex-wrap">
      {/* Example Card 1 */}
      <div className=" mb-8 w-full px-4 sm:w-1/2 lg:w-1/3">
        <div className="card rounded-lg border bg-white p-6 shadow-sm transition duration-300 ease-in-out hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-center">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <Avatar
                  alt="Verified"
                  src="https://www.vhv.rs/dpng/d/4-47477_instagram-blue-tick-emoji-copy-hd-png-download.png"
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
            AI Image Generator
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Generate realistic images from text prompts.
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
            <a
              href="/visit-ai-tool-1"
              className="mb-2 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 sm:mb-0"
            >
              Visit AI Tool
            </a>
            <a
              href="/how-to-use-ai-tool-1"
              className="inline-block rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 ease-in-out hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              How to Use
            </a>
          </div>
        </div>
      </div>

      {/* Example Card 2 */}
      {/* ... similar structure for other cards ... */}

      <div className="mb-8 w-full px-4 sm:w-1/2 lg:w-1/3">
        <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-center">
            {/* <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-500"> */}

            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <SmallAvatar
                  style={{
                    background: "transparent",
                    width: "40px",
                    height: "40px",
                  }} // Adjust width and height as needed
                  alt="Remy Sharp"
                  src="https://www.vhv.rs/dpng/d/4-47477_instagram-blue-tick-emoji-copy-hd-png-download.png"
                />
              }
            >
              <Avatar
                alt="Travis Howard"
                src="/images/1.jpg"
                style={{ width: "100px", height: "100px" }} // Adjust width and height as needed
              />
            </Badge>

            {/* <img
                    src="/images/1.jpg"
                    alt="AI Tool Logo"
                    className="h-full w-full object-cover"
                  /> */}
            {/* <span className="absolute bottom-0 right-0 inline-block rounded-full bg-blue-500 p-1 text-xs text-white">
                    ✔
                  </span> */}
          </div>
          {/* </div> */}
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            AI Image Generator
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Generate realistic images from text prompts.
          </p>
          <div className="mb-4 flex items-center">
            {/* Star Rating */}
            <div className="mr-2 flex">
              {/* Repeat for the number of stars */}
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
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <Link
              href="/visit-ai-tool-1"
              className="mb-2 inline-block text-blue-600 hover:underline dark:text-blue-400 sm:mb-0"
            >
              Visit AI Tool
            </Link>
            <Link
              href="/how-to-use-ai-tool-1"
              className="inline-block text-blue-600 hover:underline dark:text-blue-400"
            >
              How to Use
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-8 w-full px-4 sm:w-1/2 lg:w-1/3">
        <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-center">
            {/* <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-500"> */}

            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <SmallAvatar
                  style={{
                    background: "transparent",
                    width: "40px",
                    height: "40px",
                  }} // Adjust width and height as needed
                  alt="Remy Sharp"
                  src="https://www.vhv.rs/dpng/d/4-47477_instagram-blue-tick-emoji-copy-hd-png-download.png"
                />
              }
            >
              <Avatar
                alt="Travis Howard"
                src="/images/1.jpg"
                style={{ width: "100px", height: "100px" }} // Adjust width and height as needed
              />
            </Badge>

            {/* <img
                    src="/images/1.jpg"
                    alt="AI Tool Logo"
                    className="h-full w-full object-cover"
                  /> */}
            {/* <span className="absolute bottom-0 right-0 inline-block rounded-full bg-blue-500 p-1 text-xs text-white">
                    ✔
                  </span> */}
          </div>
          {/* </div> */}
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            AI Image Generator
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Generate realistic images from text prompts.
          </p>
          <div className="mb-4 flex items-center">
            {/* Star Rating */}
            <div className="mr-2 flex">
              {/* Repeat for the number of stars */}
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
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <Link
              href="/visit-ai-tool-1"
              className="mb-2 inline-block text-blue-600 hover:underline dark:text-blue-400 sm:mb-0"
            >
              Visit AI Tool
            </Link>
            <Link
              href="/how-to-use-ai-tool-1"
              className="inline-block text-blue-600 hover:underline dark:text-blue-400"
            >
              How to Use
            </Link>
          </div>
        </div>
      </div>
    </div>
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
