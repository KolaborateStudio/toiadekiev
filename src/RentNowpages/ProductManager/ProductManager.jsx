import { useState, useEffect } from 'react';
import supabase from '../../Supabase/Supabase';
import styles from './ProductManager.module.css';
import Faq2 from './Faq2';

export default function ProductManager() {
  // Productos
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    diseñador: '',
    rent: '',
    materiales: '',
    talle: '',
    detalles: '',
    imageUrl: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Home
  const [homeTitle, setHomeTitle] = useState('');
  const [homeImages, setHomeImages] = useState([]); // nuevas a subir
  const [homeSavedImages, setHomeSavedImages] = useState([]); // imágenes guardadas en DB que quedan
  const [homeRecord, setHomeRecord] = useState(null); // registro guardado (único)
  const [editingHomeId, setEditingHomeId] = useState(null);

  // Fetch Productos
  const fetchProducts = async () => {
    const { data, error } = await supabase.from('productos').select('*');
    if (error) console.error('Error al traer productos:', error);
    else setProducts(data);
  };

  // Fetch Home
  const fetchHome = async () => {
    const { data, error } = await supabase
      .from('home')
      .select('*')
      .limit(1)
      .single();
    if (error && error.code !== 'PGRST116') {
      console.error('Error al traer home:', error);
      setHomeRecord(null);
      setHomeSavedImages([]);
    } else {
      if (data) {
        setHomeRecord(data);
        setHomeTitle(data.title || '');
        setEditingHomeId(data.id);

        // Inicializar imágenes guardadas
        const savedImgs = [];
        if (data.foto1) savedImgs.push(data.foto1);
        if (data.foto2) savedImgs.push(data.foto2);
        setHomeSavedImages(savedImgs);
      } else {
        setHomeRecord(null);
        setHomeTitle('');
        setEditingHomeId(null);
        setHomeSavedImages([]);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchHome();
  }, []);

  // --- Form Productos ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const uploadImage = async (file, bucket = 'productos') => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = fileName;

    const { error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (error) {
      console.error(`Error subiendo imagen al bucket ${bucket}:`, error);
      alert(`Error subiendo imagen: ${error.message}`);
      return null;
    }

    return `https://wwetpxbracvnoacwvbib.supabase.co/storage/v1/object/public/${bucket}/${filePath}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = form.imageUrl;
    if (imageFile) {
      const uploadedUrl = await uploadImage(imageFile, 'productos');
      if (!uploadedUrl) return;
      imageUrl = uploadedUrl;
    }

    const productData = {
      nombre: form.nombre,
      diseñador: form.diseñador,
      rent: Number(form.rent),
      materiales: form.materiales,
      talle: form.talle,
      detalles: form.detalles,
      imageUrl,
    };

    try {
      if (editingId) {
        const { error } = await supabase
          .from('productos')
          .update(productData)
          .eq('id', editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('productos').insert(productData);
        if (error) throw error;
      }
      setEditingId(null);
      setForm({
        nombre: '',
        diseñador: '',
        rent: '',
        materiales: '',
        talle: '',
        detalles: '',
        imageUrl: '',
      });
      setImageFile(null);
      fetchProducts();
    } catch (err) {
      console.error('Error guardando producto:', err);
      alert('Error al guardar el producto');
    }
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from('productos').delete().eq('id', id);
      if (error) throw error;
      fetchProducts();
    } catch (err) {
      console.error('Error eliminando producto:', err);
      alert('Error al eliminar el producto');
    }
  };

  const handleEdit = (product) => {
    setForm({
      nombre: product.nombre || '',
      diseñador: product.diseñador || '',
      rent: product.rent ? product.rent.toString() : '',
      materiales: product.materiales || '',
      talle: product.talle || '',
      detalles: product.detalles || '',
      imageUrl: product.imageUrl || '',
    });
    setEditingId(product.id);
  };

  // --- Manejo Home ---

  // Manejo nuevo archivo seleccionado para Home
  const handleHomeImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + homeSavedImages.length > 2) {
      alert('Solo puedes seleccionar hasta 2 imágenes en total');
      return;
    }

    setHomeImages(files); // REEMPLAZO, no acumules más archivos en estado, mejor reemplazar
  };

  const removeSavedImage = (index) => {
    setHomeSavedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeNewImage = (index) => {
    setHomeImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleHomeSubmit = async (e) => {
    e.preventDefault();

    if (!homeTitle.trim()) {
      alert('Por favor ingresa un título para Home');
      return;
    }

    if (homeImages.length === 0 && homeSavedImages.length === 0) {
      alert('Por favor agrega al menos 1 imagen para Home');
      return;
    }

    try {
      const uploadedUrls = [];

      // Solo subir nuevas imágenes si hay
      for (const file of homeImages) {
        const url = await uploadImage(file, 'home');
        if (!url) throw new Error('Error subiendo imagen Home');
        uploadedUrls.push(url);
      }

      const finalImages = [...homeSavedImages, ...uploadedUrls].slice(0, 2);

      const updateData = {
        title: homeTitle,
        foto1: finalImages[0] || null,
        foto2: finalImages[1] || null,
      };

      if (homeRecord) {
        const { error } = await supabase
          .from('home')
          .update(updateData)
          .eq('id', editingHomeId);
        if (error) throw error;
        alert('Home actualizado correctamente');
      } else {
        const { error } = await supabase.from('home').insert([updateData]);
        if (error) throw error;
        alert('Home guardado correctamente');
      }

      // Limpiar nuevas imágenes y actualizar guardadas
      setHomeImages([]);
      setHomeSavedImages(finalImages);

      fetchHome();
    } catch (error) {
      console.error('Error guardando Home:', error);
      alert('Error al guardar Home: ' + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Home</h2>
      <form onSubmit={handleHomeSubmit} className={styles.form}>
        <label>
          Título
          <input
            type="text"
            value={homeTitle}
            onChange={(e) => setHomeTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Imágenes (máximo 2 en total)
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleHomeImageChange}
            disabled={homeSavedImages.length + homeImages.length >= 2}
          />
        </label>

        {/* Preview imágenes guardadas + nuevas */}
        <div className={styles.homeImagePreviewContainer}>
          {/* Fotos guardadas */}
          {homeSavedImages.map((url, idx) => (
            <div key={`saved-${idx}`} className={styles.homeImagePreview}>
              <img
                src={url}
                alt={`Guardada ${idx + 1}`}
                className={styles.homeImageThumbnail}
              />
              <button type="button" onClick={() => removeSavedImage(idx)}>
                X
              </button>
            </div>
          ))}

          {/* Fotos nuevas a subir */}
          {homeImages.map((file, idx) => (
            <div key={`new-${idx}`} className={styles.homeImagePreview}>
              <img
                src={URL.createObjectURL(file)}
                alt={`Nueva preview ${idx + 1}`}
                className={styles.homeImageThumbnail}
              />
              <button type="button" onClick={() => removeNewImage(idx)}>
                X
              </button>
            </div>
          ))}

          {/* Si no hay imágenes */}
          {homeSavedImages.length === 0 && homeImages.length === 0 && (
            <p>No hay imágenes seleccionadas</p>
          )}
        </div>

        <button type="submit">
          {homeRecord ? 'Actualizar Home' : 'Guardar Home'}
        </button>
      </form>

      <hr style={{ margin: '2rem 0' }} />

      <h2>Administrador de Productos</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Categoria
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nombre
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Diseñador
          <input
            type="text"
            name="diseñador"
            value={form.diseñador}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Precio de alquiler
          <input
            type="text"
            name="rent"
            value={form.rent}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </label>
        <label>
          Materiales
          <input
            type="text"
            name="materiales"
            value={form.materiales}
            onChange={handleChange}
          />
        </label>
        <label>
          Talle
          <input
            type="text"
            name="talle"
            value={form.talle}
            onChange={handleChange}
          />
        </label>
        <label>
          Detalles
          <input
            type="text"
            name="detalles"
            value={form.detalles}
            onChange={handleChange}
          />
        </label>
        <label>
          Imagen
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <button type="submit">{editingId ? 'Actualizar' : 'Agregar'}</button>
      </form>

      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.id} className={styles.item}>
            <div className={styles.productInfo}>
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.nombre}
                  className={styles.thumbnail}
                />
              )}
              <div>
                <strong>{product.nombre}</strong>
                <br />
                {product.diseñador} — ${product.rent}
                <br />
                Materiales: {product.materiales}
                <br />
                Talle: {product.talle}
                <br />
                Detalles: {product.detalles}
              </div>
            </div>
            <div className={styles.buttons}>
              <button type="button" onClick={() => handleEdit(product)}>
                Editar
              </button>
              <button type="button" onClick={() => handleDelete(product.id)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* <Faq/> */}
      <Faq2 />
    </div>
  );
}
