import React, { useEffect } from 'react';
import { CardGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchCategoriesThunk } from '../store/reducer';
import { useAppSelector } from '../store/store';
import Category from './Category';

const CategoriesList: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const store = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, []);

  if (store.loading) {
    return <div>Loading...</div>;
  }

  return (
    <CardGroup>
      {store.categories.map((item) => (
        <Category
          idCategory={item.idCategory}
          strCategoryThumb={item.strCategoryThumb}
          strCategoryDescription={item.strCategoryDescription}
          strCategory={item.strCategory}
          key={item.idCategory}
        />
      ))}
    </CardGroup>
  );
};

export default CategoriesList;
