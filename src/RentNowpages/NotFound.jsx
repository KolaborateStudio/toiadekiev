import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fashion Emergency!</h1>
      <p className={styles.message}>Sorry, this page is unavailable.</p>
      <p className={styles.code}>404 Error</p>
      <Link to="/" className={styles.button}>
        Return to Your Endless Closet
      </Link>
    </div>
  );
}
