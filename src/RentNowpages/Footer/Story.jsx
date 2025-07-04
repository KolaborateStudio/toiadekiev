import styles from './Story.module.css';

const timeline = [
  {
    date: "NOVIEMBRE 2008",
    title: "El momento 'Aha'",
    description: "Durante el receso de Acción de Gracias, la hermana menor de Jenn, Becky, mostró un vestido de diseñador de $2000 que compró para una boda. ¡Este gasto la estaba llevando a endeudarse con la tarjeta de crédito! Jenn se preguntó: ¿no sería más inteligente alquilar ropa de diseñador en lugar de comprarla? Luego volvió a Harvard y compartió la idea con su amiga Jenny.",
    imageAlt: "Vestido rojo con cinturón dorado brillante",
  },
  {
    date: "DICIEMBRE 2008",
    title: "La reunión que lo cambió todo",
    description: "Jenn y Jenny se preguntaban si la industria de la moda aceptaría su idea. Escribieron un correo a Diane von Furstenberg, ¡y aceptó reunirse! Aunque escéptica al principio, les ofreció consejos y les dio un amuleto de la suerte.",
    imageAlt: "Cuaderno en una reunión",
  },
  {
    date: "ABRIL 2009",
    title: "Probando el concepto",
    description: "Montaron una tienda emergente en el campus de Harvard donde las estudiantes podían probarse y alquilar vestidos. La reacción fue tan positiva que se dieron cuenta de que el alquiler podía empoderar a las mujeres todos los días.",
    imageAlt: "Dos vestidos colgados",
  },
  {
    date: "NOVIEMBRE 2009",
    title: "Nace Toia de Kiev",
    description: "En pocos meses, Jenn, Jenny y su pequeño equipo trabajaron intensamente para lanzar el sitio de Toia de Kiev a nivel nacional. El sitio se lanzó oficialmente el 10 de noviembre de 2009.",
    imageAlt: "La oficina original de Toia de Kiev",
  },
  {
    date: "MAYO 2010",
    title: "Accesorios disponibles",
    description: "Collares, aros, carteras de diseñador... Todo lo necesario para completar tu look ahora estaba disponible en Toia de Kiev.",
    imageAlt: "Mock-up de portada de The New York Times",
  },
  {
    date: "SEPTIEMBRE 2013",
    title: "Lanzamos categoría plus size",
    description: "Como parte de nuestra misión de democratizar la moda de diseñador, lanzamos una línea para talles del 14 al 22+.",
    imageAlt: "Mock-up de portada de The New York Times",
  },
  {
    date: "OCTUBRE 2014",
    title: "Primera tienda física",
    description: "Luego de probar 'shop in shops' en Nueva York y Las Vegas, abrimos nuestra primera tienda en el edificio Flatiron, NYC.",
    imageAlt: "Mock-up de portada de The New York Times",
  },
  {
    date: "MARZO 2016",
    title: "Lanzamiento de suscripciones mensuales",
    description: "Introdujimos las membresías: una suscripción de alquiler de ropa que revolucionó la manera de experimentar la moda.",
    imageAlt: "Mock-up de portada de The New York Times",
  },
];

export default function Story() {
  return (
    <section className={styles.storyContainer}>
      <h2 className={styles.title}>Nuestra Historia</h2>
      {timeline.map((event, index) => (
        <div key={index} className={styles.event}>
          <div className={styles.eventDate}>{event.date}</div>
          <h3 className={styles.eventTitle}>{event.title}</h3>
          <p className={styles.eventDescription}>{event.description}</p>
          <div className={styles.imageAlt}>{event.imageAlt}</div>
        </div>
      ))}
    </section>
  );
}
