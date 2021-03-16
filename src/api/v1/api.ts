import { fetchGet, fetchPost } from "./httpClient";
import { BASE_URL } from "../../validators/checkEnv"
import { IBooks, IBook } from "../../graphql/resolvers/interfaces";

const BASE = BASE_URL

export const getBooks = (): Promise<IBooks[]> => 
  fetchGet(`${BASE}/books`)

export const getBookById = (bookId: string): Promise<IBooks[]> => 
  fetchGet(`${BASE}/books/${bookId}`)

export const createBook = (bookInfo: IBook): Promise<IBooks[]> => 
  fetchPost(`${BASE}/books`, bookInfo)

