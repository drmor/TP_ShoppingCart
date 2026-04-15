import { useState } from 'react';
import Nav from './components/navbar';
import Home from './pages/HomeP';
import Shop from './pages/ShopP';
import Cart from './pages/CartP';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
