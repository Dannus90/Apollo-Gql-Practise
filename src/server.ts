
import { ApolloServer } from "apollo-server"
import { typeDefs } from "./graphql/type-defs/Book"
import { rootResolver } from "./graphql/resolvers/root-resolver"

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: rootResolver,
  introspection: true,
  playground: true,
  context: ({ req }) => ({ req })
})

apolloServer.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});