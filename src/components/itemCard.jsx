import { useEffect, useState } from 'react';
import styles from './itemCard.module.css';

function ItemCard({ id }) {
  const [data, setData] = useState();
  useEffect(() => {
    async function response() {
      const itemData = await (await fetch(`https://fakestoreapi.com/products/${id}`)).json();
      setData(itemData);
      console.log(itemData);
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
              <p>${data.price}</p>
              <div className={styles.buttons}>
                <button>-</button>
                <input type="number" value={1} />
                <button>+</button>
                <button>Add to Cart</button>
              </div>
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
  const itemsID = Array.from({ length: 12 }, (_, i) => i + 1);
  return itemsID.map((id) => <ItemCard id={id} />);
}
export default AllItems;
