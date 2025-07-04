import { useState, useEffect } from 'react';
import supabase from '../../Supabase/Supabase';
import styles from './Faq2.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Faq2() {
  const [faqData, setFaqData] = useState([]);
  const [faqForm, setFaqForm] = useState({
    question: '',
    answer: '',
    category: '',
  });
  const [newCategory, setNewCategory] = useState('');
  const [editingFAQ, setEditingFAQ] = useState(null);

  useEffect(() => {
    fetchFaq();
  }, []);

  const fetchFaq = async () => {
    const { data, error } = await supabase.from('faq').select('*');
    if (!error) setFaqData(data || []);
    else console.error('Error al obtener FAQs:', error.message);
  };

  const groupedFaqs = Array.isArray(faqData)
  ? faqData.reduce((acc, { id, category, question, answer }) => {
      const title = category?.replace(/_/g, ' ') || 'Sin categoría';
      const existing = acc.find((item) => item.title === title);
      if (existing) {
        existing.questions.push({ id, question, answer });
      } else {
        acc.push({
          title,
          rawCategory: category,
          questions: [{ id, question, answer }],
        });
      }
      return acc;
    }, [])
  : [];


  const uniqueCategories = [
    ...new Set(faqData.map((f) => f.category).filter(Boolean)),
  ];

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
      question: '',
      answer: '',
    },
  ]);

  if (!error) {
    setNewCategory('');
    fetchFaq();
    toast.success('Categoría agregada correctamente');
  } else {
    console.error('❌ Error al agregar categoría:', error.message);
    toast.error('Error al agregar categoría');
  }
};

const handleSubmitFAQ = async (e) => {
  e.preventDefault();
  const { question, answer, category } = faqForm;

  const { data, error } = await supabase
    .from('faq')
    .insert([{ question, answer, category }]);

  if (!error) {
    setFaqForm({ question: '', answer: '', category: '' });
    fetchFaq();
    toast.success('Pregunta frecuente agregada correctamente');
  } else {
    console.error('❌ Error al agregar FAQ:', error.message);
    toast.error('Error al agregar pregunta frecuente');
  }
};


  const handleDeleteFAQ = async (id) => {
    const { error } = await supabase.from('faq').delete().eq('id', id);
    if (!error) {
      setFaqData((prev) => prev.filter((faq) => faq.id !== id));
    } else {
      console.error('❌ Error al eliminar FAQ:', error.message);
    }
  };

  const handleDeleteCategory = async (category) => {
    const { error } = await supabase
      .from('faq')
      .delete()
      .eq('category', category);
    if (!error) {
      setFaqData((prev) => prev.filter((faq) => faq.category !== category));
    } else {
      console.error('❌ Error al eliminar categoría:', error.message);
    }
  };

  const handleSaveEdit = async () => {
    const { id, question, answer } = editingFAQ;
    const { data, error } = await supabase
      .from('faq')
      .update({ question, answer })
      .eq('id', id);
    if (!error) {
      setFaqData((prev) =>
        prev.map((faq) => (faq.id === id ? { ...faq, question, answer } : faq))
      );
      setEditingFAQ(null);
    } else {
      console.error('❌ Error al editar FAQ:', error.message);
    }
  };

  return (
    <div className={styles.faqContainer}>
      <h3 className={styles.faqTitle}>FAQ</h3>

      <form onSubmit={handleSubmitFAQ} className={styles.faqForm}>
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
                {/* {cat.replace(/_/g, ' ')} */}
                {cat}
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

      <div className={styles.faqGrid}>
        {groupedFaqs.map(({ title, questions }) => (
          <section key={title} className={styles.faqSection}>
            <div className={styles.faqHeader}>
              <h2 className={styles.faqTitle}>
                {title}
                <button
                  className={styles.deleteCategoryBtn}
                  onClick={() => handleDeleteCategory(title)}
                  aria-label={`Eliminar categoría ${title}`}
                >
                  ×
                </button>
              </h2>
            </div>
            <ul className={styles.faqList}>
              {questions.map((q) => (
                <li key={q.id} className={styles.faqQuestion}>
                  {editingFAQ?.id === q.id ? (
                    <>
                      <input
                        type="text"
                        value={editingFAQ.question}
                        onChange={(e) =>
                          setEditingFAQ((prev) => ({
                            ...prev,
                            question: e.target.value,
                          }))
                        }
                        className={styles.faqInput}
                      />
                      <textarea
                        value={editingFAQ.answer}
                        onChange={(e) =>
                          setEditingFAQ((prev) => ({
                            ...prev,
                            answer: e.target.value,
                          }))
                        }
                        className={styles.faqTextarea}
                      />
                      <button
                        onClick={handleSaveEdit}
                        className={styles.faqButton}
                      >
                        Guardar
                      </button>
                      <button
                        onClick={() => setEditingFAQ(null)}
                        className={styles.faqButton}
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <>
                      <strong>{q.question}</strong>
                      <p>{q.answer}</p>
                      <button
                        onClick={() => setEditingFAQ(q)}
                        className={styles.faqButton}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDeleteFAQ(q.id)}
                        className={styles.faqButton}
                      >
                        Eliminar
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
          <ToastContainer />

    </div>
  );
}
