export const Populartools = {
  name: "popular",
  title: "Popular-tools",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of tool",
    },
    {
      name: "link",
      title: "Link",
      type: "link",
      description: "Name of tool",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
