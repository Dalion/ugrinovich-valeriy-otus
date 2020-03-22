class Customer {
  constructor(id, {name, email}){
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

const customerType = `
  input CustomerInput {
    name: String
    email: String
  }

  type Customer {
    id: ID!
    name: String!
    email: String!
  }`;

module.exports = {
  Customer: Customer,
  type: customerType
};