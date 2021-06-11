const { buildSchema } = require('graphql');
const func = require('./functions');

let schema = buildSchema(`
    type Query {
        products: [Products],
        product(id: Int!): Products 
    }
    type Mutation {
        addProduct(
            title: String, 
            price: String, 
            stock: String,
            code: String,
            thumbnail: String,
            description: String
        ): Products
    },
    type Products {
        id: Int
        title: String
        price: String
        stock: String
        code: String
        thumbnail: String
        timestamp: String
        description: String
    }
`);

const root = {
    products: func.getProducts,
    product: func.getProductById,
    addProduct: func.addProduct
}

module.exports = {
    schema,
    root
}