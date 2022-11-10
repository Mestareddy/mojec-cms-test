export default {
  name: "careers",
  title: "Careers",
  type: "document",
  fields: [
    {
      name: "tweetText",
      title: "TweetText",
      type: "string",
    },
    {
      name: "postedOn",
      title: "PostedOn",
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