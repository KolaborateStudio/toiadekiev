import styles from './ReturningRentals.module.css';

export default function ReturningRentals() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>How to Return</h1>

      <section className={styles.section}>
        <h2 className={styles.heading}>Send your shipment back</h2>
        <p className={styles.text}>
          Every shipment includes a pre-paid return label. When you’re ready to send it back, remove the shipping label
          from the plastic pouch on the outside of the garment bag. Flip it over, and paste the prepaid return label on
          the cardstock from the bag's inside pocket.
        </p>
        <p className={styles.text}>
          Drop it off at your local Andreani — or, if you live in an eligible ZIP code, you can schedule an at-home pickup.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Don’t overthink it!</h2>
        <p className={styles.text}>
          No need to worry about carefully packing things back up — just make sure any dustbags or boxes are included.
          Sometimes shipments may arrive in a polybag or cardboard box, which you can reuse for returns.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Lost your return label?</h2>
        <p className={styles.text}>
          No problem. Go to <strong>Order History</strong> in your account (or <strong>My TDK</strong> in the app) and request a new return label for your latest shipment.
        </p>
      </section>
    </div>
  );
}
