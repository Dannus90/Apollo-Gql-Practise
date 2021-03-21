import {fetchGet, fetchPost, fetchDelete, IBookData, fetchPatch} from "./httpClient";
import { BASE_URL } from "../../validators/checkEnv"
import {IBooks, IBook, IAuthors, IAuthor} from "../../graphql/resolvers/interfaces";

const BASE = BASE_URL

// BOOK RELATED API ENDPOINTS
export const getBooks = (): Promise<IBooks[]> => 
  fetchGet(`${BASE}/books`)

export const getBookById = (bookId: number): Promise<IBook[]> => 
  fetchGet(`${BASE}/books/${bookId}`)

export const createBook = (bookInfo: IBookData): Promise<IBooks[]> => 
  fetchPost(`${BASE}/books`, bookInfo)

export const deleteBook = (bookId: number): Promise<any> => 
  fetchDelete(`${BASE}/books/${bookId}`)

export const patchBook = (bookId: number, title: string): Promise<IBook> =>
  fetchPatch(`${BASE}/books/${bookId}`, title)  

// AUTHOR RELATED API ENDPOINTS
export const getAuthors = ():Promise<IAuthors[]> =>
  fetchGet(`${BASE}/authors`)  

export const getAuthorById = (authorId: number): Promise<IAuthor> =>
  fetchGet(`${BASE}/authors/${authorId}`)  

