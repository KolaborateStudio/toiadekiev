import { useState, useEffect } from 'react';
import supabase from './Supabase'; // ajustá la ruta si hace falta

export default function GetFaqData() {
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFaq() {
      setLoading(true);
      const { data, error } = await supabase
        .from('faq')
        .select('question,answer,category');

      if (error) {
        console.error('Error fetching faq:', error);
        setFaqData([]);
      } else {
        setFaqData(data);
      }
      setLoading(false);
    }

    fetchFaq();
  }, []);

  return { faqData, loading };
}


