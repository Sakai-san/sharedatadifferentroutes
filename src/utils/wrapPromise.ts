// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
const wrapPromise = <T>(promise: Promise<T>) => {
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
        console.log("pending", suspender);
        throw suspender;
      } else if (status === "error") {
        console.log("error", result);
        throw result;
      } else if (status === "success") {
        console.log("success", result);

        return result;
      }
    },
  };
};

export default wrapPromise;
