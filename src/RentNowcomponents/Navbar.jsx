import { FaGift, FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useState, useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext'; // ajustá la ruta según corresponda

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null); // referencia al contenedor del icono + input

  const [visible, setVisible] = useState(true);

    const { wishlist } = useCart();


  useEffect(() => {
    function handleClickOutside(event) {
      // Si el contenedor existe y el click fue fuera de él...
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    }

    if (showSearch) {
      // Solo cuando el input está visible se agrega el listener
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup para remover listener al desmontar o cambiar showSearch
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearch]);

  function ScrollTopLink({ to, children }) {
    return (
      <Link to={to} onClick={() => window.scrollTo(0, 0)}>
        {children}
      </Link>
    );
  }

  return (
    <>
      <nav className={styles.main}>
        <ul className={styles.ver1}>
          <li>
            <ScrollTopLink
              to="/"
              style={{
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
              }}
            >
              {' '}
              <img
                src="https://toiadekiev.com/wp-content/uploads/2025/03/Recurso-1.png"
                style={{
                  height: '2vh',
                  filter: 'brightness(0)',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                }}
                draggable="false"
                alt=""
              />
            </ScrollTopLink>
          </li>
          <li className={`${styles.ver1} ${showSearch ? styles.ver1bis : ''}`}>
                          <ScrollTopLink to="/how-it-works">How it Works</ScrollTopLink>
          </li>
          {/* <li className={`${styles.ver1} ${showSearch ? styles.ver1bis : ''}`}><Link to="/new-arrivals" >New Arrivals</Link></li> */}
          {/* <li className={`${styles.ver1} ${showSearch ? styles.ver1bis : ''}`}><Link to="/occasions" >Occasions</Link></li> */}
          {/* <li className={`${styles.ver1} ${showSearch ? styles.ver1bis : ''}`}><Link to="/clothing" >Clothing</Link></li> */}
          <li className={`${styles.ver1} ${showSearch ? styles.ver1bis : ''}`}>
            <ScrollTopLink to="/designers">Designers</ScrollTopLink>

          </li>
          {/* <li className={`${styles.ver1} ${showSearch ? styles.ver1bis : ''}`}><Link to="/buy" >Buy</Link></li> */}
          <li className={`${styles.ver1} ${showSearch ? styles.ver1bis : ''}`}>
                        <ScrollTopLink to="/content/one-time-rentals">Clearance</ScrollTopLink>

          </li>
          <li>
            <ScrollTopLink
              to="/gift-cards"
              className="hover:underline flex items-center gap-1"
            >
              <span role="img" aria-label="gift">
                🎁
              </span>{' '}
              Gift Cards
            </ScrollTopLink>
          </li>
          <div ref={searchRef} className={styles.searchWrapper}>
            <ul className="flex gap-2 items-center">
              <li
                onClick={() => setShowSearch(!showSearch)}
                style={{ listStyle: 'none' }}
              >
                <FaSearch className="cursor-pointer" />
              </li>
            </ul>
            <input
              type="text"
              placeholder='Try "floral dress"'
              className={`${styles.searchInput} ${
                showSearch ? styles.open : ''
              }`}
              autoFocus={showSearch}
            />
          </div>
        </ul>

        <ul className={styles.ver2}>
          <li>
            <ScrollTopLink to="/register">Sign in</ScrollTopLink>
          </li>
           <li style={{ position: 'relative' }}>
      <ScrollTopLink to="/wishlist">
        <FaHeart />
        {wishlist.length > 0 && (
          <span
            style={{
              position: 'absolute',
              top: 30,
              right: -15,
              background: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              lineHeight: 1,
            }}
          >
            {wishlist.length}
          </span>
        )}
      </ScrollTopLink>
    </li>
          <li>
            <ScrollTopLink to="/cart">
              <FaShoppingBag />
            </ScrollTopLink>
          </li>
          <li>
            <ScrollTopLink to="/subscription">
              <button className={styles.letGetIt}>
                BECOME A MEMBER
                <br />
                PLANS FROM $47
              </button>
            </ScrollTopLink>
          </li>
        </ul>
      </nav>

      {visible && (
        <div className={styles.banner}>
          <p>
            Get up to 50% off your first month with code:{' '}
            <strong>EARLYSUN</strong>.{' '}
            <a href="https://www.renttherunway.com/content-pages/TDK-promo">
              <span className={styles.underline}>Terms Apply.</span>
            </a>
          </p>
          <button
            className={styles.closeButton}
            onClick={() => setVisible(false)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
