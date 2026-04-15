import { useState } from 'react';
import Nav from './components/navbar';
import Home from './pages/HomeP';
import Shop from './pages/ShopP';
import Cart from './pages/CartP';

function App() {
  return (
    <>
      <Nav />
      <Cart />
    </>
  );
}

export default App;
