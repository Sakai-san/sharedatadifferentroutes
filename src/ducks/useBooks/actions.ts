import { actionTypes, IBook } from "./types";

const makeBooksPromise = (books: any) => ({
  type: actionTypes.FETCH_PROMISE,
  payload: books,
});

const makeBooksFetch = (books: IBook[]) => ({
  type: actionTypes.FETCH_BOOKS,
  payload: books,
});

const makeBooksFetching = (isLoading: boolean) => ({
  type: actionTypes.FETCHING_BOOKS,
  payload: isLoading,
});

export default {
  makeBooksPromise,
  makeBooksFetch,
  makeBooksFetching,
};
