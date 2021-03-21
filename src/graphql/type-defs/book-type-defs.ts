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
  
  input authorInput {
    name: String
  }
  
  #Input types are sent as seen down below for example.
  input addBookData {
    title: String
    author: authorInput
  }
  
  type Mutation {
    addBook(bookData: addBookData): Book
    deleteBook(id: ID!): ID
  }
`
