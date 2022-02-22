import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../api/types';

const Category: React.FunctionComponent<ICategory> = (props) => {
  const navigate = useNavigate();

  return (
    <Col sm={6} md={4} lg={3}>
      <Card className='pb-1 pl-3 pr-3 m-3' bg='dark' text='white'>
        <Card.Img variant='top' src={props.strCategoryThumb} className='mb-3' />
        <Card.Body>
          <Card.Title className='mb-3'>{props.strCategory}</Card.Title>
          <Button
            variant='warning'
            onClick={() => navigate(`/category/${props.strCategory}`)}
          >
            See more
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Category;
