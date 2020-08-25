import { useSelector } from "react-redux";
import { IReduxStore } from "../ducks/reduxStoreType";

const usePromiseWrapper = () => {
  const { status, promise, result } = useSelector(
    (state: IReduxStore) => state.books
  );

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

export default usePromiseWrapper;
