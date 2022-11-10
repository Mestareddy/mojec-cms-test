export default {
    name: 'overview',
    title: "Overview",
    type: 'document',
    fields: [
        {
            name: 'prodName',
            title: 'ProdName',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'text'
        },
        {
            name: 'list',
            title: 'List',
            type: 'array',
            of: [{ type: 'content' }]
        },
    ]
}