// @ts-nocheck
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
import { useBooks } from "./ducks";

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
  //const wrapPromise: IWrapedPromise<IBook[]> = fetchData();
  const wrapPromise = useBooks();

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
