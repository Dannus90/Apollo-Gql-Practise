import { getBooks } from "../../api/v1/api"
import { IBook } from "./interfaces/index"

export const bookResolver = {
  Query: {
    books: async (): Promise<IBook[]> => await getBooks()
  },
};