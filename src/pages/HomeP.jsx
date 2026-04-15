import styles from './HomeP.module.css';
function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1>Odin Shop</h1>
        <p>
          A modern clothing store offering <span style={{ color: '#CA6180' }}>stylish and comfortable</span> outfits for everyday wear.
        </p>
      </div>
    </>
  );
}
export default Home;
