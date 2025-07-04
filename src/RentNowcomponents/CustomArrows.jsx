import styles from './CustomArrows.module.css';


export function NextArrow(props) {
  const { onClick, isLast } = props;

  if (isLast) return null;

  return (
    <div
      className={styles.customNext}
      onClick={onClick}
    >
      <i className="bi bi-chevron-right"></i>
    </div>
  );
}

export function PrevArrow(props) {
  const { onClick, isFirst } = props;

  if (isFirst) return null;

  return (
    <div
      className={styles.customPrev}
      onClick={onClick}
    >
     <i className="bi bi-chevron-left"></i>
    </div>
  );
}
