import React from 'react';
import styles from './Register.module.css';
import { FaGoogle, FaApple } from 'react-icons/fa'; // importar íconos

function Register() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sign Up to Get Started</h2>
      
      <form className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          required
        />
        <p className={styles.terms}>
          By registering, I accept the{' '}
          <a href="/terminos-y-condiciones" className={styles.link}>Terms of Service</a>
        </p>
        <button type="submit" className={styles.button}>Explore</button>
      </form>

      <div className={styles.divider}>OR</div>

<div className={styles.socialButtons}>
 <button className={styles.social}>
  <span className={styles.googleLogo}>
    <svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" className={styles.googleIcon}>
      <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.5-34.1-4.3-50.3H272v95.3h146.9c-6.4 34.3-25.7 63.4-54.8 83.1v68h88.7c51.8-47.7 80.7-117.9 80.7-196.1z" />
      <path fill="#34A853" d="M272 544.3c73.8 0 135.6-24.5 180.8-66.5l-88.7-68c-24.6 16.5-56.2 26.2-92.1 26.2-70.8 0-130.7-47.8-152.1-112.1H26.1v70.5c45.6 90.9 139.6 149.9 245.9 149.9z" />
      <path fill="#FBBC05" d="M119.9 323.9c-10.6-31.4-10.6-65.5 0-96.9V156.5H26.1c-34.7 68.9-34.7 150.3 0 219.2l93.8-70.5z" />
      <path fill="#EA4335" d="M272 107.6c39.9 0 75.8 13.7 104.1 40.7l78.1-78.1C407.6 24.5 345.8 0 272 0 165.7 0 71.7 59 26.1 149.9l93.8 70.5C141.3 155.4 201.2 107.6 272 107.6z" />
    </svg>
  </span>
  Continue with Google
</button>

  <button className={styles.social}>
    <FaApple className={styles.icon} />
    Continue with Apple
  </button>
</div>


      <p className={styles.login}>
        Already have an account? <a href="/login" className={styles.link}>Sign in.</a>
      </p>
    </div>
  );
}

export default Register;
