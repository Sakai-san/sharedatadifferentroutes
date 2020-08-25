import { actionTypes, IBook } from "./types";

const makeBooksFetch = (status: string, promise: any, result: any) => ({
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
