import styles from './WearTheBrands.module.css';

export default function WearTheBrands() {
  return (
    <section className={styles.wearTheBrands}>
      <div>
        <img src="imgBrands.webp" />
      </div>
      <div>
        <p>
          Wear the brands you can’t <br /> rent <i>anywhere else.</i>
        </p>
        <button>Rent Now</button>
      </div>
    </section>
  );
}
