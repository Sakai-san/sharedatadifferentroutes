// @ts-nocheck
import React, { Suspense, FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import PageNotFound from "./PageNotFound";
import books from "./books.json";
import "./App.css";

export interface IWrapedPromise<T> {
  read: () => T;
}

export function fetchData() {
  const booksPromise = Promise.resolve(books);
  return wrapPromise(booksPromise);
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise) {
  let status = "pending";
  let result;
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

const App: FunctionComponent = () => {
  const wrapPromise: IWrapedPromise = fetchData();
  return (
    <Router>
      <div className="Content">
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

export default App;
