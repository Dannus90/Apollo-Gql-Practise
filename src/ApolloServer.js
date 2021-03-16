import { ApolloServer } from "apollo-server"

import { typeDefs } from "./graphql/type-defs/Book"
import { userResolvers } from "./graphql/resolvers/index.js"

export default () => {
  return new ApolloServer({
    typeDefs,
    resolvers: userResolvers,
    introspection: true,
    playground: true,
    context: ({ req }) => ({ req }),
    engine: {
      reportSchema: true,
      variant: "current"
    }
  })
}
