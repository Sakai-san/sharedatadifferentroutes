// @ts-nocheck
import { Dispatch } from "redux";
import actions from "./actions";
import { IBook } from "./types";

const fetchBo = (dispatch: Dispatch) => {
  dispatch(actions.makeBooksFetching(true));

  Promise.resolve([]).then((response: any) =>
    dispatch(actions.makeBooksFetch(response || []))
  );
};

const dispatchPromise = (dispatch: Dispatch) => (
  wrapPromise: (p: Promise<IBook[]>) => any
) => {
  dispatch(
    actions.makeBooksPromise(
      wrapPromise(
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
      )
    )
  );
};

export default { fetchBo, dispatchPromise };
