export default {
    name: "timeline",
    title: "History (Corporate Information)",
    type: "document",
    fields: [
      {
        name: "year",
        title: "Year",
        type: "number"
      },
      {
        name: "desc",
        title: "Timeline Description",
        type: "string"
      },
      {
        name: "image",
        title: "Image",
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