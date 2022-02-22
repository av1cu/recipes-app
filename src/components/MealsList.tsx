import React, { useEffect } from 'react';
import { CardGroup, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItemsThunk } from '../store/reducer';
import { useAppSelector } from '../store/store';
import Meal from './Meal';

const MealsList: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const store = useAppSelector((store) => store);
  const params = useParams();

  useEffect(() => {
    typeof params.category === 'string' &&
      dispatch(fetchItemsThunk(params.category));
  }, []);

  if (store.loading) {
    return <div>Loading...</div>;
  }

  return (
    <CardGroup>
      {store.meals.map((meal) => (
        <Col sm={6} md={4} lg={3} key={meal.idMeal}>
          <Meal
            strMeal={meal.strMeal}
            strMealThumb={meal.strMealThumb}
            idMeal={meal.idMeal}
          />
        </Col>
      ))}
    </CardGroup>
  );
};

export default MealsList;
