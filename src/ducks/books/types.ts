export enum actionTypes {
  FETCH_BOOKS_FETCH = "@BOOKS/fetch",
}

export interface IBook {
  id?: string;
  ranking?: number;
  authors?: string[];
  length?: number;
  publisher?: string;
  publicationDate?: string;
  asin?: string;
  isbn10?: string;
  isbn13?: string;
  title?: string;
  subTitle?: string;
  overview?: string;
  poster?: string;
}

export interface IAppStore {
  status: string | null;
  promise: Promise<any> | null;
  result: IBook[] | null;
}

interface IAction {
  type: actionTypes;
}

interface IActionFetch extends IAction {
  payload: {
    status: string;
    promise: Promise<any>;
    result: IBook[] | null;
  };
}

// TYPE GUARDS
export const isFetchAction = (action: IAction): action is IActionFetch =>
  action.type === actionTypes.FETCH_BOOKS_FETCH;
