import { IAppStore } from "./useBooks/types";

export interface IReduxStore {
  useBooks: IAppStore;
}

export interface IWrapedPromise<T> {
  read: () => T;
}
