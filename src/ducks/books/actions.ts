// @ts-nocheck
import { actionTypes, IBook } from "./types";

const makeFetchSuspender = (wrapPromise) => ({
  type: actionTypes.FETCH_SUSPENDER,
  payload: wrapPromise(
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            fetch(
              "https://sakai-san.github.io/sharedatadifferentroutes/books.json"
            ).then((r) => r.json())
          ),
        3000
      )
    )
  ),
});

export default {
  makeFetchSuspender,
};
