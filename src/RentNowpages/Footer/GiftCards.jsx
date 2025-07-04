import NeverMissAStyleBeat from '../../RentNowcomponents/NeverMissAStyleBeat';
import styles from './GiftCards.module.css';

export default function GiftCards() {
  return (
    <>
    <section className={styles.container}>
      <h1 className={styles.title}>Gift Cards</h1>
      <p className={styles.subtitle}>The gift they'll wear everyday.</p>
      <p className={styles.description}>
        All the options, all the brands they love—all thanks to you.
      </p>

      <a
        href="https://www.cashstar.com" // Podés cambiar el link al real
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Buy a Gift Card
      </a>

      <p className={styles.terms}>
        When purchasing a toia de kiev gift card, you'll be redirected to CashStar, our gift card partner. Terms apply.
      </p>
    </section>
    <NeverMissAStyleBeat/>
    </>
  );
}
