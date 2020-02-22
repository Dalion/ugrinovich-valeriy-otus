class Order {
  constructor(id, {userID, productIDs, status}){
    this.id = id;
    this.userID = userID;
    this.productIDs = productIDs;
    this.status = status;
  }
}

const orderType = `
  input OrderInput {
    userID: String!
    productIDs: [String!]
    status: String!
  }

  type Order {
    id: ID!
    userID: String!
    productIDs: [String!]
    status: String!
  }`;

module.exports = {
  Order: Order,
  type: orderType
};