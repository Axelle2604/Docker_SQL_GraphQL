const express = require('express');
const bodyParser = require('body-parser');
const schema = require('./services/schema.js');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

const server = app.listen(8080, () =>
  console.log(`Server started on http://localhost:${server.address().port}.`)
);
