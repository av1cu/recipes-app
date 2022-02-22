import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Nav
      className='justify-content-between p-3'
      style={{ backgroundColor: '#ffc107' }}
    >
      <Nav.Item>
        <Button
          onClick={() => {
            navigate('/');
          }}
          variant='link'
          style={{ color: '#000000' }}
        >
          Home
        </Button>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          variant='link'
          style={{ color: '#000000' }}
        >
          Go back
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Search />
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
