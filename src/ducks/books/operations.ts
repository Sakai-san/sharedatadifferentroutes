import { Dispatch } from "redux";
import actions from "./actions";
import axios from "axios";

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

  dispatch(actions.makeBooksFetch(status, suspender, result));
};

export default { fetchBooks };
