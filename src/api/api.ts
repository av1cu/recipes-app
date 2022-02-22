import { IMeal, ICategory, CategoryItems, IMealObj } from './types';
import axios, { AxiosPromise } from 'axios';

interface ICat {
  categories: ICategory[];
}

class API {
  static base = axios.create({
    baseURL: 'https://themealdb.com/api/json/v1/1/',
  });

  static async findOne(name: string): Promise<AxiosPromise<CategoryItems>> {
    return await API.base.get<CategoryItems>(`search.php?s=${name}
    `);
  }

  static async getCategories(): Promise<AxiosPromise<ICat>> {
    return await API.base.get<ICat>('categories.php');
  }

  static async filterByCategory(
    category: string
  ): Promise<AxiosPromise<CategoryItems>> {
    return await API.base.get<CategoryItems>(`filter.php?c=${category}`);
  }

  static async getById(id: string): Promise<AxiosPromise<IMealObj>> {
    return await API.base.get(`lookup.php?i=${id}`);
  }
}

export default API;
