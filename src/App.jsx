import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './pages/home/home/Home';
import Navbar from './pages/home/shered/navbar/Navbar';
import Footer from './pages/home/shered/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;