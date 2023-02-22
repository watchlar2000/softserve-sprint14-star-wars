import styles from './NextBtn.module.css';

const NextBtn = ({ handleClick }) => {
  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      NEXT
    </button>
  );
};

export default NextBtn;
