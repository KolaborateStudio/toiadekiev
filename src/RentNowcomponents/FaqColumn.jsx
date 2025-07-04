import NeverMissAStyleBeat from './NeverMissAStyleBeat';
import styles from './FaqColumn.module.css';
import { useState } from "react";
import GetFaqData from '../Supabase/GetFaqData'; // ajustá ruta si es necesario

export default function FaqColumn() {
  const [openIndex, setOpenIndex] = useState(null);
  const { faqData } = GetFaqData();
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <ul className={styles.faqList}>
          {(faqData || []).map((faq, i) => (
            <li key={i} className={styles.faqItem}>
              <button 
                className={styles.questionButton} 
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`answer-${i}`}
              >
                {faq.question}
                <span className={`${styles.toggleIcon} ${openIndex === i ? styles.open : ''}`}>
                  +
                </span>
              </button>
              <div
                id={`answer-${i}`}
                className={`${styles.answer} ${openIndex === i ? styles.show : ''}`}
                style={{ maxHeight: openIndex === i ? '10vh' : '0' }}
              >
                <p>{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <NeverMissAStyleBeat />
    </>
  );
}
