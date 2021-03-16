import axios from "axios"
import { IBook } from "../../graphql/resolvers/interfaces"

export const fetchGet = (url): Promise<IBook[]> => {
  return axios.get(url, {
    "method": "GET"
  })
}