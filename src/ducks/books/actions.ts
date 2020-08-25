import { actionTypes, IBook } from "./types";

const makeBooksFetch = (
  status: string,
  promise: Promise<any>,
  result: IBook[] | null
) => ({
  type: actionTypes.FETCH_BOOKS_FETCH,
  payload: {
    status,
    promise,
    result,
  },
});

export default {
  makeBooksFetch,
};
