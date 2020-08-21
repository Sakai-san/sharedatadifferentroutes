import { Reducer } from "redux";
import { IAppStore, isFetchingAction, isFetchAction } from "./types";
import actions from "./actions";

const reducer: Reducer<
  IAppStore,
  ReturnType<typeof actions.makeBooksFetching | typeof actions.makeBooksFetch>
> = (
  state = {
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
  } else {
    return state;
  }
};

export default reducer;
