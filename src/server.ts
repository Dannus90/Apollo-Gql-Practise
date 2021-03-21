
import { ApolloServer } from "apollo-server";
import { rootTypeDefs } from "./graphql/type-defs/root-type-defs";
import { rootResolver } from "./graphql/resolvers/root-resolver";


const apolloServer = new ApolloServer({
  typeDefs: rootTypeDefs,
  resolvers: rootResolver,
  introspection: true,
  playground: true,
  context: ({ req }) => ({ req })
})

apolloServer.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});