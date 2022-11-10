export default {
  name: "awards",
  title: "HomeAwards&Achievements",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
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
