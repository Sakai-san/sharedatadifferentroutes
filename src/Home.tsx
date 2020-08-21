import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import useWrapPromise from "./useWrapPromise";
import { IWrapedPromise } from "./ducks/reduxStoreType";
import actions from "./ducks/useBooks/actions";
import { IBook } from "./ducks/useBooks/types";
import Books from "./Books";

interface IHomeProps {
  wrapPromise: IWrapedPromise<IBook[]>;
}

const Home: FunctionComponent<IHomeProps> = ({ wrapPromise }) => {
  const resolved = useWrapPromise(
    wrapPromise,
    useDispatch(),
    actions.makeBooksFetch
  );
  return <Books books={resolved} />;
};

export default Home;
