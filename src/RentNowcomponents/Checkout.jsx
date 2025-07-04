import styles from './Checkout.module.css';
import { useState } from 'react';

export default function Checkout() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [savePaymentMethod, setSavePaymentMethod] = useState(false);
  const [signUpTexts, setSignUpTexts] = useState(false);

  return (
    <section className={styles.checkoutContainer}>
      <div className={styles.leftColumn}>
<button className={styles.returnButton}>Return to Bag</button>
        <h1 className={styles.title}>Secure Checkout</h1>

        <div className={styles.contactSection}>
          <h2>Contact</h2>
          <p>
            Have an account? <a href="#">Log In</a>
          </p>

          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <button className={styles.saveButton}>Save</button>

          <p className={styles.subText}>
            Sign up for exclusive offers, styling tips, and fashion musings. Unsubscribe at any time. See our
            <a href="#"> Privacy Policy</a> for details.
          </p>
        </div>

        <div className={styles.shippingSection}>
          <h2>Ship to</h2>

          <label>Mobile Number</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <p className={styles.subText}>
            Your mobile number is used to send transactional text messages about your order.
          </p>
        </div>

        <div className={styles.paymentSection}>
          <h2>Payment</h2>
          <p>Secure payment</p>

          <label>
            <input
              type="checkbox"
              checked={savePaymentMethod}
              onChange={(e) => setSavePaymentMethod(e.target.checked)}
            />
            Save as default payment method
          </label>

          <p><a href="#">Have a gift card?</a></p>
        </div>

        <div className={styles.billingSection}>
          <h2>Billing Address</h2>

          <label>
            <input
              type="radio"
              checked={billingSameAsShipping}
              onChange={() => setBillingSameAsShipping(true)}
            />
            Billing address is the same as shipping address
          </label>

          <label>
            <input
              type="radio"
              checked={!billingSameAsShipping}
              onChange={() => setBillingSameAsShipping(false)}
            />
            Use a different address
          </label>
        </div>

        <div className={styles.textSignAndreaniection}>
          <h2>Stay in touch</h2>
          <label>
            <input
              type="checkbox"
              checked={signUpTexts}
              onChange={() => setSignUpTexts(!signUpTexts)}
            />
            Sign up for texts
          </label>
          <p className={styles.subText}>
            By signing up for TDK concierge, you agree to receive recurring automated and personalized marketing and text messages from toia de kiev. Consent is not a condition of any purchase. Message frequency varies. Msg & data rates may apply. <a href="#">View Terms & Privacy</a>.
          </p>
        </div>

        <button className={styles.placeOrderButton}>Place Order</button>
        <p className={styles.placeOrderDisclaimer}>
          By clicking place order, you authorize TDK to charge your payment method on file each month at the above rate or the undiscounted rate in effect. Your subscription will renew automatically until you cancel. To change, pause, or cancel your subscription, visit your Membership Settings. You also accept our <a href="#">Terms of Service</a> and acknowledge our <a href="#">Privacy Policy</a>. <a href="#">Accessibility Statement</a>
        </p>
      </div>

      <div className={styles.rightColumn}>
        <h3>Your Bag</h3>
        <p><strong>Membership</strong></p>
        <p>10 items/month</p>
        <p>2 shipments, 5 items at a time</p>
        <p>Free shipping, rental coverage, and dry cleaning</p>
        <p>Pause, cancel, or switch your plan at anytime</p>
        <p><strong>$144.00</strong></p>

        <p className={styles.promo}>Get your 1st month of 10 items/month for $72 with code: <strong>EARLYSUN</strong>. Terms Apply.</p>

        <label>Promo Code</label>
        <input type="text" placeholder="Enter code" />
        <button className={styles.saveButton}>Apply</button>

        <div className={styles.priceSummary}>
          <p><strong>Subtotal</strong> $144.00</p>
          <p><strong>Tax</strong> $14.04</p>
          <p><strong>Total</strong> $158.04</p>
        </div>
      </div>
    </section>
  );
}
