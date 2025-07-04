import { useState, useEffect } from 'react';
import supabase from '../../Supabase/Supabase';
import styles from './Faq.module.css';

export default function Faq() {
  const [faqData, setFaqData] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [faqForm, setFaqForm] = useState({
    question: '',
    answer: '',
    category: '',
  });

  useEffect(() => {
    const fetchFaq = async () => {
      const { data, error } = await supabase.from('faq').select('*');
      if (!error) setFaqData(data || []);
      else console.error('Error al obtener FAQs:', error.message);
    };
    fetchFaq();
  }, []);

  const groupedFaqs = faqData.reduce((acc, { category, question, answer }) => {
    const title = category?.replace(/_/g, ' ') || 'Sin categoría';
    const existing = acc.find((item) => item.title === title);
    if (existing) {
      existing.questions.push({ question, answer });
    } else {
      acc.push({ title, questions: [{ question, answer }] });
    }
    return acc;
  }, []);

  const uniqueCategories = [...new Set(faqData.map(faq => faq.category))];

  const handleChangeFAQ = (e) => {
    const { name, value } = e.target;
    setFaqForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;
    const { data, error } = await supabase.from('faq').insert([
      {
        category: newCategory.trim(),
        question: 'N/A',
        answer: 'N/A',
      },
    ]);
    if (error) {
      console.error('❌ Error al agregar categoría:', error.message);
    } else {
      console.log('✅ Categoría agregada:', data);
      setNewCategory('');
      setFaqData((prev) => [...prev, ...data]);
    }
  };

  const handleSubmitFAQ = async (e) => {
    e.preventDefault();
    const { question, answer, category } = faqForm;

    const { data, error } = await supabase.from('faq').insert([
      { question, answer, category },
    ]);

    if (error) {
      console.error('❌ Error al agregar FAQ:', error.message);
    } else {
      console.log('✅ FAQ agregada:', data);
      setFaqData((prev) => [...prev, ...data]);
      setFaqForm({ question: '', answer: '', category: '' });
    }
  };

  return (
    <>
      <h3>FAQ</h3>

      <form onSubmit={handleSubmitFAQ} className={styles.faqForm}>
        <h3 className={styles.faqTitle}>Agregar FAQ</h3>

        <label className={styles.faqLabel}>
          Categoría:
          <select
            name="category"
            value={faqForm.category}
            onChange={handleChangeFAQ}
            className={styles.faqSelect}
            required
          >
            <option value="" disabled>
              Seleccioná una categoría
            </option>
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.replace(/_/g, ' ')}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.faqLabel}>
          Pregunta:
          <input
            type="text"
            name="question"
            value={faqForm.question}
            onChange={handleChangeFAQ}
            required
            className={styles.faqInput}
          />
        </label>

        <label className={styles.faqLabel}>
          Respuesta:
          <textarea
            name="answer"
            value={faqForm.answer}
            onChange={handleChangeFAQ}
            required
            className={styles.faqTextarea}
          />
        </label>

        <button type="submit" className={styles.faqButton}>
          Agregar
        </button>
      </form>

      <div className={styles.faqForm}>
        <label className={styles.faqLabel}>
          Nueva categoría:
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className={styles.faqInput}
            placeholder="Escribí nueva categoría"
          />
          <button
            type="button"
            className={styles.faqButton}
            onClick={handleAddCategory}
            disabled={!newCategory.trim()}
          >
            +
          </button>
        </label>
      </div>
    </>
  );
}
