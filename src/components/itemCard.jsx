import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';
import styles from './itemCard.module.css';

function ItemCard({ id }) {
  const [data, setData] = useState();
  const [quantity, setQuantity] = useState(1);
  const { cart, detectDuplicates } = useOutletContext();
  useEffect(() => {
    async function response() {
      const itemData = await (await fetch(`https://fakestoreapi.com/products/${id}`)).json();
      setData(itemData);
    }
    response();
  }, []);
  return (
    <>
      {data ? (
        <div className={styles.card}>
          <img src={data.image} alt="" />
          <div className={styles.infoBg}>
            <div className={styles.info}>
              <p>{data.title}</p>
              <b>
                <p>${data.price}</p>
              </b>
            </div>
            <div className={styles.buttons}>
              <button
                onClick={() => {
                  if (quantity - 1 == -1) return;
                  setQuantity(quantity - 1);
                }}
              >
                -
              </button>
              <input type="number" value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value))} />
              <button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  detectDuplicates({ img: data.image, name: data.title, price: data.price, quantity: quantity });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
}

function AllItems() {
  const itemsID = [1, 2, 3, 4, 5, 13, 7, 14, 9, 10, 11, 12];
  return itemsID.map((id) => <ItemCard key={id} id={id} />);
}
export default AllItems;
