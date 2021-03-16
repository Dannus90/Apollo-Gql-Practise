import { gql } from "apollo-server";

export const typeDefs = gql`
  #Used for commenting in gql.
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`
