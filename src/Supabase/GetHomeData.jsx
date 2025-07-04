import { useState, useEffect } from 'react';
import supabase from './Supabase'; // ajustá la ruta si hace falta

export default function GetHomeData() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHome() {
      setLoading(true);
      const { data, error } = await supabase
        .from('home')
        .select('title, foto1, foto2')
        .limit(1)
        .single();
      if (error) {
        console.error('Error fetching home:', error);
        setHomeData(null);
      } else {
        setHomeData(data);
      }
      setLoading(false);
    }
    fetchHome();
  }, []);

  return { homeData, loading };
}
