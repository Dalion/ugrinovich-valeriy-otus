const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema  = require('./schema');
const root  = require('./resolver');
const {PORT, HOST} = process.env;

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(PORT);
console.log(`Running a GraphQL API server at http://${HOST}:${PORT}/graphql`);