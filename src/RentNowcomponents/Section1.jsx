import styles from './Section1.module.css';
import { useNavigate } from 'react-router-dom';
import GetHomeData from '../Supabase/GetHomeData'; // ajustá ruta

export default function Home() {
  const navigate = useNavigate();
  const { homeData } = GetHomeData();

 

  return (
    <>
      <section className={styles.introFeatures}>
        <div className={styles.feature}>
          <div className={styles.imageBox}>
            {homeData?.foto1 ? (
              <img src={homeData.foto1} alt="Foto Home 1" />
            ) : (
              <img src="portada.jpg" alt="Icono de ejemplo" />
            )}
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.imageBox}>
            <p className={styles.overlayText}>
              {homeData?.title || 'A new collection from Agua Bendita, only for TDK.'}
            </p>
            <button
              className={styles.ctaButton}
              onClick={() => navigate('/subscription')}
            >
              Rent Now
            </button>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.imageBox}>
            {homeData?.foto2 ? (
              <img src={homeData.foto2} alt="Foto Home 2" />
            ) : (
              <img src="portada2.jpg" alt="Icono de ejemplo" />
            )}
          </div>
        </div>

        <div className={styles.icons}>
          <div>
            <img
              src="WearOnRepeat.webp"
              style={{ height: '5vh', width: '5vh' }}
              alt="Icono secundario"
            />
            <p className={styles.pUnderIcon}>
              If items do not fit or feel right in your first 60 days, you will get free items in your next shipment.
            </p>
          </div>
          <div>
            <img
              src="DeliveryasPNGwAdjRatio.webp"
              style={{ height: '5vh', width: '6vh' }}
              alt="Icono secundario"
            />
            <p className={styles.pUnderIcon}>
              Delivered for free in 1–3 business days. Schedule a pickup at home or return to Andreani77.
            </p>
          </div>
          <div>
            <img
              src="Dollar_forBuyingLP_011325.webp"
              style={{ height: '5vh', width: '5vh' }}
              alt="Icono secundario"
            />
            <p className={styles.pUnderIcon}>
              Plans are flexible! Rent more items when you like. Keep items for as long as you want.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
