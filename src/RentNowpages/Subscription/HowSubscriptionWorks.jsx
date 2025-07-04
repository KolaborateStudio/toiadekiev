import styles from './HowSubscriptionWorks.module.css';

export default function HowSubscriptionWorks () {
    return (
    <section className={styles.howSubscriptionWorks}>
        <h2>How subscription works</h2>
        <ol className={styles.stepsList}>
          <li>
            <h3><strong>1. Choose your styles</strong></h3>
            <p>Explore thousands of styles and 750+ designers each month to create your shipment.</p>
          </li>
          <li>
            <h3><strong>2. Wear them out</strong></h3>
            <p>With personal style tips and free replacements your first 60 days, you’re free to take some style risks!</p>
          </li>
          <li>
            <h3><strong>3. Exchange for more</strong></h3>
            <p>Each month you can swap items for new styles, with the option to buy or keep renting for as long as you want.</p>
          </li>
        </ol>
      </section>
    )
}