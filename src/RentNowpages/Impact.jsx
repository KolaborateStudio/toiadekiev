import styles from './Impact.module.css';

export default function Impact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        The future of fashion must prioritize access over excess
      </h1>
      <p className={styles.intro}>
        Driving positive environmental and social impact is core to Toia de Kiev’s business model.
        We enable our customers to buy less and wear more.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Impact Strategy</h2>
        <p className={styles.text}>
          Toia de Kiev’s goals focus on key environmental and social challenges in fashion.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Displace New Production:</strong> Avoid the production of 500,000 new garments by 2026.
          </li>
          <li>
            <strong>Minimize Waste:</strong> Divert nearly 100% of unusable clothing from landfills.
          </li>
          <li>
            <strong>Offset Carbon Emissions:</strong> Offset 100% of estimated shipping emissions since FY22.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Additional Priorities</h2>
        <ul className={styles.list}>
          <li><strong>Net Zero Emissions:</strong> Operate with net zero carbon emissions by 2040.</li>
          <li><strong>Diversity & Inclusion:</strong> Foster an inclusive workplace where all employees thrive.</li>
          <li><strong>Diversity in Fashion:</strong> Work with diverse brands and creators.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Progress</h2>
        <ul className={styles.list}>
          <li>24% less water, 6% less energy, 3% fewer emissions per garment rented vs. bought new.</li>
          <li>1.6 million garments' production displaced since 2010.</li>
          <li>6.5 million repairs completed as of Jan 2024.</li>
          <li>1.4 million items diverted from landfills via donation/resale/recycling.</li>
          <li>47% of U.S. corporate workforce identifies as racial/ethnic minority.</li>
          <li>100% of shipment emissions offset since FY22.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Ambitions</h2>
        <p className={styles.text}>
          We aim to lead the way in sustainable fashion and empower a thriving, diverse community.
        </p>
        <h3 className={styles.subheading}>Priorities & Goals</h3>
        <ul className={styles.list}>
          <li>Achieve net zero carbon emissions by 2040.</li>
          <li>Power operations with 100% renewable energy by 2026.</li>
          <li>Quantify Scope 3 emissions by 2026.</li>
          <li>Sustainably source 50% of cotton, polyester, and linen for exclusive designs by 2026.</li>
          <li>Remove plastic from shipments and use only recyclable, compostable, or reusable packaging.</li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <h4 className={styles.resourcesTitle}>Resources</h4>
        <ul className={styles.links}>
          <li>FY23 Impact Update</li>
          <li>Vendor Code of Conduct</li>
          <li>Toia de Kiev Code of Conduct</li>
          <li>Animal Welfare Policy</li>
          <li>Cleaning Overview</li>
          <li>Carbon Offsets Info</li>
          <li>Life Cycle Assessment</li>
        </ul>
        <p className={styles.contact}>Need more information? Contact us.</p>
      </footer>
    </div>
  );
}
