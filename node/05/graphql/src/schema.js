const { buildSchema } = require('graphql');
const {type: customer} = require('./types/Customer');
const {type: history} = require('./types/History');
const {type: order} = require('./types/Order');
const {type: product} = require('./types/Product');

const schema = buildSchema(`
  ${customer}
  ${history}
  ${order}
  ${product}
  
  type Query {
    getCustomer(id: ID!): Customer
    getAllWaitingCustomers: [Customer]
    getHistory(id: ID!): History
    getHistoryByUser(userID: String!, order: String!): [History]
    getOrder(id: ID!): Order
    getOrdersByUser(userID: String!): [Order]
    getProduct(id: ID!): Product
    getAllProducts: [Product]
    getProductsInStock: [Product]
    getProductsWithPriceInRange(start: Int!, end: Int!): [Product]
  }
  
  type Mutation {
    createCustomer(input: CustomerInput): Customer
    updateCustomer(id: ID!, input: CustomerInput): Customer
    
    createHistory(input: HistoryInput): History
    updateHistory(id: ID!, input: HistoryInput): History
    
    createOrder(input: OrderInput): Order
    updateOrder(id: ID!, input: OrderInput): Order
    
    createProduct(input: ProductInput): Product
    updateProduct(id: ID!, input: ProductInput): Product
    
    putInBucket(userID: String!, productID: String!): Order
    removeFromBucket(userID: String!, productID: String!): Order
  }
`);

module.exports = schema;