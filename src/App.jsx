import { useState } from 'react';
import { Outlet } from 'react-router';
import Nav from './components/navbar';
function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Nav />
      <Outlet context={{ cart, setCart }} />
    </>
  );
}

export default App;
