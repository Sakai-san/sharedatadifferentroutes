import { Reducer } from "redux";
import {
  IAppStore,
  isFetchingAction,
  isFetchAction,
  isPromiseAction,
} from "./types";
import actions from "./actions";

const reducer: Reducer<
  IAppStore,
  ReturnType<
    | typeof actions.makeBooksFetching
    | typeof actions.makeBooksFetch
    | typeof actions.makeBooksPromise
  >
> = (
  state = {
    wrapPromise: null,
    books: [],
    isFetching: false,
  },
  action
) => {
  if (isFetchingAction(action)) {
    return {
      ...state,
      isFetching: action.payload,
    };
  } else if (isFetchAction(action)) {
    return {
      books: action.payload,
      isFetching: false,
    };
  } else if (isPromiseAction(action)) {
    return {
      ...state,
      wrapPromise: action.payload,
    };
  } else {
    return state;
  }
};

export default reducer;
