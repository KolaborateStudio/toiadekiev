import styles from './IfItems.module.css';

export default function IfItems() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img
          src="Home_Desktop_Benefits_052825.webp"
          alt="Benefits"
          className={styles.image}
        />
      </div>
      <div className={styles.backTextSection}>
        <div className={styles.textSection}>
          <h2 className={styles.headline}>
            <span className="mq__tablet-and-desktop">
              If items don’t fit right in your first 60 days, you’ll get <em>free items</em> in your next shipment.
            </span>
          </h2>
          <p className={styles.promise}>
            No questions asked! It’s our Customer Promise.
          </p>
          <button className={styles.button}>Start Renting</button>
        </div>
      </div>
    </div>
  );
}
