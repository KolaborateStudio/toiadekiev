import styles from './SubscribeReasons.module.css';

export default function SubscribeReasons() {
  return (
    <section className={styles.subscribeReasons}>
      <h3 className={styles.title}>6 reasons to subscribe now</h3>

      <div className={styles.gridContainer}>
        <div className={styles.reasonItem}>
          <img
            src="Dollar_forBuyingLP_011325.webp"
            style={{ height: '5vh', width: '5vh' }}
            alt="Icono secundario"
          />
          <p className={styles.reasonText}>
            Wear a wardrobe worth thousands, starting at under $100/mo
          </p>
        </div>

        <div className={styles.reasonItem}>
          <img
            src="DeliveryasPNGwAdjRatio.webp"
            style={{ height: '5vh', width: '6vh' }}
            alt="Icono secundario"
          />

          <p className={styles.reasonText}>
            Plans include free delivery in 1-3 business days, with option for
            home pickup or return to Andreani
          </p>
        </div>

        <div className={styles.reasonItem}>
          <img
            src="Smiley.webp"
            style={{ height: '5vh', width: '5vh' }}
            alt="Icono secundario"
          />
          <p className={styles.reasonText}>
            Millions of 5-star reviews to help you get the perfect fit
          </p>
        </div>

        <div className={styles.reasonItem}>
          <img
            src="WearOnRepeat.webp"
            style={{ height: '5vh', width: '5vh' }}
            alt="Icono secundario"
          />
          <p className={styles.reasonText}>
            Free returns and replacements your first 60 days
          </p>
        </div>

        <div className={styles.reasonItem}>
          <img
            src="wardrobe.webp"
            style={{ height: '5vh', width: '5vh' }}
            alt="Icono secundario"
          />
          <p className={styles.reasonText}>
            Keep items as long as you want, or buy at a discount
          </p>
        </div>

        <div className={styles.reasonItem}>
          <img
            src="laundry.svg"
            style={{ height: '5vh', width: '5vh' }}
            alt="Icono secundario"
          />
          <p className={styles.reasonText}>
            Items are dry cleaned and freshly pressed for free
          </p>
        </div>
      </div>
    </section>
  );
}
