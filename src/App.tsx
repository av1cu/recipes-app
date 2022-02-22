import { Route, Routes } from 'react-router-dom';
import Current from './components/Current';
import CategoriesList from './components/CategoriesList';
import NotFound from './components/NotFound';
import MealsList from './components/MealsList';
import Navbar from './components/Navbar';
import { Container, Row } from 'react-bootstrap';
import FindList from './components/FindList';

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Navbar />
      </Row>
      <Row
        className='p-3 align-center'
        style={{ backgroundColor: '#f5e3c6', minHeight: '100vh' }}
      >
        <Routes>
          <Route path='category/:category' element={<MealsList />} />
          <Route path='meals/:meal' element={<Current />} />
          <Route path='/' element={<CategoriesList />} />
          <Route path='search/:search' element={<FindList />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Row>
    </Container>
  );
};

export default App;
