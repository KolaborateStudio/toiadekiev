import supabase from './Supabase'; // ajustá la ruta si hace falta

export default async function GetFaqCategories() {
  const { data, error } = await supabase.rpc('get_enum_values', {
    enum_name: 'faqCategory',
  });

  if (error) {
    console.error('Error fetching enum values:', error.message);
    return [];
  }

  return data || [];
}