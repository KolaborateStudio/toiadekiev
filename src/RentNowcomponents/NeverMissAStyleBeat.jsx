import styles from './NeverMissAStyleBeat.module.css';

export default function NeverMissAStyleBeat() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Para que no recargue la página al enviar el formulario

    console.log('Form submitted');
  };
  function ScrollTopLink({ to, children }) {
    return (
      <Link to={to} onClick={() => window.scrollTo(0, 0)}>
        {children}
      </Link>
    );
  }

  return (
    <div className={styles.newsletterContainer}>
      <div className={styles.lefti}>
        <p className={styles.newsletterTitle}>Never miss a style beat</p>
        <p className={styles.newsletterDescription}>
          Sign up for emails to receive exclusive offers, trend reports, and
          styling tips.
        </p>
        <p className={styles.newsletterDisclaimer}>
          *By entering your email address and clicking submit, you agree to
          receive marketing emails from toia de kiev, and acknowledge our{' '}
          <span
            className={styles.underlineHover}
            onClick={() => document.getElementById('terms-link')?.click()}
            style={{ cursor: 'pointer' }}
          >
            Terms of Service
          </span>
          .
          <a
            href="/terminos-y-condiciones"
            id="terms-link"
            className={styles.link}
            style={{ display: 'none' }} // si no querés que se vea
          ></a>
        </p>
      </div>
      <div>
        <form className={styles.newsletterForm} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className={styles.newsletterInput}
            required
            aria-label="Email address"
          />
          <button
            type="submit"
            className={styles.newsletterButton}
            aria-label="Submit email"
          >
            →
          </button>
        </form>
      </div>
    </div>
  );
}
