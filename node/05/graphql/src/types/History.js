class History {
  constructor(id, {userID, orderID, createdAt}){
    this.id = id;
    this.userID = userID;
    this.orderID = orderID;
    this.createdAt = createdAt;
  }
}

const historyType = `
  input HistoryInput {
    userID: String!
    orderID: String!
  }

  type History {
    id: ID!
    userID: String!
    orderID: String!
    createdAt: String
  }`;

module.exports = {
  History: History,
  type: historyType
};