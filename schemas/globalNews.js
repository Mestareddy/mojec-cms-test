export default {
  name: "globalnews",
  title: "GlobalNews",
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
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
