import { fetchGet } from "./httpClient";
import { BASE_URL } from "../../validators/checkEnv"
import { IBooks } from "../../graphql/resolvers/interfaces";

const BASE = BASE_URL

export const getBooks = (): Promise<IBooks[]> => 
  fetchGet(`${BASE}/books`)
