// @ts-nocheck
import React, { Suspense, FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  createStyles,
  fade,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import Home, { IBook } from "./Home";
import Detail from "./Detail";
import PageNotFound from "./PageNotFound";
import books from "./books.json";
import "./App.css";

export interface IWrapedPromise<T> {
  read: () => T;
}

export const fetchData = () => {
  const booksPromise = Promise.resolve(books);
  return wrapPromise(booksPromise);
};

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise: Promise<Array<IBook>>) {
  let status = "pending";
  let result: IBook[];
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

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
    },
  });

const App: FunctionComponent<IAppProps> = ({ classes }) => {
  const wrapPromise: IWrapedPromise<IBook[]> = fetchData();
  return (
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Suspense fallback={<h1>Loading books...</h1>}>
                <Home wrapPromise={wrapPromise} />
              </Suspense>
            )}
          />
          <Route
            path="/book/:bookId"
            render={() => (
              <Suspense fallback={<h1>Loading books...</h1>}>
                <Detail wrapPromise={wrapPromise} />
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
