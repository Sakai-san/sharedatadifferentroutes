import React, { Suspense, FunctionComponent, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Home from "./Home";
import Detail from "./Detail";
import PageNotFound from "./PageNotFound";
import SearchAppBar from "./SearchAppBar";
import { booksOperations } from "./ducks/books";

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
      marginTop: "110px",
    },
  });

const App: FunctionComponent<IAppProps> = ({ classes }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(booksOperations.fetchBooks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className={classes.root}>
        <Suspense fallback={""}>
          <SearchAppBar />
        </Suspense>

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
