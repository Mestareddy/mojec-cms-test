export default {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],
};
// export default {
//   title: "Hero",
//   name: "hero",
//   type: "object",
//   fields: [
//     {
//       name: "title",
//       title: "Title",
//       type: "string",
//     },
//     {
//       name: "subtitle",
//       title: "Subtitle",
//       type: "string",
//     },
//     {
//       name: "description",
//       title: "Description",
//       type: "string",
//     },
//     {
//       name: "image",
//       title: "Image",
//       type: "image",
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: {
//         source: "title",
//         maxLength: 96,
//       },
//     },
//   ],
// };
