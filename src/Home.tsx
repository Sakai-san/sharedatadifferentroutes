import React, { FunctionComponent } from "react";
import { IWrapedPromise } from "./App";
import Books from "./Books";

export interface IBook {
  ranking?: number;
  authors?: string[];
  length?: number;
  publisher: string;
  publicationDate: string;
  asin: string;
  isbn10: string;
  isbn13: string;
  title?: string;
  subTitle?: string;
  poster?: string;
  overview?: string;
}

interface IHomeProps {
  wrapPromise: IWrapedPromise<IBook[]>;
}

const Home: FunctionComponent<IHomeProps> = ({ wrapPromise }) => {
  const books = wrapPromise.read();
  return <Books books={books} />;
};

export default Home;
