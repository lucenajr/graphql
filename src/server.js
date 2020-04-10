const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./api/schema')
const port = 4000

const app = express()

app.use('/api', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, () => console.log(`Executando na porta: ${port}`))