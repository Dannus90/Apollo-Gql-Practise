import { booksResolver } from "./book-resolver";
import { authorsResolvers } from "./author-resolver";

export const rootResolver = [booksResolver, authorsResolvers]