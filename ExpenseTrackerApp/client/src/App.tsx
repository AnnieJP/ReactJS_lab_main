import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import ShowList from './components/DataList/ShowList';
import AppFooter from './components/header-footer/AppFooter';
import AppHeader from './components/header-footer/AppHeader';

function App() {
  return (
    <>
      <Container>
        <AppHeader />
        <Routes>
          <Route path="/" element={<ShowList />}></Route>
        </Routes>
        <AppFooter />
      </Container>

    </>
  );
}

export default App;
