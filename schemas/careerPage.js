export default {
    name: "careerpage",
    title: "Career Page",
    type: "document",
    fields: [
      {
        name: "img",
        title: "Image",
        type: "image",
      },
      {
        name: "tag",
        title: "Tag",
        type: "string",
      },
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
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
    ],
  };