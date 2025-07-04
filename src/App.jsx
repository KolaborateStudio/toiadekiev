import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './RentNowcomponents/Navbar';
import Home from './RentNowcomponents/Home';
import Subscription from './RentNowpages/Subscription/Subscription.jsx';
import Footer from "./RentNowcomponents/Footer";
import Products from './RentNowcomponents/Products';
import Faq from './RentNowpages/Faq/Faq.jsx';
import ProductDetail from './RentNowcomponents/ProductDetail.jsx';
import Checkout from './RentNowcomponents/Checkout';
import Wishlist from './RentNowpages/Wishlist';
import AboutUs from './RentNowpages/AboutUs/AboutUs';
import Story from './RentNowpages/Footer/Story';

// Estas son páginas extra sugeridas (podés crear los componentes después)
import HowItWorks from './RentNowpages/Subscription/HowItWorks.jsx';
import Press from './RentNowpages/Footer/Press';
// import NewArrivals from './RentNowpages/NewArrivals';
// import Occasions from './RentNowpages/Occasions';
// import Clothing from './RentNowpages/Clothing';
import Designers from './RentNowpages/Designers';
// import Buy from './RentNowpages/Buy';
// import FinalSale from './RentNowpages/FinalSale';
import GiftCards from './RentNowpages/Footer/GiftCards';
import ProductManager from './RentNowpages/ProductManager/ProductManager';

// THE BASICS
// import ClothingSubscription from './RentNowpages/ClothingSubscription';
import RentWithoutSubscription from './RentNowpages/Footer/RentWithoutSubscription.jsx';
import BuyingOnTDK from './RentNowpages/Footer/BuyingOnTDK.jsx';
import FindingYourFit from './RentNowpages/Footer/FindingYourFit';
import ReturningRentals from './RentNowpages/Footer/ReturningRentals.jsx';
import ReturningPurchases from './RentNowpages/Footer/ReturnPurchases.jsx';
import CleaningProcess from './RentNowpages/Footer/CleaningProcess';
// import Testimonials from './RentNowpages/Testimonials';
// import TheShift from './RentNowpages/TheShift';

// COMPANY
// import Vision from './RentNowpages/Vision';
// import Story from './RentNowpages/Story';
// import Community from './RentNowpages/Community';
// import Sustainability from './RentNowpages/Sustainability';
// import InvestorRelations from './RentNowpages/InvestorRelations';
// import Press from './RentNowpages/Press';
// import Careers from './RentNowpages/Careers';
// import Partnerships from './RentNowpages/Partnerships';

// HELP
// import ContactUs from './RentNowpages/ContactUs';
// import CurrentPromotions from './RentNowpages/CurrentPromotions';

// TRENDING
// import DressRental from './RentNowpages/DressRental';
// import WeddingGuestDresses from './RentNowpages/WeddingGuestDresses';
// import CocktailDresses from './RentNowpages/CocktailDresses';
// import BirthdayDress from './RentNowpages/BirthdayDress';
import MaternityDresses from './RentNowpages/Footer/MaternityDresses';
// import Gowns from './RentNowpages/Gowns';
import CartProvider from './context/CartContext';
import Register from './RentNowcomponents/Register';
import Terms from './RentNowcomponents/Terms';

function App() {
  // const location = useLocation();

  // const isSubscriptionPage = location.pathname === '/subscription';

  return (
    <>
      <CartProvider>

        <Navbar />

        {/* <Products/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/shop/:designer/:product" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product-manager" element={<ProductManager />} />

          <Route path="/how-it-works" element={<HowItWorks />} />
          {/* <Route path="/new-arrivals" element={<NewArrivals />} /> */}
          {/* <Route path="/occasions" element={<Occasions />} /> */}
          {/* <Route path="/clothing" element={<Clothing />} /> */}
          <Route path="/designers" element={<Designers />} />
          {/* <Route path="/buy" element={<Buy />} /> */}
          {/* <Route path="/final-sale" element={<FinalSale />} /> */}
          {/* <Route path="/gift-cards" element={<GiftCards />} /> */}

          {/* The Basics */}
          <Route path="/content/one-time-rentals" element={<RentWithoutSubscription />} />
          <Route path="/buying-on-tdk" element={<BuyingOnTDK />} />
          <Route path="/finding-your-fit" element={<FindingYourFit />} />
          <Route path="/returning-your-rentals" element={<ReturningRentals />} />
          <Route path="/returning-your-purchases" element={<ReturningPurchases />} />
          <Route path="/our-cleaning-process" element={<CleaningProcess />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terminos-y-condiciones" element={<Terms />} />
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          {/* <Route path="/the-shift" element={<TheShift />} /> */}

          {/* Company */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/aboutus/story" element={<Story />} />
          {/* <Route path="/vision" element={<Vision />} /> */}
          {/* <Route path="/story" element={<Story />} /> */}
          {/* <Route path="/community" element={<Community />} /> */}
          {/* <Route path="/sustainability" element={<Sustainability />} /> */}
          {/* <Route path="/investor-relations" element={<InvestorRelations />} /> */}
          <Route path="/press" element={<Press />} />
          {/* <Route path="/careers" element={<Careers />} /> */}
          {/* <Route path="/partnerships" element={<Partnerships />} /> */}
          <Route path="/gift-cards" element={<GiftCards />} />

          {/* Get Help */}
          {/* <Route path="/contact-us" element={<ContactUs />} /> */}
          {/* <Route path="/current-promotions" element={<CurrentPromotions />} /> */}

          {/* Trending */}
          {/* <Route path="/dress-rental" element={<DressRental />} /> */}
          {/* <Route path="/wedding-guest-dresses" element={<WeddingGuestDresses />} /> */}
          {/* <Route path="/cocktail-dresses" element={<CocktailDresses />} /> */}
          {/* <Route path="/birthday-dress" element={<BirthdayDress />} /> */}
          <Route path="/maternity-dresses" element={<MaternityDresses />} />
          {/* <Route path="/gowns" element={<Gowns />} /> */}
        </Routes>

        <Footer />

      </CartProvider>
    </>
  );
}

export default App;
