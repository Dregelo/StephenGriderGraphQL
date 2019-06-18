const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

const port = 3001;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
