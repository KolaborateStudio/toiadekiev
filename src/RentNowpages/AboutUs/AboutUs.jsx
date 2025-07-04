import NeverMissAStyleBeat from '../../RentNowcomponents/NeverMissAStyleBeat';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <>
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>
          Our mission is to power women to feel their best every day.
        </h1>
        <p className={styles.subtitle}>
          We started a rental revolution, and changed the fashion industry.
        </p>
        <p className={styles.paragraph}>
          In 2009, we disrupted the trillion-dollar fashion industry and changed the way women get dressed forever by pioneering the ‘Closet in the Cloud’: a dream closet filled with an infinite selection of designer styles to rent, wear and return (or keep!). Every trend, every color, every print, everything you’ve ever wanted to wear — for a fraction of the cost.
        </p>
        <p className={styles.paragraph}>
          We’ve continued to expand our closet over the past decade, powering our community to save time, money and have more fun getting dressed. All while contributing to a more sustainable future of fashion.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>
          A community that shares more than just clothes.
        </h2>
        <p className={styles.paragraph}>
          We’re not just a closet; we’re a community — one that swaps everything from clothes, to inspiration and ideas. When we’re able to wear what makes us feel our best, we can be our best selves. And with the Closet in the Cloud, women can more freely express themselves and dress for the incredible lives they lead.
        </p>
        <p className={styles.paragraph}>
          We encourage our members to explore all the different aspects of their style, whether it’s renting an outfit for every day or a special occasion, or finding a pre-loved designer piece to keep forever.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Thank you for swapping with us!</h2>
        <p className={styles.paragraph}>
          From rental to resale and beyond, we are broadening our vision to become the starting point for the circular economy — offering a variety of ways to experience the best assortment of designer apparel, accessories and more. We’re just getting started. Join us.
        </p>
        <img className={styles.signature} src='signature.png'/>
        
        <p className={styles.founders}>
          <em>Toia and Kiev<br />Co-founders, Toia de Kiev</em>
        </p>
      </section>
    </div>
    <NeverMissAStyleBeat/>
    </>
  );
}
