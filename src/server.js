import { config } from "dotenv"
config({ path: ".env.local" })
import { ApolloServer } from "apollo-server"

import { typeDefs } from "./graphql/type-defs/Book"
import {  } from "./graphql/resolvers/index.js"


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: "Add",
  introspection: true,
  playground: true,
  context: ({ req }) => ({ req })
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});