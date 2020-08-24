import { useSelector } from "react-redux";
import { IReduxStore } from "../ducks/reduxStoreType";

const useSuspender = () => {
  const { status, promise, result } = useSelector((state: IReduxStore) => {
    return state.books;
  });

  return {
    read() {
      if (status === "pending") {
        throw promise;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

export default useSuspender;
