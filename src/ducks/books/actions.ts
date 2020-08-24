import { actionTypes, IBook } from "./types";
import { IWrapedPromise } from "../reduxStoreType";

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

export default {
  makeFetchSuspender,
};
