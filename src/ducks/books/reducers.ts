import { Reducer } from "redux";
import { IAppStore, isFetchSuspenderAction } from "./types";
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
  if (isFetchSuspenderAction(action)) {
    return {
      ...state,
      wrapPromise: action.payload,
    };
  } else {
    return state;
  }
};

export default reducer;
