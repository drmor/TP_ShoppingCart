import { useState } from 'react';
import Nav from './components/navbar';
import Home from './pages/HomeP';
import Shop from './pages/ShopP';

function App() {
  return (
    <>
      <Nav />
      <Shop />
    </>
  );
}

export default App;
