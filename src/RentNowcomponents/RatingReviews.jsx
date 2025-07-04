import styles from './RatingReviews.module.css';


export default function RatingReviews () {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ratings & Reviews</h2>
      <div className={styles.ratingInfo}>
        <span className={styles.ratingCount}>(0)</span>
        <p className={styles.subtitle}>
          Includes written reviews and customer fit feedback.
        </p>
      </div>

      <div className={styles.fitScale}>
        <span className={styles.label}>Runs Small</span>
        <div className={styles.scaleBar}>
          <div className={styles.scaleIndicator}></div>
        </div>
        <span className={styles.label}>Runs Large</span>
      </div>

      <div className={styles.breadcrumb}>
        <a href="#" className={styles.link}>Browse</a> / 
        <a href="#" className={styles.link}> Clothing</a> / 
        <a href="#" className={styles.link}> Tops</a>
      </div>
    </div>
  );
};
