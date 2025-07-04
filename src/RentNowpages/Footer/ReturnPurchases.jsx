import styles from './ReturnPurchases.module.css';

export default function ReturnPurchases() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Returning Purchased Items</h1>
      <p className={styles.info}>
        For more on purchasing items on Toia de Kiev, head here. <br />
        Need help returning a rental? We've got you covered.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Policy</h2>
        <ul className={styles.list}>
          <li>Purchases – excluding items marked as final sale – may be returned for a refund within 7 days of delivery.</li>
          <li>Refunds are credited to your account, usually within 3–5 days after arriving at our warehouse.</li>
          <li>A $5.95 restocking fee (+tax) is deducted per item returned.</li>
          <li>Original shipping fees are not refunded.</li>
          <li>Items must be returned in their original condition.</li>
          <li>Exchanges are not accepted.</li>
          <li>If the item is damaged, defective, or incorrect, please contact us.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3 Ways to Return</h2>
        <ol className={styles.numberedList}>
          <li>
            <strong>With other rentals:</strong> Return purchases together with rentals using the reusable garment bag.
          </li>
          <li>
            <strong>At a Nearby Andreani:</strong> Drop off returns at any Andreani location with the cashier.
          </li>
          <li>
            <strong>In the original packaging:</strong> Use the reusable poly mailer and attach the prepaid label before dropping it off at Andreani.
          </li>
        </ol>
        <p className={styles.note}>
          <strong>Help us recycle!</strong> Include extra packaging, dry cleaning bags, and hangers with your return — we’ll recycle or reuse them.
        </p>
      </section>
    </div>
  );
}
