import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>How It Works</h1>
      <p className={styles.intro}>
        Your destination for renting designer clothing — access our always-rotating closet with our monthly subscription plans or reserve individual items up to four months in advance.
      </p>

      {/* Subscription */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Endless Closet</h2>
        <h3 className={styles.subheading}>Rent with Membership</h3>
        <p className={styles.text}>
          One subscription with everything you need. Enjoy all the thrills of designer shopping, without over-spending. Zero commitments — pause or cancel anytime.
        </p>
        <button className={styles.button}>Subscribe Now</button>
        <div className={styles.steps}>
          <div className={styles.step}>
            <h4>1. Choose Your Styles</h4>
            <p>Browse hundreds of new styles each week for work, weekends, or special occasions — all for one price.</p>
          </div>
          <div className={styles.step}>
            <h4>2. Wear Them Out</h4>
            <p>Keep them as long as you want. Return when ready — or buy what you love at a discount.</p>
          </div>
          <div className={styles.step}>
            <h4>3. Exchange for More</h4>
            <p>Return items, pick new styles — we cover dry cleaning and shipping.</p>
          </div>
        </div>
        <p className={styles.guarantee}>
          <strong>Our Customer Promise:</strong> If items don’t fit or feel right in your first 60 days, you get free replacements — no questions asked.
        </p>
      </section>

      {/* One-Time Rentals */}
      <section className={styles.sectionAlt}>
        <h2 className={styles.heading}>Outfits for Everything</h2>
        <h3 className={styles.subheading}>Reserve Items Ahead — No Subscription Required</h3>
        <p className={styles.text}>
          From weddings to vacations, rent for 4 or 8 days, up to 4 months in advance. A free backup size is included with every order.
        </p>
        <button className={styles.buttonSecondary}>Learn More</button>
        <div className={styles.stats}>
          <div><strong>$3,000+</strong><br />Retail value per item</div>
          <div><strong>$15</strong><br />Per item with our 10-item plan</div>
          <div><strong>750+</strong><br />Designers to choose from</div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Rent by Category</h2>
        <div className={styles.categories}>
          <span>Dresses</span>
          <span>Skirts</span>
          <span>Tops</span>
          <span>Gowns</span>
          <span>Jeans</span>
          <span>Blazers</span>
          <span>Pants</span>
        </div>
      </section>
    </div>
  );
}
