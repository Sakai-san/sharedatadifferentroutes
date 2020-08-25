import { Dispatch } from "redux";
import axios from "axios";
import actions from "./actions";

const fetchBooks = (dispatch: Dispatch) => {
  let status = "pending";
  let result: any;

  let suspender = axios
    .get("https://sakai-san.github.io/sharedatadifferentroutes/books.json")
    .then((r) => {
      status = "success";
      result = r?.data || [];
      dispatch(actions.makeBooksFetch(status, suspender, result));
    })
    .catch((e) => {
      status = "error";
      result = e;
      dispatch(actions.makeBooksFetch(status, suspender, result));
    });

  // dispatch pending status first
  dispatch(actions.makeBooksFetch(status, suspender, result));
};

export default { fetchBooks };
