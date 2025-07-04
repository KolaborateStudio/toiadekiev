import { Link } from 'react-router-dom';
import styles from './Subscription.module.css';
import SubscribeReasons from './SubscribeReasons';
import HowSubscriptionWorks from './HowSubscriptionWorks';
import LooksGood from './LooksGood';
import WearTheBrands from './WearTheBrands';
import FaqColumn from '../../RentNowcomponents/FaqColumn';
import ExtraPlans from './ExtraPlans';

export default function Subscription() {
  const plans = [
    {
      name: 'Limited Closet Access',
      title:
        'Choose from a limited collection of subscription styles with individual retail values up to $350.',
      promo: '50% Off',
      itemsPerMonth: '5 items per month',
      priceNow: '$79',
      priceAfter: '$94/month after',
      description: ['5 items at a time', '1 shipment/month'],
      type: 'Limited',
    },
    {
      name: 'Full Closet Access',
      title:
        'Choose from our entire collection of subscription designer styles with individual retail values up to $3000.',
      promo: '50% Off',
      itemsPerMonth: '5 items per month',
      priceNow: '$80',
      priceAfter: '$119/month after',
      description: ['5 items at a time', '1 shipment/month'],
      type: 'Full',
    },
    {
      name: 'Full Closet Access',
      title: 'Get more with 10 items per month and 2 shipments.',
      promo: '50% Off',
      itemsPerMonth: '10 items per month',
      priceNow: '$87',
      priceAfter: '$144/month after',
      description: ['5 items at a time', '2 shipments/month'],
      type: 'Full',
    },
  ];

  // Agrupar planes por name
  const groupedPlans = plans.reduce((acc, plan) => {
    if (!acc[plan.name]) acc[plan.name] = [];
    acc[plan.name].push(plan);
    return acc;
  }, {});

  // Función para chequear si todos los planes de un grupo comparten la misma propiedad
  function allPlansShare(prop, group) {
    return group.every((plan) => plan[prop] === group[0][prop]);
  }

  return (
    <>
      <div className={styles.Header1}>
        <h2 className={styles.Header}>
          The rental clothing subscription for every day
        </h2>
        <p className={styles.Subtitle}>
          For your first 60 days, we’ll replace any item that doesn’t fit or
          feel right—for free. Pause or cancel anytime.
        </p>
      </div>
      <section className={styles.planSection}>
        <div className={styles.planGrid}>
          {Object.entries(groupedPlans).map(([name, group], groupIndex) => {
            const sameName = allPlansShare('name', group);
            const sameTitle = allPlansShare('title', group);

            return (
              <div key={groupIndex} className={styles.planGroupWrapper}>
                <div
                  className={`${styles.planGroup} ${
                    group[0].type === 'Limited' ? styles.limited : styles.full
                  }`}
                >
                  {/* Título y descripción únicos arriba */}
                  <h3 className={styles.planName}>{group[0].name}</h3>
                  <p className={styles.planDescription}>{group[0].title}</p>

                  {/* Contenedor horizontal para las tarjetas */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      justifyContent: 'center',
                      alignItems: 'stretch',
                      flexDirection: group.length === 2 ? 'column' : 'row'
                    }}
                  >
                 <div className={styles.cardGrid}>
                    {group.map((plan, index) => (
                      <div
                        key={index}
                        className={`${styles.planCard} ${
                          plan.type === 'Limited' ? styles.limited : styles.full
                        }`}
                      >
                        <div className={styles.cardBox}>
                          <span className={styles.badge}>{plan.promo}</span>
                          <div className={styles.cardContent}>
                            <p className={styles.itemsPerMonth}>
                              {plan.itemsPerMonth.split(' ')[0]}{' '}
                              <span className={styles.itemsPerMonthText}>
                                {plan.itemsPerMonth.split(' ').slice(1).join(' ')}
                              </span>
                            </p>
                            <p className={styles.priceNow}>
                              <span className={styles.priceAmount}>{plan.priceNow}</span>
                              /mo for 1 month
                            </p>
                            <p className={styles.priceAfter}>{plan.priceAfter}</p>
                            <hr className={styles.dividier} />
                            <ul className={styles.planDetails}>
                              {plan.description.map((detail, i) => (
                                <li key={i} className={styles.planDetailItem}>
                                  ✓ {detail}
                                </li>
                              ))}
                            </ul>
                            <Link to="/checkout">
                              <button className={styles.getStartedButton}>Get Started</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
              </div> // ✅ este cierra el return
            );
          })}
              </div>
      </section>

      <SubscribeReasons />
      <ExtraPlans />
      <WearTheBrands />
      <LooksGood />
      <HowSubscriptionWorks />
      <FaqColumn />
    </>
  );
}
