import Slider from "react-slick";
import styles from './RentByCategory.module.css';
import { NextArrow, PrevArrow } from './CustomArrows';
import { useState, useEffect } from 'react';

const products = [
  { id: "CAT001", designer: "Dresses", href: "#", url: "dresses.webp" },
  { id: "CAT002", designer: "Tops", href: "#", url: "tops.webp" },
  { id: "CAT003", designer: "Gowns", href: "#", url: "gowns.webp" },
  { id: "CAT004", designer: "Shorts", href: "#", url: "shorts.webp" },
  { id: "CAT005", designer: "Skirts", href: "#", url: "skirts.webp" },
  { id: "CAT006", designer: "Knits", href: "#", url: "knits.webp" },
  { id: "CAT007", designer: "Jeans", href: "#", url: "jeans.webp" },
  { id: "CAT008", designer: "Jackets", href: "#", url: "jackets.webp" },
  { id: "CAT009", designer: "Pants", href: "#", url: "pants.webp" },
  { id: "CAT010", designer: "Blazer", href: "#", url: "blazers.webp" },
  { id: "CAT011", designer: "Coats", href: "#", url: "coats.webp" },
  { id: "CAT012", designer: "Jumpsuits + rompers", href: "#", url: "jumpsuitsRompers.webp" },
  { id: "CAT013", designer: "Maternity", href: "#", url: "maternity.webp" }
];


export default function RentByCategory() {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  function updateSlides() {
    const width = window.innerWidth;
    if (width < 600) {
      setSlidesToShow(1);
    } else if (width < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(6);
    }
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
    nextArrow: <NextArrow isLast={currentSlide >= products.length - slidesToShow} />,
    prevArrow: <PrevArrow isFirst={currentSlide === 0} />,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <section className={styles.carouselWrapper}>
      <h2 className={styles.title}>Rent by category</h2>
      <Slider {...settings}>
        {products.map((slide, idx) => {
          // Calcular si este slide es el último visible del grupo actual para quitar margen
          const isLastVisible = idx === currentSlide + slidesToShow - 1;
          return (
            <div
  key={slide.id + "-" + idx}
  className={styles.slide}
  style={{
    marginRight: isLastVisible ? 0 : '1vh'  // margen derecho inline 1vh, excepto último slide visible
  }}
>
  <a href={slide.href} className={styles.card}>
    <img src={slide.url} alt={slide.designer} className={styles.image} />
    <div className={styles.designer}>{slide.designer}</div>
  </a>
</div>

          );
        })}
      </Slider>
    </section>
  );
}
