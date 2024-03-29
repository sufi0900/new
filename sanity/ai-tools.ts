export const Blog = {
  name: "aitool",
  title: "Ai Tools",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "title of ai tool",
    },

    {
      name: "overview",
      title: "overview",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },

        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative Text",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
};
