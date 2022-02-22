import { CategoryItem } from './../api/types';
import { ICategory, IMeal } from '../api/types';

export enum ActionTypes {
  LOADING_START = 'LOADING_START',
  FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS',
  FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
  FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR ',
}

export interface ILoadingStart {
  type: ActionTypes.LOADING_START;
}
export interface IFetchItem {
  type: ActionTypes.FETCH_ITEM_SUCCESS;
  payload: {
    item: IMeal;
  };
}
export interface IFetchCategories {
  type: ActionTypes.FETCH_CATEGORIES_SUCCESS;
  payload: {
    categories: ICategory[];
  };
}
export interface IFetchItems {
  type: ActionTypes.FETCH_ITEMS_SUCCESS;
  payload: {
    items: CategoryItem[];
  };
}
export interface IError {
  type: ActionTypes.FETCH_ERROR;
  error: string;
}

export type Action =
  | ILoadingStart
  | IFetchCategories
  | IFetchItem
  | IFetchItems
  | IError;

export interface IState {
  loading: boolean;
  error: string | null;
  currentMeal: IMeal | null;
  categories: ICategory[];
  meals: CategoryItem[];
}
