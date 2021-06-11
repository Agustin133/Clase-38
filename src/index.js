const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./application/routes/index');
const { graphqlHTTP } = require('express-graphql');
const graphql = require('./graphql/index');
const PORT = 3000 || process.env.PORT; 

app.use(bodyParser.json());
app.use("/", router);

app.use('/graphql', graphqlHTTP({
    schema: graphql.schema,
    rootValue: graphql.root,
    graphiql: true
}));

app.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`);
})