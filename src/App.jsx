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
  function belowZero(target) {
    if (target.quantity - 1 == 0) {
      manipulate.delete(target);
    } else {
      return target.quantity - 1;
    }
  }
  const manipulate = {
    add(obj) {
      setCart((prevCart) => prevCart.map((item) => (item.name == obj.name ? { ...item, quantity: item.quantity + 1 } : item)));
    },
    subtract(obj) {
      setCart((prevCart) => prevCart.map((item) => (item.name == obj.name ? { ...item, quantity: belowZero(item) } : item)));
    },
    delete(obj) {
      setCart((prevCart) => prevCart.filter((item) => item.name !== obj.name));
    },
    increase(obj, value) {
      setCart((prevCart) => prevCart.map((item) => (item.name == obj.name ? { ...item, quantity: value } : item)));
    },
  };
  return (
    <>
      <Nav arr={cart} />
      <Outlet context={{ cart, detectDuplicates, manipulate }} />
    </>
  );
}

export default App;
