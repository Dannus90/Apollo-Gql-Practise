import {IBook} from "./books";

export interface IAuthor {
    name: String;
    books: IBook[];
}

export interface IAuthors {
    Books: IAuthor[];
}