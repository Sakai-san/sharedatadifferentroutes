import { actionTypes, IBook } from "./types";

/*
const makeFetchSuspender = (
  wrapPromise: (p: Promise<any>) => IWrapedPromise<IBook>
) => ({
  type: actionTypes.FETCH_BOOKS,
  payload: wrapPromise(
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            fetch(
              "https://sakai-san.github.io/sharedatadifferentroutes/books.json"
            ).then((r) => r.json())
          ),
        0
      )
    )
  ),
});
*/

const makeBooksStatus = (promiseStatus: string) => ({
  type: actionTypes.FETCH_BOOKS_STATUS,
  payload: promiseStatus,
});

const makeBooksFetchPromise = (promise: any) => ({
  type: actionTypes.FETCH_BOOKS_PROMISE,
  payload: promise,
});

const makeBooksFetchResult = (result: any) => ({
  type: actionTypes.FETCH_BOOKS_RESULT,
  payload: result,
});

const makeBooksFetch = (status: string, promise: any, result: any) => ({
  type: actionTypes.FETCH_BOOKS_FETCH,
  payload: {
    status,
    promise,
    result,
  },
});

export default {
  makeBooksStatus,
  makeBooksFetchPromise,
  makeBooksFetchResult,
  makeBooksFetch,
};
