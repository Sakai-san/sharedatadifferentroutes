import React, { FunctionComponent } from "react";
import Books from "./Books";
import usePromiseWrapper from "./Hooks/usePromiseWrapper";

const Home: FunctionComponent = () => {
  const wrapPromise = usePromiseWrapper();
  return <Books books={wrapPromise.read() || []} />;
};

export default Home;
