import { fetchGet } from "./httpClient";
import { BASE_URL } from "../../validators/checkEnv"
import { IBook } from "../../graphql/resolvers/interfaces";

const BASE = BASE_URL

export const getBooks = (): Promise<IBook[]> => 
  fetchGet(`${BASE}/books`)
