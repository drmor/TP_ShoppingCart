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
              <div className={styles.name}>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <div className={styles.quantity}>
                <button>-</button>
                <input type="number" />
                <button>+</button>
              </div>
              <div className={styles.overall}>
                <p>{item.quantity}</p>
                <button>remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Cart;
