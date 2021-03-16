import { gql } from "apollo-server";

export const typeDefs = gql`
  #Used for commenting in gql.
  type Book {
    id: ID!
    title: String
    author: String
  }

  type Query {
    books: [Book]
    bookById(bookId: Int!): Book
  }

  type Mutation {
    createBook(id: ID!, title: String, author: String): Book
    deleteBook(id: ID!): ID
  }
`
