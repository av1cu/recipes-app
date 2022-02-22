import { Dispatch } from 'redux';
import API from '../api/api';
import { IMeal, ICategory, CategoryItem, CategoryItems } from './../api/types';
import {
  Action,
  IState,
  ILoadingStart,
  ActionTypes,
  IFetchItem,
  IFetchCategories,
  IFetchItems,
  IError,
} from './types';
const initialState: IState = {
  loading: false,
  error: null,
  currentMeal: null,
  categories: [],
  meals: [],
};

const reducer = (state = initialState, action: Action): IState => {
  switch (action.type) {
    case ActionTypes.LOADING_START:
      return { ...state, loading: true };
    case ActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [...action.payload.categories],
      };
    case ActionTypes.FETCH_ITEMS_SUCCESS:
      return { ...state, meals: [...action.payload.items], loading: false };
    case ActionTypes.FETCH_ITEM_SUCCESS:
      return { ...state, currentMeal: action.payload.item, loading: false };
    case ActionTypes.FETCH_ERROR:
      return { ...state, error: 'Error has occured', loading: false };
    default:
      return state;
  }
};

const loadingStart: ILoadingStart = { type: ActionTypes.LOADING_START };
const fetchItem = (item: IMeal): IFetchItem => ({
  type: ActionTypes.FETCH_ITEM_SUCCESS,
  payload: { item },
});
const fetchCategories = (cat: ICategory[]): IFetchCategories => ({
  type: ActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: { categories: cat },
});
const fetchItems = (items: CategoryItem[]): IFetchItems => ({
  type: ActionTypes.FETCH_ITEMS_SUCCESS,
  payload: { items },
});
const setError = (err: string): IError => ({
  type: ActionTypes.FETCH_ERROR,
  error: err,
});

export const fetchItemThunk = (param: string, useName = false): any => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(loadingStart);
    try {
      let response;
      if (useName) {
        response = await API.findOne(param);
        dispatch(fetchItems(response.data.meals));
      } else {
        response = await API.getById(param);
        dispatch(fetchItem(response.data.meals[0]));
      }
    } catch (error) {
      console.log(error);
      dispatch(setError('Something went wrong'));
    }
  };
};

export const fetchCategoriesThunk = (): any => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(loadingStart);
    try {
      const response = await API.getCategories();
      dispatch(fetchCategories(response.data.categories));
    } catch (error) {
      console.log(error);
      dispatch(setError('Something went wrong'));
    }
  };
};

export const fetchItemsThunk = (category: string): any => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(loadingStart);
    try {
      const response = await API.filterByCategory(category);
      dispatch(fetchItems(response.data.meals));
    } catch (error) {
      console.log(error);
      dispatch(setError('Something went wrong'));
    }
  };
};

export default reducer;
