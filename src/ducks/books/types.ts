export enum actionTypes {
  FETCH_BOOKS = "@BOOKS/fetch",
  FETCH_BOOKS_STATUS = "@BOOKS/fetchStatus",
}

export interface IBook {
  id: string;
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
}

interface IAction {
  type: actionTypes;
}

interface IActionFetch extends IAction {
  payload: any;
}

// TYPE GUARDS
export const isFetchAction = (action: IAction): action is IActionFetch =>
  action?.type === actionTypes.FETCH_BOOKS;
