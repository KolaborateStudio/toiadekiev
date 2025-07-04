import styles from './CleaningProcess.module.css';

export default function CleaningProcess() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>We Clean Up Nice, So You Can Too</h1>
      <p className={styles.intro}>
        Since our founding in 2009, we’ve been building the world’s first shared closet. Our cleaning experts and
        garment science teams are committed to ensuring every item looks and feels excellent — every time you rent.
      </p>

      <section className={styles.section}>
        <h2 className={styles.heading}>Cleaning & Care</h2>
        <p className={styles.text}>
          We prioritize the health and safety of both our customers and our warehouse team. Learn more about our cleaning and care practices below and in our FAQs.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Squeaky Clean</h2>
        <p className={styles.text}>
          We use a variety of cleaning processes tailored to each item’s needs — never using harmful solvents like PERC.
          Most garments pass through a steam tunnel between 248°F and 302°F. Garment bags are also cleaned between uses.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Wrapped and Ready to Wear</h2>
        <p className={styles.text}>
          Each cleaned garment is protected with a poly cover to preserve quality on its journey to the next customer.
          These covers help garments last longer and reduce waste — and yes, we recycle them!
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Reducing Single-Use Packaging</h2>
        <p className={styles.text}>
          Please return plastic covers and hangers with your garment bag — we clean and reuse them. Through our
          partnership with Trex, returned plastics are transformed into durable wood-alternative materials.
        </p>
      </section>

      <section className={styles.sectionGrid}>
        <h2 className={styles.heading}>Our Cleaning Process</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <h3>Thorough Cleaning</h3>
            <p>Each garment is cleaned using wet, dry, spot, or hydroxyl methods, depending on what it needs.</p>
          </div>
          <div className={styles.step}>
            <h3>Quality Assurance</h3>
            <p>Every item is carefully inspected to ensure it's in excellent condition and ready to wear.</p>
          </div>
          <div className={styles.step}>
            <h3>Steam Tunnel</h3>
            <p>Most pieces are steamed between 248°F and 302°F for deep cleaning and wrinkle removal.</p>
          </div>
          <div className={styles.step}>
            <h3>Care & Repair</h3>
            <p>Our seamstresses inspect and mend garments to extend their life and ensure quality.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Our Care & Commitment to You</h2>
        <p className={styles.text}>
          We’re committed to keeping our warehouse team and our community safe. Health and hygiene are always a top
          priority at Toia de Kiev.
        </p>
      </section>
    </div>
  );
}
