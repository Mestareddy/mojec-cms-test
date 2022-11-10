export default {
    name: "ourpeople",
    title: "Our People (Corporate Information)",
    type: "document",
    fields: [
      {
        name: "id",
        title: "Person ID (1,2,3...)",
        type: "number",
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