import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Star Wars Database</h1>
      <nav className={styles.nav}>
        <li>
          <Link to="/">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
