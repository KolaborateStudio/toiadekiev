import Slider from "react-slick";
import styles from './OneSubscription.module.css';
import { NextArrow, PrevArrow } from './CustomArrows';
import { useState, useEffect } from 'react';

const products = [
  {
    id: "BRAND001",
    designer: "Maria Cher",
    href: "#",
    url: "mariaCher.webp"
  },
  {
    id: "BRAND002",
    designer: "Jazmin Chebar",
    href: "#",
    url: "jazminChebar.jpeg"
  },
  {
    id: "BRAND003",
    designer: "Etiqueta Negra",
    href: "#",
    url: "etiquetaNegra.jpg"
  },
  {
    id: "BRAND004",
    designer: "Rapsodia",
    href: "#",
    url: "Rapsodia.webp"
  },
  {
    id: "BRAND005",
    designer: "Espacio Obligado",
    href: "#",
    url: "espacioObligado.webp"
  },
  {
    id: "BRAND006",
    designer: "Mishka",
    href: "#",
    url: "mishka.webp"
  },
  {
    id: "BRAND007",
    designer: "Pato Pato",
    href: "#",
    url: "patoPato.jpg"
  },
  {
    id: "BRAND007",
    designer: "Tanya Taylor",
    href: "#",
    url: "tanya.webp"
  },
  {
    id: "BRAND007",
    designer: "Sea Parker",
    href: "#",
    url: "sea.webp"
  }
];

export default function OneSubscription() {
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
      <h2 className={styles.title}>One subscription, all your favorite brands</h2>
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
