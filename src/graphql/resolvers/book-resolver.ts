import { getBooks, getBookById, createBook, deleteBook } from "../../api/v1/api"
import { IBooks, IBook } from "./interfaces/index"

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
      console.log("bookById Args", args)
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
    addBook: async (_: IBook, args: IBook): Promise<IBooks[] | any> => {
      try {
        const response = await createBook(args)          
        return response
      } catch(error) {
        console.log(error)
      }
    },
    deleteBook: async (_: IBook, args: any): Promise<any> => {

      console.log("deleteBook Args", args)
      try {
        await deleteBook(args.id) 
              
        return args.id
      } catch(error) {
        console.log(error)
      }
    }
  }
};

