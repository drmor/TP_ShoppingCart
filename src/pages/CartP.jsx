import { useState } from 'react';
import styles from './CartP.module.css';
import { useOutletContext } from 'react-router';
function Cart() {
  const { cart, manipulate } = useOutletContext();
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
                <button
                  onClick={() => {
                    manipulate.subtract(item);
                  }}
                >
                  -
                </button>
                <input type="number" value={item.quantity} onChange={(event) => manipulate.increase(item, parseInt(event.target.value))} />
                <button
                  onClick={() => {
                    manipulate.add(item);
                  }}
                >
                  +
                </button>
              </div>
              <div className={styles.overall}>
                <p>${item.price * item.quantity}</p>
                <button
                  onClick={() => {
                    manipulate.delete(item);
                  }}
                >
                  remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Cart;
