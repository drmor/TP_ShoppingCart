import AllItems from '../components/itemCard';
import styles from '../components/itemCard.module.css';
function Shop() {
  return (
    <>
      <div className={styles.container}>
        <AllItems />
      </div>
    </>
  );
}

export default Shop;
