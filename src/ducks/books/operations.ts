import { Dispatch } from "redux";
import actions from "./actions";
import b from "./b.json";

const fetchBooks = (dispatch: Dispatch) => {
  let status = "pending";
  let result: any;

  let suspender = fetch(
    "https://sakai-san.github.io/sharedatadifferentroutes/books.json"
  )
    .then(
      (r) => {
        status = "success";
        result = r;
      },
      (e) => {
        status = "error";
        result = e;
        dispatch(actions.makeBooksFetch(status, suspender, result));
      }
    )
    .then((r: any) => {
      dispatch(actions.makeBooksFetch(status, suspender, r.json()));
    });

  dispatch(actions.makeBooksFetch(status, suspender, result));
};

export default { fetchBooks };
