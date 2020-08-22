import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import Books from "./Books";
import { IReduxStore } from "./ducks/reduxStoreType";

const Home: FunctionComponent = () => {
  const wrapedPromise = useSelector(
    (state: IReduxStore) => state.books.wrapPromise
  );

  return <Books books={wrapedPromise?.read?.() || []} />;
};

export default Home;
