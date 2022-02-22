import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CategoryItem } from '../api/types';

const Meal: React.FunctionComponent<CategoryItem> = (props) => {
  const navigate = useNavigate();

  return (
    <Card className='m-3' bg='dark' text='white'>
      <Card.Img src={props.strMealThumb} />
      <Card.Body>
        <Card.Title>{props.strMeal}</Card.Title>
        <Button
          variant='warning'
          onClick={() => navigate(`/meals/${props.idMeal}`)}
        >
          See more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Meal;
