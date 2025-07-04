import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Importa el hook
import styles from './Wishlist.module.css'; // Crea un CSS propio para este componente si lo deseas.
import NeverMissAStyleBeat from '../RentNowcomponents/NeverMissAStyleBeat';


export default function Wishlist() {
  const { wishlist } = useCart();
  
  return (
    <>
      <div className={`container py-4`}>
        <h1 className="mb-4">Wishlist</h1>
        {/* Verifica si el carrito está vacío */}
        {wishlist.length === 0 ? (
          <p>No hay productos en tu wishlist. <Link to="/">Ver productos</Link></p>
        ) : (
          <div className={styles.checkoutContainer}>
            <div className={styles.cartItems}>
              {wishlist.map((item, index) => (
                <div key={index} className={styles.cartItem}>
                  <img src={item.url} alt={item.titulo} className={styles.cartItemImage} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <NeverMissAStyleBeat/>
    </>
  );
}


