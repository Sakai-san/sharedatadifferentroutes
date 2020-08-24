export enum actionTypes {
  FETCH_BOOKS_STATUS = "@BOOKS/fetchStatus",
  FETCH_BOOKS_PROMISE = "@BOOKS/fetchPromise",
  FETCH_BOOKS_RESULT = "@BOOKS/fetchResult",
  FETCH_BOOKS_FETCH = "@BOOKS/fetch",
}

export interface IBook {
  id?: string;
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
  status: string;
  promise: any;
  result: any;
}

interface IAction {
  type: actionTypes;
}

interface IActionStatus extends IAction {
  payload: string;
}

interface IActionFetchPromise extends IAction {
  payload: any;
}

interface IActionFetchResult extends IAction {
  payload: any;
}

interface IActionFetch extends IAction {
  payload: any;
}

// TYPE GUARDS
export const isStatusAction = (action: IAction): action is IActionStatus =>
  action.type === actionTypes.FETCH_BOOKS_STATUS;

export const isFetchPromiseAction = (
  action: IAction
): action is IActionFetchPromise =>
  action.type === actionTypes.FETCH_BOOKS_PROMISE;

export const isFetchResultAction = (
  action: IAction
): action is IActionFetchResult =>
  action.type === actionTypes.FETCH_BOOKS_RESULT;

export const isFetchAction = (action: IAction): action is IActionFetch =>
  action.type === actionTypes.FETCH_BOOKS_FETCH;
