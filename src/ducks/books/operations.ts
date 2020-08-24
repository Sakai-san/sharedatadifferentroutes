import { Dispatch } from "redux";
import actions from "./actions";
import b from "./b.json";

const fetchBooks = (dispatch: Dispatch) => {
  let status = "pending";
  let result: any;

  let suspender = fetch(
    "https://sakai-san.github.io/sharedatadifferentroutes/books.json",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(
    (r) => {
      console.log("response", r);
      status = "success";
      result = r;
      dispatch(actions.makeBooksFetch(status, suspender, result));
    },
    (e) => {
      status = "error";
      result = e;
      dispatch(actions.makeBooksFetch(status, suspender, result));
    }
  );

  dispatch(actions.makeBooksFetch(status, suspender, result));
};

export default { fetchBooks };
