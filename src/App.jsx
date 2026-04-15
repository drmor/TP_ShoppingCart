import { useState } from 'react';
import { Outlet } from 'react-router';
import Nav from './components/navbar';
function App() {
  const [cart, setCart] = useState([]);
  function detectDuplicates(obj) {
    if (!cart.some((item) => item.name === obj.name)) {
      setCart([...cart, obj]);
    } else {
      setCart((prevCart) => prevCart.map((item) => (item.name == obj.name ? { ...item, quantity: item.quantity + obj.quantity } : item)));
    }
  }
  return (
    <>
      <Nav arr={cart} />
      <Outlet context={{ cart, detectDuplicates }} />
    </>
  );
}

export default App;
