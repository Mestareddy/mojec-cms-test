export default {
  name: "homestories",
  title: "HomeTopStories",
  type: "document",
  fields: [
    {
      name: "headerText",
      title: "HeaderText",
      type: "string",
    },
    {
      name: "altText",
      title: "AltText",
      type: "string",
    },
    {
      name: "descText",
      title: "DescText",
      type: "text",
    },
    {
      name: "img",
      title: "Img",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};