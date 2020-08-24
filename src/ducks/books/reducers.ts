// @ts-nocheck
import { Reducer } from "redux";
import { IAppStore, isFetchAction, IBook } from "./types";
import actions from "./actions";

const reducer: Reducer<IAppStore, ReturnType<typeof actions.makeBooksFetch>> = (
  state = {
    status: null,
    promise: null,
    result: null,
  },
  action
) => {
  if (isFetchAction(action)) {
    return {
      ...state,
      status: action.payload.status,
      promise: action.payload.promise,
      result: action.payload.result,
    };
  } else {
    return state;
  }
};

export default reducer;
