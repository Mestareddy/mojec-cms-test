export default {
  name: "brandSlider",
  title: "HomeBrandSlider",
  type: "document",
  fields: [
    {
      name: "altText",
      title: "AltText",
      type: "string",
    },
    {
      name: "headerText",
      title: "HeaderText",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
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