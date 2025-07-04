import styles from './RentWithoutSubscription.module.css';
import FaqColumn from '../../RentNowcomponents/FaqColumn.jsx';
import CompareSection from '../CompareSection.jsx';
import BeTheFirstToBookNewStyles from '../BeTheFirstToBookNewStyles.jsx';
import ForEverthingSpecialThisSummer from '../ForEverthingSpecialThisSummer.jsx';

export default function RentWithoutSubscription() {
  return (
    <>
      <section className={styles.firstNeedLaterWrapper}>
        <div className={styles.portadaInicio}>
          <div className={styles.textoPortada}>
            <h5 className={styles.firstSmallTitle}>
              Need it later?
              <br />
              Book in advance.
            </h5>
            <h6 className={styles.firstSubSmallTitle}>
              No subscription required to reserve ahead.
            </h6>
            <button className={styles.firstRentButton}>
              Start Renting from $35
            </button>
          </div>
        </div>

        <h4 className={styles.firstCenteredH4}>
          From weddings to vacations, we make it easy to plan ahead.
        </h4>

        <div className={styles.FirstIconRow}>
          <div className={styles.FirstIconItem}>
            <img
              src="/wardrobe.webp"
              alt="wardrobe"
              className={styles.FirstIcon}
            />
            <p className={styles.Titles}>Find the dress</p>
            <p className={styles.FirstSmallParagraph}>
              Take your pick from 750+ designers and enjoy a free backup size,
              on us.
            </p>
          </div>

          <div className={styles.FirstIconItem}>
            <img src="/Dates.webp" alt="Dates" className={styles.FirstIcon} />
            <p className={styles.Titles}>Choose your dates</p>
            <p className={styles.FirstSmallParagraph}>
              Rent for any 4 or 8 day period, up to 4 months in advance.
            </p>
          </div>

          <div className={styles.FirstIconItem}>
            <img src="/Smiley.webp" alt="Smiley" className={styles.FirstIcon} />
            <p className={styles.Titles}>Have your fun, then send it back</p>
            <p className={styles.FirstSmallParagraph}>
              Schedule a free, at-home pick up or drop off at your local UPS.
            </p>
          </div>
        </div>
      </section>
      <BeTheFirstToBookNewStyles/>
      <ForEverthingSpecialThisSummer />
      <CompareSection />
      <FaqColumn />
    </>
  );
}
