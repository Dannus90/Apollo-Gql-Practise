import axios, { AxiosResponse } from "axios"
import { IBooks } from "../../graphql/resolvers/interfaces"

export const fetchGet = (url: string): Promise<IBooks[]> => {
  return axios.get(url, {
    "method": "GET"
  }).then((res: AxiosResponse) => res.data)
}