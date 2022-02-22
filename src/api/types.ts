export interface IMeal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
}

export interface ICategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface CategoryItem {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface CategoryItems {
  meals: CategoryItem[];
}

export interface IMealObj {
  meals: IMeal[];
}
