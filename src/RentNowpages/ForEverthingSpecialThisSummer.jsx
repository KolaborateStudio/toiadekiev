
import styles from './ForEverthingSpecialThisSummer.module.css';
import SummerCarousel from '../RentNowcomponents/SummerCarousel'; // 👈 asumimos que lo separás


export default function ForEverthingSpecialThisSummer() {
  return (
 <section className={styles.wrapper}>
  <p className={styles.ForEverthingSpecial}>For everything special this summer</p>
  <div className={styles.grid}>
    <div className={styles.card}>
      <img src="/1a.webp" alt="The Summer Edit" />
      <p className={styles.title}>The Summer Edit</p>
    </div>
    <div className={styles.card}>
      <img src="/2a.webp" alt="New Dresses" />
      <p className={styles.title}>New Dresses</p>
    </div>
    <div className={styles.card}>
      <img src="/3a.webp" alt="Summer Weddings" />
      <p className={styles.title}>Summer Weddings</p>
    </div>
    <div className={styles.card}>
      <img src="/4a.webp" alt="Bachelorette Party" />
      <p className={styles.title}>Bachelorette Party</p>
    </div>
  </div>
</section>

  );
}
