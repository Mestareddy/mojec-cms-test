export default {
  name: "homeslider",
  title: "HomeSlider",
  type: "document",
  fields: [
    {
      name: "headerContent",
      title: "Header Content",
      type: "string",
    },
    {
      name: "descContent",
      title: "Description Content",
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