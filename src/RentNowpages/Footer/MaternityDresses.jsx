import styles from './MaternityDresses.module.css';
import NeverMissAStyleBeat from '../../RentNowcomponents/NeverMissAStyleBeat';

export default function MaternityDresses() {
  return (
    <>
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Maternity Style for Every Stage</h1>
        <p>Love your outfit throughout each trimester (and beyond) with one of our flexible memberships.</p>
        <button className={styles.cta}>EXPLORE MEMBERSHIPS</button>
      </section>

      <section className={styles.browse}>
        <h2>Browse Maternity Styles For...</h2>
        <div className={styles.categories}>
          {["WORK", "WEEKEND", "DATE NIGHT", "SPECIAL OCCASION"].map((cat) => (
            <div key={cat} className={styles.category}>
              {cat}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.perks}>
        <h2>Perks of Membership</h2>
        <ul className={styles.perkList}>
          <li>
            <h3>OPTIONS, OPTIONS, OPTIONS</h3>
            <p>Choose from thousands of top designer styles for every stage.</p>
          </li>
          <li>
            <h3>CLEANING INCLUDED!</h3>
            <p>Accidents happen. Don't worry about it!</p>
          </li>
          <li>
            <h3>FREE SHIPPING & RETURNS</h3>
            <p>Orders include a prepaid return label and typically arrive 2-3 business days after shipping.</p>
          </li>
          <li>
            <h3>FLEXIBLE PLANS</h3>
            <p>Want more? Get more! Add more styles to your plan whenever you want.</p>
          </li>
          <li>
            <h3>A BETTER CLOSET</h3>
            <p>No need to waste money (or closet space) on maternity styles you'll only wear once. Rent them instead!</p>
          </li>
          <li>
            <h3>FREE FIT & STYLING ADVICE</h3>
            <p>Our maternity stylists are on-call to help you feel amazing in everything you rent.</p>
          </li>
        </ul>
      </section>

      <section className={styles.howItWorks}>
        <h2>Renting with a Membership</h2>
        <ul className={styles.howSteps}>
          <li>
            <h3>PICK YOUR PLAN</h3>
            <p>Our plans are designed to fit seamlessly into your life. Whether it’s a wardrobe pick-me-up or endless closet access, find the right plan for you.</p>
          </li>
          <li>
            <h3>STYLE FOR EVERY TRIMESTER</h3>
            <p>We offer an assortment of clothing—from everyday workwear to special occasion gowns—to carry you through every trimester and beyond.</p>
          </li>
          <li>
            <h3>WEAR. SWAP. REPEAT.</h3>
            <p>Style and wear your items for as long as you’d like. When you're ready for something new, ship your items back in the reusable garment bag they came in.</p>
          </li>
        </ul>
        <button className={styles.cta}>EXPLORE MEMBERSHIPS</button>
      </section>

      <section className={styles.testimonials}>
        <h2>Hear from Toia Community</h2>
        <p>Why moms everywhere rent instead of buy, for their bump and beyond.</p>
      </section>
    </div>
          <NeverMissAStyleBeat/>
    </>

  );
}
