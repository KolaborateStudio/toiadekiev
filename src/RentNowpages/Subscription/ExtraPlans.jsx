import styles from './ExtraPlans.module.css';
import { Link } from 'react-router-dom';

const extraPlans = [
  {
    name: "Flexible Plan 15 items",
    title: "Flexible plan for 15 items per month",
    promo: "",
    itemsPerMonth: "15 items per month",
    priceNow: "$149/mo for 1 month",
    priceAfter: "$193/month after",
    description: ["5 items at a time", "3 shipments/month"],
    type: "Flexible"
  },
  {
    name: "Flexible Plan 20 items",
    title: "Flexible plan for 20 items per month",
    promo: "50%", // No promo visible en el texto original
    itemsPerMonth: "20 items per month",
    priceNow: "$169/mo for 1 month",
    priceAfter: "$235/month after",
    description: ["5 items at a time", "4 shipments/month"],
    type: "Flexible"
  },
  {
    name: "Flexible Plan 30 items",
    title: "Flexible plan for 30 items per month",
    promo: "", // Tampoco promo visible
    itemsPerMonth: "30 items per month",
    priceNow: "$316/mo for 1 month",
    priceAfter: "$316/month after",
    description: ["5 items at a time", "6 shipments/month"],
    type: "Flexible"
  }
];

export default function ExtraPlans() {
  return (
    <>
          <h1 className={styles.Title}>Flexible plans for all your needs</h1>
        <section className={styles.extraPlans}>
        {extraPlans.map((plan, index) => (
          <div
            key={"extra-" + index}
            className={`${styles.planCard} ${styles.flexible}`}
          >

            <div className={styles.cardBox}>
              {plan.promo && <span className={styles.badge}>{plan.promo}</span>}
              <div className={styles.cardContent}>
                <p className={styles.itemsPerMonth}>
                  <strong>{plan.itemsPerMonth.split(" ")[0]}</strong>{" "}
                  <span>{plan.itemsPerMonth.split(" ").slice(1).join(" ")}</span>
                </p>
                <p className={styles.priceNow}>{plan.priceNow}</p>
                <p className={styles.priceAfter}>{plan.priceAfter}</p>

                <ul className={styles.planDetails}>
                  {plan.description.map((detail, i) => (
                    <li key={i} className={styles.planDetailItem}>✓ {detail}</li>
                  ))}
                </ul>

               <Link to="/checkout"><button className={styles.getStartedButton}>Get Started</button></Link>
              </div>
            </div>
          </div>
        ))}
    </section>
    </>
  );
}
