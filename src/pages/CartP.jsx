import { useState } from 'react';
import styles from './CartP.module.css';
import { useOutletContext } from 'react-router';
function Cart() {
  const { cart } = useOutletContext();
  return (
    <>
      <div className={styles.container}>
        <p>Shopping Cart</p>
        <ul className={styles.items}>
          {cart.map((item) => (
            <li className={styles.item} key={item.name}>
              <img src={item.img} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Cart;
