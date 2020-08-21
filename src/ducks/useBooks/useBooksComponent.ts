// @ts-nocheck
import { IBook } from "./types";

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise<T>(promise: Promise<T>) {
  let status = "pending";
  let result: T;
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

const useBooksComponent = () => {
  let wrapP = wrapPromise<IBook[]>(
    fetch(
      "https://sakai-san.github.io/sharedatadifferentroutes/books.json"
    ).then((r) => r.json())
  );

  return wrapP;
};

export default useBooksComponent;
