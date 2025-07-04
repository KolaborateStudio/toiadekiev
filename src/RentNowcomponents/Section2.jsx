import styles from './Section2.module.css';

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
];

export default function Section2() {
   return (
          <>
            <section className={styles.hero}>
              <div className={styles.empty}></div>

              <div className={styles.text}>
                <p className={styles.text2} style={{fontSize:'36px'}}>Sky's the limit</p>
                <p>Toia de Kiev is your closet <br />for every day destination.</p>
                <a href='https://www.renttherunway.com/shop/new_arrivals_app/products'><button>Rent New Arrivals</button></a>
              </div>

              <div className={styles.imageGrid}>
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Image ${i + 1}`}
                    draggable={false}
                    className={styles.image}
                  />
                ))}
              </div>
            </section>
               <div className={styles.icons}>
                              <div>
                                 <img
                                 src="WearOnRepeat.webp"
                                 style={{ height: '5vh', width: '5vh' }}
                                 alt="Icono secundario"
                              />
                              <p
                              style={{
                                 fontSize: '14px',
                                 fontWeight: 300,
                                 maxWidth: '500px',
                                 marginTop: '0.5rem',
                                 lineHeight: '22px'
                              }}
                              >
                              If items do not fit or feel right in your first 60 days, you will get free items in your next shipment.
                              </p>
                              </div>
                              <div>
                                 <img
                                 src="DeliveryasPNGwAdjRatio.webp"
                                 style={{ height: '5vh', width: '6vh' }}
                                 alt="Icono secundario"
                                 />
                                 <p>Delivered for free in 1–3 business days. Schedule a pickup at home or return to Andreani.</p>
                              </div>
                              <div>
                                 <img
                                 src="Dollar_forBuyingLP_011325.webp"
                                 style={{ height: '5vh', width: '6vh' }}
                                 alt="Icono secundario"
                                 />
                              <p>Plans are flexible! Rent more items when you like. Keep items for as long as you want.</p>
                           
                              </div>
                           </div>
          </>
    )
}