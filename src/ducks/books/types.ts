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
  poster?: string;
  overview?: string;
}

export interface IAppStore {
  status: string | null;
  promise: Promise<IBook[]> | null;
  result: IBook[] | null;
}

interface IAction {
  type: actionTypes;
}

interface IActionFetch extends IAction {
  payload: {
    status: string;
    promise: Promise<IBook[]>;
    result: IBook[];
  };
}

// TYPE GUARDS
export const isFetchAction = (action: IAction): action is IActionFetch =>
  action.type === actionTypes.FETCH_BOOKS_FETCH;
