import styles from './LooksGood.module.css';

export default function LooksGood() {
  return (
    <section className={styles.looksGood}>
      <h6>TDK looks good on everyone</h6>
      <div className={styles.photosContainer}>
        <div className={styles.photoItem}>
          <img src="member1.webp" alt="@juliamcguire" />
          <p>@juliamcguire</p>
        </div>
        <div className={styles.photoItem}>
          <img src="member2.webp" alt="@linhniller" />
          <p>@linhniller</p>
        </div>
        <div className={styles.photoItem}>
          <img src="member3.webp" alt="@killa_camila" />
          <p>@killa_camila</p>
        </div>
        <div className={styles.photoItem}>
          <img src="member4.webp" alt="@maddison_lynn" />
          <p>@maddison_lynn</p>
        </div>
        <div className={styles.photoItem}>
          <img src="member5.webp" alt="@hunterpremo" />
          <p>@hunterpremo</p>
        </div>
      </div>
    </section>
  );
}
