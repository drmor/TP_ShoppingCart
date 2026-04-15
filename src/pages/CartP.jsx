import { useState } from 'react';
import styles from './CartP.module.css';
import Nav from '../components/navbar';
function Cart(obj) {
  const [cart, setCart] = useState(null);
  //setCart(...cart, obj);
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <p>Shopping Cart</p>
      </div>
    </>
  );
}
export default Cart;
