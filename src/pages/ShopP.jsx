import AllItems from '../components/itemCard';
import styles from '../components/itemCard.module.css';
import Nav from '../components/navbar';
function Shop() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <AllItems />
      </div>
    </>
  );
}

export default Shop;
