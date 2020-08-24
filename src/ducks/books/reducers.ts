import { Reducer } from "redux";
import { IAppStore, isFetchAction } from "./types";
import actions from "./actions";

const reducer: Reducer<
  IAppStore,
  ReturnType<typeof actions.makeFetchSuspender>
> = (
  state = {
    wrapPromise: null,
  },
  action
) => {
  if (isFetchAction(action)) {
    return {
      ...state,
      wrapPromise: action.payload,
    };
  } else {
    return state;
  }
};

export default reducer;
