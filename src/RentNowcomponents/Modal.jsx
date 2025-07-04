import { useEffect } from 'react';
import styles from './Modal.module.css';
import { NavLink } from "react-router-dom";

export default function Modal({ onClose }) {
  useEffect(() => {
    // Al montar modal: bloquear scroll
    document.body.style.overflow = 'hidden';

    // Al desmontar modal: restaurar scroll
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <section className={styles.promoHeader}>
          <h2>Get $45 Off Your First Month</h2>
          <p>
            Sign up with code: <strong>GETDRESSED</strong>
          </p>
        </section>

        <section className={styles.planSummary}>
          <div className={styles.planItem}>
            <span className={styles.planNumber}>2</span>
            <span className={styles.planLabel}>shipments / mo</span>
          </div>
          <div className={styles.planItem}>
            <span className={styles.planNumber}>5</span>
            <span className={styles.planLabel}>items / shipment</span>
          </div>
          <div className={styles.planItemPrice}>
            <div className={styles.priceRow}>
              <span className={styles.currency}>$</span>
              <span className={styles.price}>99</span>
              <span className={styles.oldPrice}>$144</span>
            </div>
            <span className={styles.priceLabel}>first month</span>
          </div>
        </section>

        <a href="/subscription" className={styles.explorePlans}>
          Explore All Plans
        </a>

        <section className={styles.infoSection}>
          <h3>Choose 5 Items</h3>
          <p>
            Explore thousands of styles and 750+ designers each month to create your shipment.
          </p>
        </section>

        <section className={styles.infoSection}>
          <h3>Wear Them Out</h3>
          <p>
            With personal style tips and free replacements during your first 60 days, you can wear with confidence.
          </p>
        </section>

        <section className={styles.infoSection}>
          <h3>Swap or Keep in Your Next Shipment</h3>
          <p>
            Each shipment you can swap items for new styles, with the option to buy or keep renting for as long as you want.
          </p>
        </section>

        <div className={styles.signUpButtonContainer}>
             <NavLink to="/checkout">
              <button className={styles.signUpButton}>Sign Up</button></NavLink>.
        </div>
      </div>
    </div>
  );
}
