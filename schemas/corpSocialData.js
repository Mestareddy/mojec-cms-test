export default {
    name: "corpsocial",
    title: "Corporate Social Data",
    type: "document",
    fields: [
      {
        name: "img",
        title: "Image",
        type: "image",
      },
      {
        name: "altText",
        title: "Alt  Text",
        type: "string",
      },
      {
        name: "headerText",
        title: "Header Text",
        type: "text",
      },
      {
        name: "descText",
        title: "Description Text",
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