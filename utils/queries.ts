import { groq } from "next-sanity";

const getAllProductsQueries: string = `
    *[_type == "product"] {
        "id": _id,
        name,
        description,
        price,   
        rating,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "slug": slug.current,
            "image": image.asset->url
        },
    }
`;

const query: string = groq`
    *[_type == "product" && slug.current == $product && category->slug.current == $category][0] {
      ...,
      "id": _id,
      "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "slug": slug.current,
            "image": image.asset->url
        },
        "gallery": gallery[].asset->url
    }
`;

const getAllCategoriesQueries = groq`
    *[_type == "category"] {
        "id": _id,
        name,
        "image": image.asset->url 
    }
`;

const getAllFeaturedItemsQueries = groq`
    *[_type == "featuredProductsAndCategories"]{
        "topCategories": topCategories[]->{
            "id": _id,
            name,
            "image": image.asset->url,
        },
        "bestDeals": bestDeals[]->{
            "id": _id,
            name,
            price,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "trendingProducts": trendingProducts[]->{
            "id": _id,
            name,
            price,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "mostSellingProducts": mostSellingProducts[]->{
            "id": _id,
            name,
            price,
            rating,
            "mainImage": mainImage.asset->url,
        }
    }
`;
