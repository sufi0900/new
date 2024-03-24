/* eslint-disable @next/next/no-img-element */
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/app/blog/page";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Marquee from "@/components/marquee-brands";
import Feature from "@/components/feature-news-card";
import Contact from "@/components/Contact";
import News from "@/components/News";
import { TopCategories } from "@/components/TopCategories/index";
// import { AllCategories } from "@/components/TopCategories/SingleFeature";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import { IFeaturedItems } from "@/utils/model";
import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";

const getAllFeaturedItemsQueries = `
    *[_type == "featuredProductsAndCategories"]{
        "topCategories": topCategories[]->{
            "id": _id,
            name,
            "slug": slug.current,
            "image": image.asset->url,
        },
        "bestDeals": bestDeals[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "trendingProducts": trendingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "mostSellingProducts": mostSellingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        }
    }
`;
const getFeaturedItemsAsync = () => {
  return client.fetch(groq`${getAllFeaturedItemsQueries}`);
};
export default async function Home() {
  const featuredItems: IFeaturedItems[] = await getFeaturedItemsAsync();

  return (
    <>
      <ScrollUp />

      <Hero />

      <TopCategories
        categories={
          featuredItems && featuredItems.length > 0
            ? featuredItems[0].topCategories
            : []
        }
      />

      <Marquee />
      <Feature />
      {/* <AllCategories categories={[]} /> */}
      {/* <Video /> */}

      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />

      <News />
      <Contact />
    </>
  );
}
