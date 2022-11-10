export default {
    name: "businessVerticals",
    title: "BusinessVerticals",
    type: "document",
    fields: [
      {
        name: "id",
        title: "ID (1,2,3...)",
        type: "number",
      },
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "desc",
        title: "Description",
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
        name: "link",
        title: "link",
        type: "string",
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
    ],
  };