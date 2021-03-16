import { getBooks } from "../../api/v1/api"
import { IBooks } from "./interfaces/index"

export const bookResolver = {
  Query: {
    books: async (): Promise<IBooks[] | any> => {
      try {
        const response = await getBooks()
        return response
      } catch(error) {
        console.log(error)
      }
    }
  },
};

