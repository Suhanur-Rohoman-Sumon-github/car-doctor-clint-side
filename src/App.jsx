import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './pages/home/home/Home';

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;