import styles from './CompareSection.module.css';

export default function CompareSection() {
  return (
    <>
      <section className={styles.compareSection}>
        <h2 className={styles.compareTitle}>Why buy when you could rent?</h2>
        <p className={styles.compareSubtitle}>
          Save money, time, and valuable closet space with Toia de Kiev.
        </p>

        <table className={styles.compareTable}>
          <thead>
            <tr>
              <th></th>
              <th>Buying New</th>
              <th className={styles.rentingHeader}>Renting</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>New designer looks starting at $35</td>
              <td>✗</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Freshly-pressed and delivered in a premium garment bag</td>
              <td>✗</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>A free back-up size for peace of mind</td>
              <td>✗</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Overnight replacements if it's not quite right</td>
              <td>✗</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Wear just once without the guilt</td>
              <td>✗</td>
              <td>✓</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}