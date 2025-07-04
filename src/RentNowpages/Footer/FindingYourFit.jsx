import styles from './FindingYourFit.module.css';

export default function FindingYourFit() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Finding your fit</h1>
      <p className={styles.subtitle}>
        Explore personalized size suggestions and community tips to help you find styles that fit you best.
      </p>

      <section className={styles.section}>
        <h2 className={styles.heading}>Try freely — no pressure</h2>
        <p className={styles.text}>
          If items don’t fit or feel right in your first 60 days, we’ll give you free replacements in your next shipment.
        </p>
        <p className={styles.text}>
          Take risks, try different sizes, and explore new brands. If you don’t love an item, no worries — you’ll get a
          spot to swap it out next time.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Member fit reviews</h2>
        <p className={styles.text}>
          Browse community photos and reviews to understand how items fit real people. Filter reviews to see body types
          and sizes that match your own.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Smart size recommendations</h2>
        <p className={styles.text}>
          Since sizing varies between designers, we use Smart Size Recommendations for each style to help you choose your ideal fit.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Feeling stuck? Text a stylist</h2>
        <p className={styles.text}>
          You can text with a real stylist (never a robot!) for advice, help building shipments, and more. Just text <strong>STYLE</strong> to <strong>697-87</strong> to book a complimentary session.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Evolve your fit profile</h2>
        <p className={styles.text}>
          The more you rent, the better we understand your preferences. Leave feedback on every item you try, and we’ll improve your recommendations over time.
        </p>
      </section>

      <div className={styles.ctaSection}>
        <h3 className={styles.cta}>Choose from 750+ designers</h3>
        <p className={styles.text}>New styles added weekly — explore what's new and find your next fit.</p>
        <a href="/plans" className={styles.button}>Pick a Plan</a>
      </div>
    </div>
  );
}
