import styles from './Footer.module.css';
import { Link } from "react-router-dom";

export default function Footer() {

  function ScrollTopLink({ to, children }) {
  return (
    <Link to={to} onClick={() => window.scrollTo(0, 0)}>
      {children}
    </Link>
  );
}


  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div data-test-id="link-section-0">
            <p className={styles.fontEyebrow}>THE BASICS</p>
            <ul>
              <ScrollTopLink to="/how-it-works"><li>How it Works</li></ScrollTopLink>
              <ScrollTopLink to="/subscription"><li>Clothing Subscription</li></ScrollTopLink>
              <ScrollTopLink to="/content/one-time-rentals"><li>Rent Without a Subscription</li></ScrollTopLink>
              <ScrollTopLink to="/buying-on-TDK"><li>Buying on TDK</li></ScrollTopLink>
              <ScrollTopLink to="/finding-your-fit"><li>Finding Your Fit</li></ScrollTopLink>
              <ScrollTopLink to="/returning-your-rentals"><li>Returning Your Rentals</li></ScrollTopLink>
              <ScrollTopLink to="/returning-your-purchases"><li>Returning Your Purchases</li></ScrollTopLink>
              <ScrollTopLink to="our-cleaning-process"><li>Our Cleaning Process</li></ScrollTopLink>
              {/* <li><a href="content/7reasons@action_type=footer_link.html">Testimonials</a></li> */}
              {/* <li><a href="https://www.TDKshift.com/">The Shift</a></li> */}
            </ul>
          </div>

          <div data-test-id="link-section-1">
            <p className={styles.fontEyebrow}>Company</p>
            <ul>
              {/* <li><a href="about-us@action_type=footer_link.html">Vision</a></li>
              <li><a href="about-us/story@action_type=footer_link.html">Story</a></li>
              <li><a href="about-us/community@action_type=footer_link.html">Community</a></li>
              <li><a href="impact@action_type=footer_link.html">Sustainability</a></li>
              <li><a href="https://investors.toiadekiev.com/">Investor Relations</a></li> */}
             <ScrollTopLink to="aboutus"><li>Vision</li></ScrollTopLink> 
             <ScrollTopLink to="aboutus/story"><li>Story</li></ScrollTopLink> 
              <ScrollTopLink to="press"><li>Press</li></ScrollTopLink> 
              {/* <li><a href="about-us/careers@action_type=footer_link.html">Careers</a></li>
              <li><a href="content/partnerships@action_type=footer_link.html">Partnerships</a></li> */}
              <ScrollTopLink to="gift-cards"> <li>Gift Cards by CashStar</li></ScrollTopLink>
            </ul>
          </div>

          <div data-test-id="link-section-2">
            <p className={styles.fontEyebrow}>Get Help</p>
            <ul>
              <ScrollTopLink to="/faq">FAQs</ScrollTopLink>
              {/* <li><a href="help/contact@_=1719328953125.html">Contact Us</a></li>
              <li><a href="content-pages/TDK-promo.html">Current Promotions</a></li> */}
            </ul>
          </div>

          <div data-test-id="link-section-3">
            <p className={styles.fontEyebrow}>Trending</p>
            <ul>
              {/* <li><a href="c/dresses.1.html">Dress Rental</a></li>
              <li><a href="c/wedding-guest-dresses.html">Wedding Guest Dresses</a></li>
              <li><a href="c/cocktail-dresses.html">Cocktail Dresses</a></li>
              <li><a href="c/party-dresses.html">Birthday Dress</a></li> */}
              <ScrollTopLink to="maternity-dresses"><li>Maternity Dresses</li></ScrollTopLink>
              {/* <li><a href="c/gowns.html">Gowns</a></li> */}
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>Follow us on social</p>
          <div className="social-icons">
  <a href="http://www.instagram.com/toiadekiev" aria-label="instagram" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="34" fill="#333" fillRule="evenodd" viewBox="0 0 31 34">
      <path d="M21.322 17.072a5.476 5.476 0 01-5.477 5.476 5.477 5.477 0 01-5.48-5.476c0-.39.044-.772.123-1.14H4.066v8.714a4.02 4.02 0 004.022 4.022H23.24c2.22 0 4.023-1.8 4.023-4.022v-8.713H21.2c.077.367.122.748.122 1.14m1.918-11.6H8.088a4.024 4.024 0 00-4.022 4.024v4.29h7.42c1-1.323 2.57-2.194 4.36-2.194 1.786 0 3.358.87 4.358 2.195h7.06v-4.29a4.025 4.025 0 00-4.024-4.025m1.51 4.728c0 .58-.465 1.04-1.04 1.04h-1.347c-.575 0-1.04-.46-1.04-1.04V8.86c0-.575.465-1.04 1.04-1.04h1.346c.57 0 1.04.465 1.04 1.04v1.34"/>
    </svg>
  </a>
  <a href="https://www.tiktok.com/@toiadekiev" aria-label="tiktok" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" fill="#333" viewBox="0 0 22 30">
      <path d="M10.692 2.42c1.118-.02 2.227-.01 3.337-.02.068 1.567.537 3.164 1.493 4.27.956 1.137 2.304 1.659 3.618 1.833v4.127c-1.229-.051-2.466-.359-3.584-.994-.486-.266-.938-.604-1.382-.952-.009 2.99.008 5.98-.017 8.96-.068 1.434-.461 2.857-1.152 4.035-1.118 1.966-3.055 3.246-5.043 3.287-1.22.082-2.44-.318-3.482-1.055-1.724-1.219-2.935-3.45-3.115-5.847a22.788 22.788 0 01-.008-1.526c.153-1.945.956-3.81 2.201-5.079 1.417-1.474 3.397-2.18 5.248-1.761.017 1.515-.034 3.03-.034 4.546-.845-.327-1.834-.235-2.577.38-.537.42-.947 1.064-1.16 1.791-.18.523-.128 1.096-.12 1.649.205 1.68 1.553 3.092 2.987 2.939.956-.01 1.869-.676 2.364-1.649.162-.338.341-.686.35-1.085.085-1.833.05-3.656.06-5.489.008-4.127-.01-8.243.016-12.36z"/>
    </svg>
  </a>
  <a href="https://www.facebook.com/toiadekiev" aria-label="facebook" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="34" fill="#333" fillRule="evenodd" viewBox="0 0 19 34">
      <path d="M14.49 6.014v3.84s-1.577-.008-2.216-.008c-1.252 0-1.166.488-1.166 2.032v1.144h3.38l-.61 3.994h-2.77v10.728H6.414V17.016H4.1v-3.994h2.314V9.81s-.04-1.78 1.417-2.89c1.32-.998 2.87-.918 2.87-.918l3.8.012z"/>
    </svg>
  </a>
  <a href="http://www.pinterest.com/toiadekiev/" aria-label="pinterest" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="34" fill="#333" fillRule="evenodd" viewBox="0 0 26 34">
      <path d="M11.188 21.338c-.55 2.412-1.092 4.74-2.27 6.576-.36.562-.72 1.27-1.338 1.572-.912-4.687.993-8.63 1.745-12.57-.96-1.957-.364-5.27 1.692-5.647 2.972-.55 2.19 3.04 1.685 4.71-.278.91-.777 1.79-.7 2.79.164 2.11 2.826 2.25 4.19 1.16 1.956-1.56 2.52-4.57 2.33-7.04-.29-3.77-4.555-5.64-8.322-4.14-1.94.78-3.702 2.56-3.96 5.18-.132 1.38.157 2.48.702 3.26.08.12.364.33.405.64.085.63-.293 1.32-.64 1.8-1.93-.56-2.925-2.29-3.085-4.48-.362-4.99 3.732-8.79 8.554-9.14 5.147-.38 9.225 2.59 9.605 6.93.29 3.21-.86 6.46-2.67 8.2-1.36 1.31-4.26 2.59-6.63 1.34-.52-.28-.75-.62-1.28-1.17"/>
    </svg>
  </a>
  <a href="https://twitter.com/toiadekiev" aria-label="twitter" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="34" fill="#333" fillRule="evenodd" viewBox="0 0 30 34">
      <path d="M24.828 10.593A4.95 4.95 0 0027 7.86c-.956.57-2.012.98-3.136 1.2a4.94 4.94 0 00-3.607-1.56 4.94 4.94 0 00-4.81 6.07c-4.105-.2-7.742-2.17-10.182-5.16A4.928 4.928 0 004.6 10.9c0 1.72.87 3.23 2.19 4.11-.81-.02-1.57-.25-2.24-.61v.06c0 2.4 1.7 4.39 3.96 4.85-.418.12-.85.18-1.3.18-.32 0-.63-.03-.93-.08a4.946 4.946 0 004.612 3.43 9.878 9.878 0 01-6.134 2.12 9.22 9.22 0 01-1.18-.07 13.91 13.91 0 007.572 2.22c9.084 0 14.05-7.52 14.05-14.05 0-.21-.005-.43-.014-.64.965-.69 1.8-1.56 2.464-2.55-.886.397-1.84.66-2.837.78z"/>
    </svg>
  </a>
          </div>

          <p>©2025 Toia de Kiev. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            {/* <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/accessibility-statement">Accessibility Statement</a>
            <a href="/your-privacy-choices">Your Privacy Choices</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
