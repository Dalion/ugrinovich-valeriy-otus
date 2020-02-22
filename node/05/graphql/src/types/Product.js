class Product {
  constructor(id, {title, stock, price}){
    this.id = id;
    this.title = title;
    this.stock = stock;
    this.price = price;
  }
}

const productType = `
  input ProductInput {
    title: String
    stock: Int
    price: Float
  }

  type Product {
    id: ID!
    title: String!
    stock: Int
    price: Float
  }`;

module.exports = {
  Product: Product,
  type: productType
};