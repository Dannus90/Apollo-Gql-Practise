import {IAuthor} from "./authors";

export interface IBook {
  author: IAuthor;
  title: String;
}

export interface IBooks {
  Books: IBook[];
}