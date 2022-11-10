export default {
    name: "corpquotes",
    title: "Corporate Social Quotes(Corporate Information)",
    type: "document",
    fields: [
      {
        name: "quoteword",
        title: "Quote Word",
        type: "text",
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
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "position",
        title: "Position",
        type: "string",
      },
      {
        name: "header",
        title: "Header",
        type: "text",
      },
      {
        name: "details",
        title: "Person Details",
        type: "array",
        of: [{ name: "desc", title: "Description", type: "text" }]
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
    ],
  };