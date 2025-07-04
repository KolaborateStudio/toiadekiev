import { useLocation } from "react-router-dom";
import { useState } from "react";
import styles from './ProductDetail.module.css';
import Modal from "./Modal"; // asegúrate que este path sea correcto
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import RatingReviews from './RatingReviews';
import NeverMissAStyleBeat from './NeverMissAStyleBeat';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { addToWishlist } = useCart();
  const { state: product } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [liked, setLiked] = useState(false);

  if (!product) return <div>Producto no encontrado</div>;

const handleAddToWishlist = () => {
  if (!liked) {
    addToWishlist({
      ...product,
      size: selectedSize || null, // Si aplica, podés pasar size
    });
  }
  setLiked(!liked); // Alterna el estado de like
};


  return (
    <div className={styles.container}>
      <div className={styles.columnsWrapper}>
        {/* Columna izquierda */}
        <div className={styles.leftColumn}>
          <div className={styles.topImages}>
            <img
              src={`/${product.url}`}
              alt={product.name}
              className={styles.mainImage}
              draggable={false}
            />
            <img
              src="/china1.jpg"
              alt="China 1"
              className={styles.mainImage}
              draggable={false}
            />
          </div>

          <div className={styles.bottomImages}>
            <img src="/china2.jpg" alt="China 2" className={styles.smallImage} />
            <img src="/china3.jpg" alt="China 3" className={styles.smallImage} />
            <img src="/china4.webp" alt="China 4" className={styles.smallImage} />
          </div>
        </div>

        {/* Columna derecha sticky + scroll interno */}
        <div className={styles.rightColumn}>
          <div className={styles.productInfo}>
            <h1 className={styles.productName}>{product.name}</h1>
            <h2 className={styles.designerName}>{product.designer}</h2>
            <span className={styles.originalRetail}>
              {product.retail} original retail
              <span className={styles.tooltipWrapper}>
                <svg
                  className={styles.tooltipIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM6 12A6 6 0 106 0a6 6 0 000 12zm2.386-7.09A2.387 2.387 0 016.75 7.174v.189a.75.75 0 11-1.5 0v-.819a.75.75 0 01.75-.75.886.886 0 10-.886-.886.75.75 0 01-1.5 0A2.382 2.382 0 016 2.523a2.386 2.386 0 012.386 2.386zM6 9.272a.545.545 0 100-1.091.545.545 0 000 1.09z"
                  />
                </svg>
                <span className={styles.tooltipText}>
                  This number represents the “Original Retail” or “Comparable Value” price. Items may be in the rental rotation for multiple seasons after these prices are set. For more info on these prices, see our{' '}
                  <NavLink to="/faq">
                    <span className={styles.FAQ}>FAQ</span>
                  </NavLink>.
                </span>
              </span>

            </span>
            <div className={styles.OriginalRetail}></div>
            <form>
              <select
                name="size"
                className={styles.select}
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">All sizes unavailable</option>
                {[0, 2, 4, 6, 8, 10, 12, 14, 16].map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
              <button
                type="button"
                className={styles.button}
                disabled={!selectedSize}
                onClick={() => setIsModalOpen(true)}
              >
                Add to Shipment
              </button>
            </form>

            {/* Promesa */}
            <div className={styles.infoBox}>
              <div className={styles.infoHeader}>
                {/* <img src="https://cdn.TDKcdn.com/assets/imgs/WearOnRepeat.png" alt="Icono secundario" /> */}
                <img src="/WearOnRepeat.webp" alt="Icono secundario" />
                <h3>Our Customer Promise</h3>
              </div>
              <p>
                If items do not fit right in your first 60 days, you will get free items in your next shipment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className={styles.detailHeading}>Product Details</h3>
      <div className={styles.productDetailsContainer}>
        <div className={styles.detailBox}>
          <p className={styles.detailText}>
            The Solid &amp; Striped Delta Dress is sunshine-ready with its smocked bodice, adjustable straps, and exposed back for an easy, flattering fit. Pair it with sleek flats and a woven bucket bag for effortless daytime polish.
          </p>
        </div>

        <div className={styles.detailBox}>
          <h3 className={styles.secondSection}>Materials and Measurements</h3>
          <p className={styles.detailText}>
            Black (95% Polyester, 5% Spandex) Casual Dress. Square neck. Sleeveless. Shoulder to hemline length: 55". Imported.
          </p>
        </div>

        <div className={styles.detailBox}>
          <h3 className={styles.thirdSection}>Size and Fit</h3>
          <p className={styles.detailText}>Sized: XS - L</p>
          <p className={styles.detailText2}>The model is wearing a size small.</p>
          <p className={styles.detailText3}>Share</p>
          <div className={styles.shareContainer}>
            <a
              // href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareButton}
              aria-label="Share on Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3 .9 0 1.8 0 2 .1v2.4h-1.3c-1 0-1.3.6-1.3 1.2v1.3h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12Z" />
              </svg>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Pinterest"
              className={styles.shareButton2}
            >
              <svg viewBox="0 0 24 24" className={styles.pinterestIcon}>
                <path d="M12.04 2C6.92 2 3 5.62 3 10.26c0 3.1 1.84 5.77 4.68 6.77-.07-.57-.13-1.45.03-2.08.14-.61.9-3.89.9-3.89s-.23-.46-.23-1.14c0-1.07.62-1.87 1.39-1.87.65 0 .97.49.97 1.08 0 .66-.42 1.65-.63 2.57-.18.75.37 1.35 1.11 1.35 1.34 0 2.37-1.41 2.37-3.44 0-1.8-1.29-3.06-3.13-3.06-2.13 0-3.38 1.6-3.38 3.26 0 .65.25 1.35.56 1.73.06.07.07.14.05.21-.06.24-.19.75-.21.85-.03.14-.11.17-.26.1-.97-.44-1.57-1.84-1.57-2.96 0-2.41 1.75-4.62 5.05-4.62 2.65 0 4.7 1.89 4.7 4.42 0 2.63-1.66 4.75-3.96 4.75-.77 0-1.5-.4-1.75-.86l-.48 1.83c-.17.66-.64 1.48-.95 1.99.72.22 1.48.34 2.26.34 5.12 0 9.04-3.63 9.04-8.14C21 5.62 17.16 2 12.04 2z" />
              </svg>
            </a>


          </div>

        </div>
      </div>

      <h3 className={styles.detailHeading}>Rent the Look</h3>
      <div className={styles.rentTheLook} key={product.id}>
        <div className={styles.rentTheLookCards}>
          <div className={styles.rentTheLookCard1}>
            <img
              src={`/china2.jpg`}
              alt={product.name}
              className={styles.mainImage}
              draggable={false}
            />
          </div>
          <div className={styles.rentTheLookCard2}>
            <div className={styles.imageWrapper}>
              <img
                src="/china3.jpg"
                alt={product.name}
                className={`${styles.mainImage} ${styles.defaultImage}`}
                draggable={false}
              />
              <img
                src="/china2.jpg"
                alt={product.name}
                className={`${styles.mainImage} ${styles.hoverImage}`}
                draggable={false}
              />
              <button
                className={styles.heartBtn}
                aria-label="Add to Hearts"
                onClick={handleAddToWishlist}
              >
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${styles.heartIcon} ${liked ? styles.liked : ''}`}
                >
                  <title>Heart</title>
                  <path d="M10.0473476,15.9286957 C9.99170475,15.9286957 9.93606189,15.9113043 9.88856189,15.8765217 L9.16452618,15.3450435 C4.90377618,12.2208696 1.22388332,9.52243478 1.00945475,5.83895652 C0.932776177,4.50817391 1.32363332,3.3346087 2.14063332,2.44626087 C2.96102618,1.55373913 4.20416903,1 5.38624046,1 C7.27538332,1 8.94399046,1.95026087 10.1213119,3.68591304 C10.4164905,3.27686957 10.6682405,2.95478261 10.8975976,2.69321739 C11.8930619,1.55373913 13.1395976,1 14.7077762,1 C15.8898476,1 17.133669,1.55373913 17.9533833,2.44626087 C18.7703833,3.33530435 19.1612405,4.50817391 19.0838833,5.83895652 C18.8701333,9.52243478 15.190919,12.2208696 10.9294905,15.3450435 L10.2054547,15.8765217 C10.1579547,15.9113043 10.1029905,15.9286957 10.0473476,15.9286957" />
                </svg>
              </button>
            </div>
            <div className={styles.info}>
              <Link to={product.href} className={styles.link}>
                <h2 className={styles.designerInfoAccessory}>{product.designer} Accessory</h2>
                <span className={styles.designerInfoAccessory2}>{product.name}</span>
              </Link>
            </div>
          </div>


        </div>
      </div>

      <div className={styles.vh}></div>
      <h3 className={styles.detailHeading}>More Black Casual Dresses</h3>

      <h3 className={styles.detailHeading}>More Date Night Tops like this</h3>

      <h3 className={styles.detailHeading}>More from Hunter Bell</h3>

      <h3 className={styles.detailHeading}>More From This Aesthetic</h3>

      <h3 className={styles.detailHeading}>More Strapless Tops</h3>

      <h3 className={styles.detailHeading}>New Arrivals: Tops</h3>

      <RatingReviews />
      <NeverMissAStyleBeat />

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
