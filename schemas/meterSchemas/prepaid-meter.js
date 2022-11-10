export default {
    name: "prepaidmeter",
    title: "Pre-Paid-Meter",
    type: "document",
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: 'images' }],
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: 'content' }],
        },
        {
            name: "overview",
            title: "Overview",
            type: "array",
            of: [{ type: 'overview' }],
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ]
};

