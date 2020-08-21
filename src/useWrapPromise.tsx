const useWrapPromise = (
  wrapedPromise: any,
  dispatch: any,
  actionCreator: any
) => {
  const resolved = wrapedPromise?.read?.();

  dispatch(actionCreator(resolved || []));
  return resolved;
};

export default useWrapPromise;
