export enum actionTypes {
  FETCH_SUSPENDER = "@BOOKS/fetchSuspender",
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
}

interface IAction {
  type: actionTypes;
}

interface IActionFetchSuspender extends IAction {
  payload: any;
}

// TYPE GUARDS
export const isFetchSuspenderAction = (
  action: IAction
): action is IActionFetchSuspender =>
  action?.type === actionTypes.FETCH_SUSPENDER;
