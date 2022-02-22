import React, { useEffect } from 'react';
import { Card, ListGroup, Nav } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchItemThunk } from '../store/reducer';
import { useAppSelector } from '../store/store';

const Current: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const store = useAppSelector((store) => store);
  const params = useParams();

  useEffect(() => {
    typeof params.meal === 'string' && dispatch(fetchItemThunk(params.meal));
  }, []);

  console.log(store.currentMeal?.strMeal);

  return (
    <Card className='p-3'>
      <Card.Img
        src={store.currentMeal?.strMealThumb}
        alt='meal'
        style={{ width: '20rem' }}
      />
      <Card.Body>
        <Card.Title>{store.currentMeal?.strMeal}</Card.Title>
        <Card.Text>{store.currentMeal?.strInstructions}</Card.Text>
        <ListGroup>
          <ListGroup.Item variant='warning'>
            {store.currentMeal?.strCategory}
          </ListGroup.Item>
          <ListGroup.Item variant='warning'>
            {store.currentMeal?.strArea}
          </ListGroup.Item>
          <ListGroup.Item variant='warning'>
            <a href={store.currentMeal?.strYoutube} target='_blank'>
              Watch youtube video
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Current;
