import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search/${search.toLowerCase()}`);
          setSearch('');
        }}
      >
        <Form.Control
          type='search'
          placeholder='Search...'
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
    </div>
  );
};

export default Search;
