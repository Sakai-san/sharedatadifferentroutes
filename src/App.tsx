import React, { Suspense, FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  createStyles,
  fade,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import Home from "./Home";
import Detail from "./Detail";
import PageNotFound from "./PageNotFound";
import "./App.css";
import { useDispatch } from "react-redux";
import { wrapPromise } from "./utils";
import booksActions from "./ducks/books/actions";

interface IAppProps {
  classes: {
    root: string;
  };
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "90%",
      margin: "0 auto",
      marginTtop: "110px",
      backgroudColor: "green",
    },
  });

const App: FunctionComponent<IAppProps> = ({ classes }) => {
  const dispatch = useDispatch();

  dispatch(booksActions.makeFetchSuspender(wrapPromise));

  return (
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Suspense fallback={<h1>Loading books...</h1>}>
                <Home />
              </Suspense>
            )}
          />
          <Route
            path="/book/:bookId"
            render={() => (
              <Suspense fallback={<h1>Loading book...</h1>}>
                <Detail />
              </Suspense>
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default withStyles(styles)(App);
