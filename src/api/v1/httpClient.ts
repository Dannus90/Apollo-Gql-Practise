import axios, { AxiosResponse } from "axios"
import { IBooks, IBook } from "../../graphql/resolvers/interfaces"

export const fetchGet = (url: string): Promise<IBooks[]> => {
  return axios.get(url).then((res: AxiosResponse) => res.data)
}

export const fetchPost = (url: string, data: IBook): Promise<IBooks[]> => {
  return axios.post(url, {
    title: data.title,
    author: data.author
  }).then((res: AxiosResponse) => res.data)
}

export const fetchDelete = (url: string): Promise<any> => {
  return axios.delete(url).then((res: AxiosResponse) => res.data)
}