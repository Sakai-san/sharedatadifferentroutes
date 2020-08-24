import { Dispatch } from "redux";
import actions from "./actions";

const fetchBooks = (dispatch: Dispatch) => {
  /*
  dispatch(actions.makeMoviesFetching(true));

  Promise.resolve(movies).then((response: any) =>
    dispatch(actions.makeMoviesFetch(response?.movies || []))
  );

  */
};

export default { fetchBooks };
