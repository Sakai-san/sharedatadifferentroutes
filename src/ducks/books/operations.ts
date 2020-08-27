import { Dispatch } from "redux";
import axios from "axios";
import actions from "./actions";

const fetchBooks = () => (dispatch: Dispatch) => {
  let status = "pending";
  let result = null;

  let suspender = axios
    .get("https://sakai-san.github.io/sharedatadifferentroutes/books.json")
    .then((r) => {
      status = "success";
      result = r?.data || [];
      // secondly dispatch resolved related info
      dispatch(actions.makeBooksFetch(status, suspender, result));
    })
    .catch((e) => {
      status = "error";
      result = e;
      // secondly dispatch info in case of failure
      dispatch(actions.makeBooksFetch(status, suspender, result));
    });

  // fist dispatch pending status
  dispatch(actions.makeBooksFetch(status, suspender, result));
};

export default { fetchBooks };
