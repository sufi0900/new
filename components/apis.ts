import { Category } from "@/utils/model";
// import { client } from "@/utils/sanity.client";
// import { Aitool } from "@/utils/model";
import { groq } from "next-sanity";

import { client } from "@/utils/sanity.client";
import { Game } from "@/utils/model";
export const revalidate = false;
export const dynamic = "force-dynamic";
// for getCategories function
export const getCategories = async (): Promise<Category[]> => {
  const query = groq`*[_type == "category"] {
        _id,
        name,
        slug {current},
        image, 
        subtitle
    }`;

  const categories: Category[] = await client.fetch(query);

  return categories;
};

// for getGames function
export const getGames = async (): Promise<Game[]> => {
  const query = groq`*[_type == "game"] {
        name,
        price,
        images,
        isFeatured,
        isTrending,
        'category': *[_id == ^.category._ref][0] {
          name,
          slug {
            current
          }
        },
        slug,
        quantity,
        description
      }`;

  const games: Game[] = await client.fetch(query);

  return games;
};

// for getCategoryGames function
export const getCategoryGames = async (slug: string): Promise<Game[]> => {
  const query = groq`*[_type == "game" && category->slug.current == "${slug}"] {
    name,
    price,
    images,
    isFeatured,
    isTrending,
    slug,
    quantity,
    description,
    category->{
      name,
      subtitle
    }
  }`;

  const games: Game[] = await client.fetch(query);

  return games;
};

// for getCategory function
export const getCategory = async (slug: string): Promise<Category> => {
  const query = groq`*[_type == "category" && slug.current == "${slug}"][0]`;

  const category: Category = await client.fetch(query);

  return category;
};

// for getRecentGames function
export const getRecentGames = async (): Promise<Game[]> => {
  const query = groq`*[_type == "game"] | order(_createdAt desc)[0...4] {
        name,
        price,
        images,
        isFeatured,
        isTrending,
        'category': *[_id == ^.category._ref][0] {
          name,
          slug {
            current
          }
        },
        slug,
        quantity,
        description
      }`;

  const games: Game[] = await client.fetch(query);

  return games;
};

// for getGame function
export const getGame = async (slug: string): Promise<Game> => {
  const query = groq`*[_type == "game" && slug.current == "${slug}"][0] {
        _id,
        name,
        price,
        images,
        isFeatured,
        isTrending,
        'category': *[_id == ^.category._ref][0] {
          name,
          slug {
            current
          }
        },
        slug,
        quantity,
        description
  }`;

  const game: Game = await client.fetch(query);

  return game;
};
