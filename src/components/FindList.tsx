import React, { useEffect } from 'react';
import { CardGroup, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItemThunk } from '../store/reducer';
import { useAppSelector } from '../store/store';
import Meal from './Meal';

const FindList: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const store = useAppSelector((store) => store);
  const params = useParams();

  useEffect(() => {
    typeof params.search === 'string' &&
      dispatch(fetchItemThunk(params.search, true));
  }, []);

  return (
    <CardGroup>
      {store.meals.length === 0 ? (
        <div>Not found</div>
      ) : (
        store.meals.map((meal) => (
          <Col sm={6} md={4} lg={3} key={meal.idMeal}>
            <Meal
              strMeal={meal.strMeal}
              strMealThumb={meal.strMealThumb}
              idMeal={meal.idMeal}
            />
          </Col>
        ))
      )}
    </CardGroup>
  );
};

export default FindList;
