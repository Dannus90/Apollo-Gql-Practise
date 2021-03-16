import { gql } from "apollo-server";

export const typeDefs = gql`
  #Used for commenting in gql.
  type Book {
    id: Int!
    title: String
    author: String
  }

  type Query {
    books: [Book]
    bookById(bookId: Int!): Book
  }

  type Mutation {
    createBook(id: Int!, title: String, author: String): Book
  }
`
