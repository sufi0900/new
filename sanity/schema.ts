import { type SchemaTypeDefinition } from "sanity";
import { CategorySchema } from "./category-schema";
import { GalleryImageSchema } from "./gallery-image-schema";
import { ProductSchema } from "./product-schema";
import { FeaturedProductsAndCategories } from "./top-categories-schema";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    CategorySchema,
    GalleryImageSchema,
    ProductSchema,
    FeaturedProductsAndCategories,
  ],
};
