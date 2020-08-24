const useSuspender = (
  promise: Promise<any>,
  promiseStatus: string,
  result: any
) => {
  if (promiseStatus === "pending") {
    throw promise;
  } else if (promiseStatus === "error") {
    throw result;
  } else {
    return result;
  }
};

export default useSuspender;
