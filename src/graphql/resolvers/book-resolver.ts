import { getBooks, getBookById, createBook, deleteBook, patchBook } from "../../api/v1/api"
import { IBooks, IBook } from "./interfaces/index"
import {IBookData} from "../../api/v1/httpClient";

export const booksResolver = {
  Query: {
    books: async (): Promise<IBooks[] | any> => {
      try {
        const response = await getBooks()
        return response
      } catch(error) {
        console.log(error)
      }
    },
    bookById: async (_: IBook, args: any): Promise<IBook | any> => {
      const { bookId } = args
      try {
        const response = await getBookById(bookId)          
        return response
      } catch(error) {
        console.log(error)
      }
    }
  },
  Mutation: {
    addBook: async (_: IBook, args: IBookData): Promise<IBooks[] | any> => {
      try {
        const response = await createBook(args)          
        return response
      } catch(error) {
        console.log(error)
      }
    },
    updateBook: async(_: IBook, args: IBook): Promise<IBook | any> => {
      try {
        const response = await patchBook(args.id, args.title)
        return response
      } catch(error) {
        console.log(error)
      }
    },
    deleteBook: async (_: IBook, args: any): Promise<any> => {
      try {
        await deleteBook(args.id) 
              
        return args.id
      } catch(error) {
        console.log(error)
      }
    }
  }
};

