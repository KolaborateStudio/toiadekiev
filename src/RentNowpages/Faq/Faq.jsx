import NeverMissAStyleBeat from '../../RentNowcomponents/NeverMissAStyleBeat';
import styles from './faq.module.css';
import GetFaqData from '../../Supabase/GetFaqData';

export default function Faq() {
  const { faqData = [] } = GetFaqData();

  // Agrupar preguntas y respuestas por categoría
  const groupedFaqs = Array.isArray(faqData)
    ? faqData.reduce((acc, { category, question, answer }) => {
        const title = category.replace(/_/g, ' ');
        const existing = acc.find(item => item.title === title);
        if (existing) {
          existing.questions.push({ question, answer });
        } else {
          acc.push({ title, questions: [{ question, answer }] });
        }
        return acc;
      }, [])
    : [];

  return (
    <>
      <div className={styles.faqContainer}>
        <div className={styles.bannerContainer}>
          <h1 className={styles.bannerTitle}>FAQs</h1>
          <p className={styles.bannerSubtitle}>How can we help you?</p>
          <div className={styles.searchBox}>
            <input
              aria-autocomplete="list"
              aria-controls="searchListbox"
              aria-expanded="true"
              aria-label="FAQ search"
              autoComplete="off"
              className={styles.searchInput}
              role="combobox"
              placeholder="What can we help you with?"
              value=""
            />
          </div>
        </div>

        <div className={styles.faqGrid}>
          {groupedFaqs.map(({ title, questions }) => (
            <section key={title} className={styles.faqSection}>
              <h2 className={styles.faqTitle}>{title}</h2>
              <ul className={styles.faqList}>
                {questions.map((q, i) => (
                  <li key={i} className={styles.faqQuestion}>
                    <strong>{q.question}</strong>
                    <p>{q.answer}</p>
                  </li>
                ))}
                <li className={styles.seeMore}>See more results</li>
              </ul>
            </section>
          ))}
        </div>
      </div>

      <NeverMissAStyleBeat />
    </>
  );
}
