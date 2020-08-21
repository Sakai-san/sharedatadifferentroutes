import { actionTypes, IBook } from "./types";

const makeBooksFetch = (books: IBook[]) => ({
  type: actionTypes.FETCH_BOOKS,
  payload: books,
});

const makeBooksFetching = (isLoading: boolean) => ({
  type: actionTypes.FETCHING_BOOKS,
  payload: isLoading,
});

export default {
  makeBooksFetch,
  makeBooksFetching,
};
