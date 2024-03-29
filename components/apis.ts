import { Category } from "@/utils/model";
// import { client } from "@/utils/sanity.client";
// import { Aitool } from "@/utils/model";

import client from "@/utils/sanity.client";
import { Game } from "@/utils/model";
export const revalidate = false;
export const dynamic = "force-dynamic";
export const getCategories = async (): Promise<Category[]> => {
  const query = `*[_type == "category"] {
        _id,
        name,
        slug {current},
        image, 
        subtitle
    }`;

  const categories: Category[] = await client.fetch({ query });

  return categories;
};

export const getGames = async (): Promise<Game[]> => {
  const query = `*[_type == "game"] {
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

  const games: Game[] = await client.fetch({ query });

  return games;
};

export const getCategoryGames = async (slug: string): Promise<Game[]> => {
  const query = `*[_type == "game" && category->slug.current == "${slug}"] {
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

  const games: Game[] = await client.fetch({ query });

  return games;
};

export const getCategory = async (slug: string): Promise<Category> => {
  const query = `*[_type == "category" && slug.current == "${slug}"][0]`;

  const category: Category = await client.fetch({ query });

  return category;
};

export const getRecentGames = async (): Promise<Game[]> => {
  const query = `*[_type == "game"] | order(_createdAt desc)[0...4] {
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

  const games: Game[] = await client.fetch({ query });

  return games;
};

export const getGame = async (slug: string): Promise<Game> => {
  const query = `*[_type == "game" && slug.current == "${slug}"][0] {
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

  const game: Game = await client.fetch({ query });

  return game;
};
