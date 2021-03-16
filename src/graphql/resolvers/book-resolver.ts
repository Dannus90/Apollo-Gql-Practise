import { getBooks, getBookById, createBook } from "../../api/v1/api"
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
    bookById: async (parent: IBook, args: any): Promise<IBook | any> => {
      console.log("Args", args)
      console.log(parent)
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
    createBook: async (parent: IBook, args: IBook): Promise<IBooks[] | any> => {
      console.log("createBook Args", args)
      console.log(parent)
      try {
        const response = await createBook(args)          
        return response
      } catch(error) {
        console.log(error)
      }
    },
  }
};

