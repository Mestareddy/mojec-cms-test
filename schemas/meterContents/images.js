export default {
    name: 'images',
    title: "Images",
    type: 'document',
    fields: [
        {
            name: "img",
            title: "Img",
            type: "image",
            options: {
                hotspot: true,
            },
        },
          {
            name: 'tag',
            title: 'Tag',
            type: 'string'
        },
        {
            name: 'headerContent',
            title: 'HeaderContent',
            type: 'string'
        },
        {
            name: 'descContent',
            title: 'DescContent',
            type: 'text'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
    ]
}