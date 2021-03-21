import { gql } from "apollo-server";

export const bookTypeDefs = gql`
  #Used for commenting in gql.
  type Book {
    id: ID!
    title: String
    author: Author
  }
  
  type Author {
    id: ID!
    name: String
    books: [Book]
  }

  type Query {
    books: [Book]
    bookById(bookId: Int!): Book
    authors: [Author]
    authorById: Author
  }
  
  type Mutation {
    createBook(id: ID!, title: String, author: String): Book
    deleteBook(id: ID!): ID
  }
`
