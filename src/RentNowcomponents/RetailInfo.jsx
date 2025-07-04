import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './RetailInfo.module.css';

export default function RetailInfo({ retail }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div className={styles.retailInfoWrapper}>
      <span className={styles.originalRetail}>
        {retail} original retail
      </span>

      <div
        className={styles.tooltipContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          className={styles.icon}
          width="16"
          height="16"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM6 12A6 6 0 106 0a6 6 0 000 12zm2.386-7.09A2.387 2.387 0 016.75 7.174v.189a.75.75 0 11-1.5 0v-.819a.75.75 0 01.75-.75.886.886 0 10-.886-.886.75.75 0 01-1.5 0A2.382 2.382 0 016 2.523a2.386 2.386 0 012.386 2.386zM6 9.272a.545.545 0 100-1.091.545.545 0 000 1.09z"
          />
        </svg>

        {showTooltip && (
          <div className={styles.tooltip}>
            This number represents the “Original Retail” or “Comparable Value” price. Items may be in the rental rotation for multiple seasons after these prices are set. For more info on these prices, see our <span className={styles.link} onClick={() => navigate("/faq")}>FAQs</span>.
          </div>
        )}
      </div>
    </div>
  );
}

