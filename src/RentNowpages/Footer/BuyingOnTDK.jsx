import styles from './BuyingOnTDK.module.css';

export default function BuyingOnTDK() {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.title}>Try it, then buy it</h1>
        <p className={styles.subtitle}>
          Rent everything you like, but only buy what you love.
        </p>
        <button className={styles.primaryButton}>Buy Now</button>
      </section>

      <section className={styles.benefits}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Freedom to try it out</h2>
          <p className={styles.cardText}>
            So long, buyers remorse! Rent it, wear it, then buy when you know you love it.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Luxury for less</h2>
          <p className={styles.cardText}>
            Shop authenticated styles from major designers, all at a reduced price.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Own what you can only get here</h2>
          <p className={styles.cardText}>
            Shop TDK-exclusive styles from Philip Lim, Rosetta Getty, and more.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>Buy Now: Save on Your Favorites</h3>
        <button className={styles.secondaryButton}>View All</button>
      </section>
    </div>
  );
}
