import { useState } from 'react';
import styles from './CartP.module.css';
function Cart(obj) {
  const [cart, setCart] = useState(null);
  //setCart(...cart, obj);
  return (
    <>
      <div className={styles.container}>
        <p>Shopping Cart</p>
      </div>
    </>
  );
}
export default Cart;
