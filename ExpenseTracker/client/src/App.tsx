import React from 'react';
import { ExpenseTrackerApp } from './components/ExpenseTrackerApp';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<ExpenseTrackerApp />}></Route>
        </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;