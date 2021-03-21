import {IAuthor} from "./authors";

export interface IBook {
  id: number;
  title: string;
  author: IAuthor;
}

export interface IBooks {
  Books: IBook[];
}