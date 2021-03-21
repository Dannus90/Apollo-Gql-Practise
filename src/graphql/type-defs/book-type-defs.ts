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
  
  #Input types are sent as seen down below for example.
  input addBookAuthorData {
    name: String
  }
  
  type Mutation {
    addBook(title: String, author: addBookAuthorData): Book
    deleteBook(id: ID!): ID
  }
`
