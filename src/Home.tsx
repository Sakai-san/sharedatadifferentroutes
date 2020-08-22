import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import Books from "./Books";
import { IReduxStore } from "./ducks/reduxStoreType";

const Home: FunctionComponent = () => {
  const wrapedPromise = useSelector(
    (state: IReduxStore) => state.books.wrapPromise
  );

  const resolved = wrapedPromise?.read?.();

  return <Books books={resolved || []} />;
};

export default Home;
