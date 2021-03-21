import {getAuthorById, getAuthors} from "../../api/v1/api"
import { IAuthors, IAuthor } from "./interfaces/index"

export const authorsResolvers = {
    Query: {
        authors: async (): Promise<IAuthors[] | any> => {
            try {
                const response = await getAuthors()
                return response
            } catch(error) {
                console.log(error)
            }
        },
        authorById: async (_: IAuthor, args: any): Promise<IAuthor | any> => {
            console.log("bookById Args", args)
            const { authorId } = args
            try {
                const response = await getAuthorById(authorId)
                return response
            } catch(error) {
                console.log(error)
            }
        }
    },
};

