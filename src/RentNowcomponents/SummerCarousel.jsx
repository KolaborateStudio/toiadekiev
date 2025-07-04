import Slider from "react-slick";
import styles from './SummerCarousel.module.css';
import { NextArrow, PrevArrow } from './CustomArrows';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function formatForUrl(text) {
  return text
    .toLowerCase()               // minusculas
    .replace(/\s+/g, '-')        // espacios por guiones
    .replace(/[^\w-]/g, '')      // elimina caracteres no alfanuméricos ni guion
}

const baseUrl = "https://themarketingtailor.com/shop/";
// const baseUrl = "http://127.0.0.1/shop/";
// const baseUrl = "http://localhost/shop/";

const products = [
  {
    id: "FRIO179",
    designer: "FARM Rio",
    name: "Greek Garden Off-white Blouse",
    rent: "$40",
    membership: "$0",
    retail: "$210",
    url: 'china.jpg'
  },
  {
    id: "STAUD001",
    designer: "Staud",
    name: "Blue Rocco Mini Dress",
    rent: "$40",
    membership: "$0",
    retail: "$325",
    url: 'fierce.jpg'
  },
  {
    id: "STAUD002",
    designer: "Staud",
    name: "Joan Linen Dress",
    rent: "$50",
    membership: "$0",
    retail: "$395",
    url: 'judy.jpg'
  },
  {
    id: "TOCCIN001",
    designer: "TOCCIN X TDK",
    name: "Short Sleeve Button Front Denim Dress",
    rent: "$65",
    membership: "$0",
    retail: "$495",
    url: 'LUC_7106-FINAL-scaled.jpg'
  },
  {
    id: "STAUD001",
    designer: "Staud",
    name: "Blue Rocco Mini Dress",
    rent: "$40",
    membership: "$0",
    retail: "$325",
    url: 'lima.jpg'
  },
  {
    id: "FRIO179",
    designer: "FARM Rio",
    name: "Greek Garden Off-white Blouse",
    rent: "$40",
    membership: "$0",
    retail: "$210",
    url: 'gypsy.jpg'
  },
  {
    id: "STAUD002",
    designer: "Staud",
    name: "Joan Linen Dress",
    rent: "$50",
    membership: "$0",
    retail: "$395",
    url: 'neptuno.jpeg'
  },
  {
    id: "TOCCIN001",
    designer: "TOCCIN X TDK",
    name: "Short Sleeve Button Front Denim Dress",
    rent: "$65",
    membership: "$0",
    retail: "$495",
    url: 'dragon.jpg'
  },
  {
    id: "STAUD001",
    designer: "Staud",
    name: "Blue Rocco Mini Dress",
    rent: "$40",
    membership: "$0",
    retail: "$325",
    url: 'bangkok.jpg'
  },
  {
    id: "STAUD002",
    designer: "Staud",
    name: "Joan Linen Dress",
    rent: "$50",
    membership: "$0",
    retail: "$395",
    url: 'alfonsina.jpg'
  },
  {
    id: "FRIO179",
    designer: "FARM Rio",
    name: "Greek Garden Off-white Blouse",
    rent: "$40",
    membership: "$0",
    retail: "$210",
    url: 'olivia.jpg'
  },
  {
    id: "STAUD002",
    designer: "Staud",
    name: "Joan Linen Dress",
    rent: "$50",
    membership: "$0",
    retail: "$395",
    url: 'arrayanes.jpg'
  },
  {
    id: "STAUD001",
    designer: "Staud",
    name: "Blue Rocco Mini Dress",
    rent: "$40",
    membership: "$0",
    retail: "$325",
    url: 'begur.jpg'
  },
  {
    id: "STAUD002",
    designer: "Staud",
    name: "Joan Linen Dress",
    rent: "$50",
    membership: "$0",
    retail: "$395",
    url: 'carola.jpg'
  },
  {
    id: "STAUD002",
    designer: "Staud",
    name: "Joan Linen Dress",
    rent: "$50",
    membership: "$0",
    retail: "$395",
    url: 'cameron.jpg'
  },
];

// Generamos href dinámicamente
const productsUpdated = products.map(product => ({
  ...product,
  href: `${baseUrl}${formatForUrl(product.designer)}/${formatForUrl(product.name)}`
}));


const viewAllSlide = {
  id: "view-all",
  isViewAll: true,
  href: "/",
  name: "View All",
};

const allSlides = [...productsUpdated, viewAllSlide];

const ProductDetail = ({ slide }) => {
  if (!slide) return null; // no renderizar si no hay slide

  return (
    <div className={styles.card} style={{ cursor: 'pointer',marginLeft:'0.3vh' }}>
      <Link
          className={styles.noUndersline}
          to={slide.href}
          state={slide} // 💥 Acá pasás el producto completo
        >
        {slide.url && (
          <img src={slide.url} alt={slide.name} className={styles.productImage} />
        )}
        <div className={styles.productCardInfo}>
          <h2 className={styles.text}>{slide.designer}<br/>
            <span  className={styles.textName}>{slide.name}</span>
          </h2>
          <div className={styles.text}>
            <div >
              <span className={styles.priceGroup}>
                <span>Rent from</span>
                <span>{slide.rent}</span>
              </span>
            </div>
            <div className={styles.priceGroup}>
              <span>With membership</span>
              <span>{slide.membership}</span>
            </div>
            <div className={styles.originalRetail}>
              <span>Original Retail</span>
              <span>{slide.retail}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};


export default function SummerCarousel() {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    function updateSlides() {
      const width = window.innerWidth;
      if (width < 600) setSlidesToShow(1);
      else if (width < 1024) setSlidesToShow(2);
      else setSlidesToShow(5);
    }
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: slidesToShow,
    arrows: true,
    nextArrow: (<NextArrow isLast={currentSlide + slidesToShow >= allSlides.length}/>),
    prevArrow: <PrevArrow isFirst={currentSlide === 0} />,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <section className={styles.carouselWrapper}>
      <p className={styles.title}>For a sunny state of mind</p>
      <Slider {...settings}>
      {allSlides.map((item, idx) => {

        if (!item) return null; // evitar undefined

        if (item.isViewAll) {
          return (
            <div key={item.id}>
              <a href={item.href} className={styles.viewAllCard}>
                <div className={styles.viewAllText}>{item.name}</div>
              </a>
            </div>
          );
        }
        return <ProductDetail key={item.id + "-" + idx} slide={item} />;
      })}

      </Slider>
    </section>
  );
}
