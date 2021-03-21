import axios, { AxiosResponse } from "axios"
import { IBooks } from "../../graphql/resolvers/interfaces"

export const fetchGet = (url: string) => {
  return axios.get(url).then((res: AxiosResponse) => res.data)
}

interface IBookData {
  bookData: {
    title: string;
    author: {
      name: string;
      books: {
        title: string;
      }
    }
  }
}

export const fetchPost = (url: string, data: IBookData): Promise<IBooks[]> => {
  return axios.post(url, {
    title: data.bookData.title,
    author: {
      name: data.bookData.author?.name,
    }
  }).then((res: AxiosResponse) => res.data)
}

export const fetchDelete = (url: string): Promise<any> => {
  return axios.delete(url).then((res: AxiosResponse) => res.data)
}