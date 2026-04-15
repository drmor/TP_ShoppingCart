import styles from './Error.module.css';
function Error() {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>page not found</p>
    </div>
  );
}
export default Error;
