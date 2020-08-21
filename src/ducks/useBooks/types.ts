export enum actionTypes {
  FETCH_PROMISE = "@BOOKS/promise",
  FETCH_BOOKS = "@BOOKS/fetch",
  FETCHING_BOOKS = "@BOOKS/fetching",
}

export interface IBook {
  ranking?: number;
  authors?: string[];
  length?: number;
  publisher: string;
  publicationDate: string;
  asin: string;
  isbn10: string;
  isbn13: string;
  title?: string;
  subTitle?: string;
  poster?: string;
  overview?: string;
}

export interface IAppStore {
  wrapPromise?: any;
  books: IBook[];
  isFetching: boolean;
}

interface IAction {
  type: actionTypes;
}

interface IActionPromise extends IAction {
  payload: any;
}

interface IActionFetching extends IAction {
  payload: boolean;
}

interface IActionFetch extends IAction {
  payload: IBook[];
}

// TYPE GUARDS
export const isPromiseAction = (action: IAction): action is IActionPromise =>
  action?.type === actionTypes.FETCH_PROMISE;

export const isFetchingAction = (action: IAction): action is IActionFetching =>
  action?.type === actionTypes.FETCHING_BOOKS;

export const isFetchAction = (action: IAction): action is IActionFetch =>
  action?.type === actionTypes.FETCH_BOOKS;
