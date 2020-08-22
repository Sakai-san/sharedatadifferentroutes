import { IAppStore } from "./books/types";

export interface IReduxStore {
  books: IAppStore;
}

export interface IWrapedPromise<T> {
  read: () => T;
}
