import React, { FunctionComponent } from "react";
import Books from "./Books";
import { IReduxStore } from "./ducks/reduxStoreType";
import useSuspender from "./Hooks/useSuspender";

/*const Home: FunctionComponent = () => {
  const wrapedPromise = useSelector(
    (state: IReduxStore) => state.books.wrapPromise
  );

  return <Books books={wrapedPromise?.read?.() || []} />;
};

export default Home;
*/

const Home: FunctionComponent = () => {
  const wrapPromise = useSuspender();
  return <Books books={wrapPromise.read() || []} />;
};

export default Home;
