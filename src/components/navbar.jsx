import { Link } from 'react-router';
import styles from './navbar.module.css';

function Nav() {
  return (
    <nav>
      <div className={styles.branding}>
        <h1>Odin Shop</h1>
        <p>made by</p>
        <a href="https://github.com/drmor">ne_uchi</a>
      </div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
