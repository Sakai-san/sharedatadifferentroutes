import { Dispatch } from "redux";
import actions from "./actions";
//import books from "../../../public/books.json";

const fetchMovies = (dispatch: Dispatch) => {
  dispatch(actions.makeBooksFetching(true));

  Promise.resolve([]).then((response: any) =>
    dispatch(actions.makeBooksFetch(response || []))
  );
};

export default { fetchMovies };
