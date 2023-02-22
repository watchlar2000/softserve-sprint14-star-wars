import styles from '../Pages.module.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.not_found}>
      <h2>404 | Page not found</h2>
      <button type="button" onClick={() => navigate('/')}>
        Back home
      </button>
    </section>
  );
};

export default NotFound;
