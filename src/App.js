import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Author from "./pages/Author";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Forgot from "./pages/Forgot";
import HowItwork from "./pages/HowItwork";
import Login from "./pages/Login";
import PlaceYourOrder from "./pages/PlaceYourOrder";
import Prices from "./pages/Prices";
import Privacy from "./pages/Privacy";
import Register from "./pages/Register";
import Reviews from "./pages/Reviews";
import Sample from "./pages/Sample";
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import ViewCart from "./pages/ViewCart";
import ViewDetails from "./pages/ViewDetails";
import Success from "./pages/Success";
import Failed from "./pages/Failed";
import PurchaseSuccess from "./pages/PurchaseSuccess";
import OnlineManagement from "./pages/OnlineManagement";
import Ordersuccess from "./pages/Ordersuccess";
import Payplesuccess from "./pages/Payplesuccess";
// import WorkSampleroute from "./pages/routes/WorkSampleroute";
// import BlogRoute from "./pages/routes/BlogRoute";
import StripeSubscription from "./pages/StripeSubscription";
// import AuthorRoute from "./pages/routes/AuthorRoute";
import StripeGuestPaymentSuccess from "./pages/StripeGuestPaymentSuccess";
import GuestPayment from "./pages/GuestPayment";
import PendingPaymentStripeSuccess from "./pages/PendingPaymentStripeSuccess";
// import Join from "./pages/Join";
import TransactionHistory from "./pages/TransactionHistory";
import Dashboard from "./pages/Dashboard";
import ViewProfile from "./pages/ViewProfile";
import AccountSettingServices from "./pages/AccountSettingServices";
import AccountSettingSubscriptions from "./pages/AccountSettingSubscriptions";
import AccountSettingPaymentMethod from "./pages/AccountSettingPaymentMethod";

import OrderPaypalSuccess from "./pages/OrderPaypalSuccess";
import PendingPaymentPaypalSuccess from "./pages/PendingPaymentPaypalSuccess";
import PaypalGuestPaymentSuccess from "./pages/PaypalGuestPaymentSuccess";
import WalletPaymentSuccess from "./pages/WalletPaymentSuccess";
import OrderWithoutPayment from "./pages/OrderWithoutPayment";
import GhostwritingServices from "./GhostServicesPages/GhostwritingServices";
import BlogWritingServices from "./BlogServicesPages/BlogWritingServices";
import FreelanceWritingServices from "./FreelanceServicesPages/FreelanceWritingServices";
import ReviewWritingServices from "./ReviewServicesPages/ReviewWritingServices";
import PaypalSubscriptionSuccess from "./pages/PaypalSubscriptionSuccess";
import BlogWritingServicesTechnical from "./BlogServicesPages/BlogWritingServicesTechnical";
import BlogWritingServicesProfessional from "./BlogServicesPages/BlogWritingServicesProfessional";
import BlogWritingServicesCreative from "./BlogServicesPages/BlogWritingServicesCreative";
import BlogWritingServicesWhitelabel from "./BlogServicesPages/BlogWritingServicesWhitelabel";
import BlogWritingServicesRealState from "./BlogServicesPages/BlogWritingServicesRealState";
import BlogWritingServicesHealthFitness from "./BlogServicesPages/BlogWritingServicesHealthFitness";
import BlogWritingServicesFreelance from "./BlogServicesPages/BlogWritingServicesFreelance";
import BlogWritingServicesIntro from "./BlogServicesPages/BlogWritingServicesIntro";
import BlogWritingServicesShort from "./BlogServicesPages/BlogWritingServicesShort";
import BlogWritingServicesInformal from "./BlogServicesPages/BlogWritingServicesInformal";
import BlogWritingServicesFamous from "./BlogServicesPages/BlogWritingServicesFamous";
import BlogWritingServicesPlr from "./BlogServicesPages/BlogWritingServicesPlr";
import BlogWritingServicesViral from "./BlogServicesPages/BlogWritingServicesViral";
import BlogWritingServicesPersuasive from "./BlogServicesPages/BlogWritingServicesPersuasive";
import BlogWritingServicesTech from "./BlogServicesPages/BlogWritingServicesTech";
import BlogWritingServicesPersonal from "./BlogServicesPages/BlogWritingServicesPersonal";
import BlogWritingServicesInspirational from "./BlogServicesPages/BlogWritingServicesInspirational";
import BlogWritingServicesMarketing from "./BlogServicesPages/BlogWritingServicesMarketing";
import BlogWritingServicesBusiness from "./BlogServicesPages/BlogWritingServicesBusiness";
import BlogWritingServicesAffordable from "./BlogServicesPages/BlogWritingServicesAffordable";
import BlogWritingServicesDigitalMarketing from "./BlogServicesPages/BlogWritingServicesDigitalMarketing";
import BlogWritingServicesSocialMedia from "./BlogServicesPages/BlogWritingServicesSocialMedia";
import BlogWritingServicesSocialMediaInstagram from "./BlogServicesPages/BlogWritingServicesSocialMediaInstagram";
import BlogWritingServicesSocialMediaMedium from "./BlogServicesPages/BlogWritingServicesSocialMediaMedium";
import BlogWritingServicesSocialMediaTumbler from "./BlogServicesPages/BlogWritingServicesSocialMediaTumbler";
import BlogWritingServicesSocialMediaLinkedin from "./BlogServicesPages/BlogWritingServicesSocialMediaLinkedin";
import BlogWritingServicesSocialMediaQuora from "./BlogServicesPages/BlogWritingServicesSocialMediaQuora";
import BlogWritingServicesSocialMediaFacebook from "./BlogServicesPages/BlogWritingServicesSocialMediaFacebook";
import BlogWritingServicesSocialMediaTwitter from "./BlogServicesPages/BlogWritingServicesSocialMediaTwitter";
import BlogWritingServicesSocialMediaPinterest from "./BlogServicesPages/BlogWritingServicesSocialMediaPinterest";
import BlogWritingServicesWordPress from "./BlogServicesPages/BlogWritingServicesWordPress";
import BlogWritingServicesShopify from "./BlogServicesPages/BlogWritingServicesShopify";
import BlogWritingServicesPostComment from "./BlogServicesPages/BlogWritingServicesPostComment";
import BlogWritingServicesPostEditor from "./BlogServicesPages/BlogWritingServicesPostEditor";
import BlogWritingServicesNewYear from "./BlogServicesPages/BlogWritingServicesNewYear";
import BlogWritingservicesBirthday from "./BlogServicesPages/BlogWritingservicesBirthday";
import BlogWritingServicesQna from "./BlogServicesPages/BlogWritingServicesQna";
import BlogWritingServicesHoliday from "./BlogServicesPages/BlogWritingServicesHoliday";
import BlogWritingServicesGratitude from "./BlogServicesPages/BlogWritingServicesGratitude";
import BlogWritingServicesNotion from "./BlogServicesPages/BlogWritingServicesNotion";
import BlogWritingServicesGithub from "./BlogServicesPages/BlogWritingServicesGithub";
import FreelanceWritingServicesWhitePaper from "./FreelanceServicesPages/FreelanceWritingServicesWhitePaper";
import FreelanceWritingServicesGrant from "./FreelanceServicesPages/FreelanceWritingServicesGrant";
import FreelanceWritingServicesSports from "./FreelanceServicesPages/FreelanceWritingServicesSports";
import FreelanceWritingServicesFashion from "./FreelanceServicesPages/FreelanceWritingServicesFashion";
import FreelanceWritingServicesFinance from "./FreelanceServicesPages/FreelanceWritingServicesFinance";
import FreelanceWritingServicesLegal from "./FreelanceServicesPages/FreelanceWritingServicesLegal";
import FreelanceWritingServicesHealth from "./FreelanceServicesPages/FreelanceWritingServicesHealth";
import FreelanceWritingServicesMagazine from "./FreelanceServicesPages/FreelanceWritingServicesMagazine";
import FreelanceWritingServicesBusiness from "./FreelanceServicesPages/FreelanceWritingServicesBusiness";
import FreelanceWritingServicesNurse from "./FreelanceServicesPages/FreelanceWritingServicesNurse";
import GhostWritingServicesMedical from "./GhostServicesPages/GhostWritingServicesMedical";
import GhostWritingServicesFiction from "./GhostServicesPages/GhostWritingServicesFiction";
import GhostWritingServicesRomance from "./GhostServicesPages/GhostWritingServicesRomance";
import GhostWritingServicesBusiness from "./GhostServicesPages/GhostWritingServicesBusiness";
import GhostWritingServicesFantasy from "./GhostServicesPages/GhostWritingServicesFantasy";
import GhostWritingServicesTechnical from "./GhostServicesPages/GhostWritingServicesTechnical";
import GhostWritingServicesMemoir from "./GhostServicesPages/GhostWritingServicesMemoir";
import ProductDescriptionWriting from "./ProductDescriptionWritingPages/ProductDescriptionWriting";
import ProductDescriptionWritingTechnical from "./ProductDescriptionWritingPages/ProductDescriptionWritingTechnical";
import ProductDescriptionWritingFunny from "./ProductDescriptionWritingPages/ProductDescriptionWritingFunny";
import ProductDescriptionWritingEcommerce from "./ProductDescriptionWritingPages/ProductDescriptionWritingEcommerce";
import ReviewWritingServicesMovie from "./ReviewServicesPages/ReviewWritingServicesMovie";
import ReviewWritingServicesSimpleOnlinePharmacy from "./ReviewServicesPages/ReviewWritingServicesSimpleOnlinePharmacy";
import ReviewWritingServicesTwitter from "./ReviewServicesPages/ReviewWritingServicesTwitter";
import ReviewWritingServicesSitejabber from "./ReviewServicesPages/ReviewWritingServicesSitejabber";
import ReviewWritingServicesOtherWebsites from "./ReviewServicesPages/ReviewWritingServicesOtherWebsites";
import ReviewWritingServicesOnlineShop from "./ReviewServicesPages/ReviewWritingServicesOnlineShop";
import ReviewWritingServicesElectronicGadgetsShop from "./ReviewServicesPages/ReviewWritingServicesElectronicGadgetsShop";
import ReviewWritingServicesTrustpilot from "./ReviewServicesPages/ReviewWritingServicesTrustpilot";
import ReviewWritingServicesGoogleMyBusiness from "./ReviewServicesPages/ReviewWritingServicesGoogleMyBusiness";
import ReviewWritingServicesFacebook from "./ReviewServicesPages/ReviewWritingServicesFacebook";
import ReviewWritingServicesInstagram from "./ReviewServicesPages/ReviewWritingServicesInstagram";
import ReviewWritingServicesQna from "./ReviewServicesPages/ReviewWritingServicesQna";
import ReviewWritingServicesQnaQuora from "./ReviewServicesPages/ReviewWritingServicesQnaQuora";
import ReviewWritingServicesQnaReddit from "./ReviewServicesPages/ReviewWritingServicesQnaReddit";
import ReviewWritingServicesQnaOther from "./ReviewServicesPages/ReviewWritingServicesQnaOther";
import GhostWritingServicesSocialMedia from "./GhostServicesPages/GhostWritingServicesSocialMedia";
import GhostWritingServicesProfessional from "./GhostServicesPages/GhostWritingServicesProfessional";
import GhostWritingServicesAfricanAmerican from "./GhostServicesPages/GhostWritingServicesAfricanAmerican";
import GhostWritingServicesCheap from "./GhostServicesPages/GhostWritingServicesCheap";
import GhostWritingServicesBrilliant from "./GhostServicesPages/GhostWritingServicesBrilliant";
import GhostWritingServicesBlog from "./GhostServicesPages/GhostWritingServicesBlog";
import GhostWritingServicesGhostStory from "./GhostServicesPages/GhostWritingServicesGhostStory";
import GhostWritingServicesFreelance from "./GhostServicesPages/GhostWritingServicesFreelance";
import GhostWritingServicesBiography from "./GhostServicesPages/GhostWritingServicesBiography";
import GhostWritingServicesEbook from "./GhostServicesPages/GhostWritingServicesEbook";
import SaveCardRazorpayPaymentSuccess from "./pages/SaveCardRazorpayPaymentSuccess";
import CancelStripe from "./pages/CancelStripe";
import CancelOrderPaypal from "./pages/CancelOrderPaypal";
import SubscriptionPaypalfailed from "./pages/SubscriptionPaypalfailed";
import { HelmetProvider } from "react-helmet-async";
import RazorPaySuccess from "./pages/RazorPaySuccess";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/author" element={<Author />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/howitwork" element={<HowItwork />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeyourorder" element={<PlaceYourOrder />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/samples" element={<Sample />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/viewCart" element={<ViewCart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/author/:id" element={<ViewDetails />} />
        <Route path="/fail" element={<Failed />} />
        <Route path="/purchasesuccess" element={<PurchaseSuccess />} />
        <Route path="/razorpaysuccess" element={<RazorPaySuccess />} />
        <Route path="/blog/:id" element={<OnlineManagement />} />
        <Route path="/ordersuccess" element={<Ordersuccess />} />
        <Route path="/payplesuccess" element={<Payplesuccess />} />
        <Route path="/stripesubscription" element={<StripeSubscription />} />
        <Route path="/cancel" element={<CancelStripe />} />
        <Route path="/orderPaypalCancel" element={<CancelOrderPaypal />} />
        <Route path="/failed" element={<SubscriptionPaypalfailed />} />
        {/* <Route path="/BlogRoute" element={<BlogRoute />} />
        <Route path="/AuthorRoute" element={<AuthorRoute />} /> */}
        <Route
          path="/stripeguestpaymentSuccess"
          element={<StripeGuestPaymentSuccess />}
        />
        <Route path="/guestpayment" element={<GuestPayment />} />
        <Route
          path="/pendingpaymentstripesuccess"
          element={<PendingPaymentStripeSuccess />}
        />
        <Route path="/transactionhistory" element={<TransactionHistory />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/viewprofile" element={<ViewProfile />} />
        <Route
          path="/accountsettingservices"
          element={<AccountSettingServices />}
        />
        <Route
          path="/accountsettingsubscriptions"
          element={<AccountSettingSubscriptions />}
        />
        <Route
          path="/accountsettingpaymentmethod"
          element={<AccountSettingPaymentMethod />}
        />
        <Route path="/orderpaypalsuccess" element={<OrderPaypalSuccess />} />
        <Route
          path="/pendingpaymentpaypalsuccess"
          element={<PendingPaymentPaypalSuccess />}
        />
        <Route
          path="/paypalguestpaymentsuccess"
          element={<PaypalGuestPaymentSuccess />}
        />
        <Route
          path="/walletpaymentsuccess"
          element={<WalletPaymentSuccess />}
        />
        <Route path="/orderwithoutpayment" element={<OrderWithoutPayment />} />
        <Route
          path="/ghostwriting-services"
          element={<GhostwritingServices />}
        />
        <Route
          path="/blog-writing-services"
          element={<BlogWritingServices />}
        />
        <Route
          path="/freelance-writing-services"
          element={<FreelanceWritingServices />}
        />
        <Route
          path="/review-writing-services"
          element={<ReviewWritingServices />}
        />{" "}
        <Route
          path="/paypalsubscriptionsuccess"
          element={<PaypalSubscriptionSuccess />}
        />
        <Route
          path="blog-writing-services/technical"
          element={<BlogWritingServicesTechnical />}
        />
        <Route
          path="blog-writing-services/professional"
          element={<BlogWritingServicesProfessional />}
        />
        <Route
          path="blog-writing-services/creative"
          element={<BlogWritingServicesCreative />}
        />
        <Route
          path="blog-writing-services/white-label"
          element={<BlogWritingServicesWhitelabel />}
        />
        <Route
          path="blog-writing-services/real-estate"
          element={<BlogWritingServicesRealState />}
        />
        <Route
          path="blog-writing-services/health-fitness"
          element={<BlogWritingServicesHealthFitness />}
        />
        <Route
          path="blog-writing-services/freelance"
          element={<BlogWritingServicesFreelance />}
        />
        <Route
          path="blog-writing-services/intro"
          element={<BlogWritingServicesIntro />}
        />
        <Route
          path="blog-writing-services/short"
          element={<BlogWritingServicesShort />}
        />
        <Route
          path="blog-writing-services/informal"
          element={<BlogWritingServicesInformal />}
        />
        <Route
          path="blog-writing-services/famous"
          element={<BlogWritingServicesFamous />}
        />
        <Route
          path="blog-writing-services/plr"
          element={<BlogWritingServicesPlr />}
        />
        <Route
          path="blog-writing-services/viral"
          element={<BlogWritingServicesViral />}
        />
        <Route
          path="blog-writing-services/persuasive"
          element={<BlogWritingServicesPersuasive />}
        />
        <Route
          path="blog-writing-services/tech"
          element={<BlogWritingServicesTech />}
        />
        <Route
          path="blog-writing-services/personal"
          element={<BlogWritingServicesPersonal />}
        />
        <Route
          path="blog-writing-services/inspirational"
          element={<BlogWritingServicesInspirational />}
        />
        <Route
          path="blog-writing-services/marketing"
          element={<BlogWritingServicesMarketing />}
        />
        <Route
          path="blog-writing-services/business"
          element={<BlogWritingServicesBusiness />}
        />
        <Route
          path="blog-writing-services/affordable"
          element={<BlogWritingServicesAffordable />}
        />
        <Route
          path="blog-writing-services/digital-marketing"
          element={<BlogWritingServicesDigitalMarketing />}
        />
        <Route
          path="blog-writing-services/social-media"
          element={<BlogWritingServicesSocialMedia />}
        />
        <Route
          path="blog-writing-services/social-media/instagram"
          element={<BlogWritingServicesSocialMediaInstagram />}
        />
        <Route
          path="blog-writing-services/social-media/media"
          element={<BlogWritingServicesSocialMediaMedium />}
        />
        <Route
          path="blog-writing-services/social-media/tumblr"
          element={<BlogWritingServicesSocialMediaTumbler />}
        />
        <Route
          path="blog-writing-services/social-media/linkedin"
          element={<BlogWritingServicesSocialMediaLinkedin />}
        />
        <Route
          path="blog-writing-services/social-media/quora"
          element={<BlogWritingServicesSocialMediaQuora />}
        />
        <Route
          path="blog-writing-services/social-media/facebook"
          element={<BlogWritingServicesSocialMediaFacebook />}
        />
        <Route
          path="blog-writing-services/social-media/twitter"
          element={<BlogWritingServicesSocialMediaTwitter />}
        />
        <Route
          path="blog-writing-services/social-media/pinterest"
          element={<BlogWritingServicesSocialMediaPinterest />}
        />
        <Route
          path="blog-writing-services/wordpress"
          element={<BlogWritingServicesWordPress />}
        />{" "}
        <Route
          path="blog-writing-services/shopify"
          element={<BlogWritingServicesShopify />}
        />
        <Route
          path="blog-writing-services/post-comment"
          element={<BlogWritingServicesPostComment />}
        />
        <Route
          path="blog-writing-services/post-editor"
          element={<BlogWritingServicesPostEditor />}
        />{" "}
        <Route
          path="blog-writing-services/new-year"
          element={<BlogWritingServicesNewYear />}
        />
        <Route
          path="blog-writing-services/birthday"
          element={<BlogWritingservicesBirthday />}
        />
        <Route
          path="blog-writing-services/qna"
          element={<BlogWritingServicesQna />}
        />{" "}
        <Route
          path="blog-writing-services/holiday"
          element={<BlogWritingServicesHoliday />}
        />
        <Route
          path="blog-writing-services/gratitude"
          element={<BlogWritingServicesGratitude />}
        />
        <Route
          path="blog-writing-services/notion"
          element={<BlogWritingServicesNotion />}
        />
        <Route
          path="blog-writing-services/github"
          element={<BlogWritingServicesGithub />}
        />
        <Route
          path="freelance-writing-services/white-paper"
          element={<FreelanceWritingServicesWhitePaper />}
        />
        <Route
          path="freelance-writing-services/grant"
          element={<FreelanceWritingServicesGrant />}
        />
        <Route
          path="freelance-writing-services/sports"
          element={<FreelanceWritingServicesSports />}
        />
        <Route
          path="freelance-writing-services/fashion"
          element={<FreelanceWritingServicesFashion />}
        />{" "}
        <Route
          path="freelance-writing-services/finance"
          element={<FreelanceWritingServicesFinance />}
        />
        <Route
          path="freelance-writing-services/legal"
          element={<FreelanceWritingServicesLegal />}
        />
        <Route
          path="freelance-writing-services/health"
          element={<FreelanceWritingServicesHealth />}
        />
        <Route
          path="freelance-writing-services/magazine"
          element={<FreelanceWritingServicesMagazine />}
        />
        <Route
          path="freelance-writing-services/business"
          element={<FreelanceWritingServicesBusiness />}
        />
        <Route
          path="freelance-writing-services/nurse"
          element={<FreelanceWritingServicesNurse />}
        />
        <Route
          path="ghostwriting-services/medical"
          element={<GhostWritingServicesMedical />}
        />
        <Route
          path="ghostwriting-services/fiction"
          element={<GhostWritingServicesFiction />}
        />
        <Route
          path="ghostwriting-services/romance"
          element={<GhostWritingServicesRomance />}
        />
        <Route
          path="ghostwriting-services/business"
          element={<GhostWritingServicesBusiness />}
        />
        <Route
          path="ghostwriting-services/fantasy"
          element={<GhostWritingServicesFantasy />}
        />
        <Route
          path="ghostwriting-services/technical"
          element={<GhostWritingServicesTechnical />}
        />
        <Route
          path="ghostwriting-services/memoir"
          element={<GhostWritingServicesMemoir />}
        />
        <Route
          path="ghostwriting-services/social-media"
          element={<GhostWritingServicesSocialMedia />}
        />
        <Route
          path="ghostwriting-services/professional"
          element={<GhostWritingServicesProfessional />}
        />
        <Route
          path="ghostwriting-services/african-american"
          element={<GhostWritingServicesAfricanAmerican />}
        />
        <Route
          path="ghostwriting-services/cheap"
          element={<GhostWritingServicesCheap />}
        />
        <Route
          path="ghostwriting-services/brilliant"
          element={<GhostWritingServicesBrilliant />}
        />
        <Route
          path="ghostwriting-services/blog"
          element={<GhostWritingServicesBlog />}
        />
        <Route
          path="ghostwriting-services/ghost-story"
          element={<GhostWritingServicesGhostStory />}
        />
        <Route
          path="ghostwriting-services/freelance"
          element={<GhostWritingServicesFreelance />}
        />
        <Route
          path="ghostwriting-services/biography"
          element={<GhostWritingServicesBiography />}
        />
        <Route
          path="ghostwriting-services/ebook"
          element={<GhostWritingServicesEbook />}
        />
        <Route
          path="product-description-writing"
          element={<ProductDescriptionWriting />}
        />
        <Route
          path="product-description-writing/technical"
          element={<ProductDescriptionWritingTechnical />}
        />
        <Route
          path="product-description-writing/funny"
          element={<ProductDescriptionWritingFunny />}
        />
        <Route
          path="product-description-writing/ecommerce"
          element={<ProductDescriptionWritingEcommerce />}
        />
        <Route
          path="review-writing-services/movie"
          element={<ReviewWritingServicesMovie />}
        />
        <Route
          path="review-writing-services/simple-online-pharmacy"
          element={<ReviewWritingServicesSimpleOnlinePharmacy />}
        />
        <Route
          path="review-writing-services/twitter"
          element={<ReviewWritingServicesTwitter />}
        />
        <Route
          path="review-writing-services/sitejabber"
          element={<ReviewWritingServicesSitejabber />}
        />
        <Route
          path="review-writing-services/other-websites"
          element={<ReviewWritingServicesOtherWebsites />}
        />
        <Route
          path="review-writing-services/online-shop"
          element={<ReviewWritingServicesOnlineShop />}
        />
        <Route
          path="review-writing-services/electronic-gadgets-shop"
          element={<ReviewWritingServicesElectronicGadgetsShop />}
        />
        <Route
          path="review-writing-services/trustpilot"
          element={<ReviewWritingServicesTrustpilot />}
        />
        <Route
          path="review-writing-services/google-my-business"
          element={<ReviewWritingServicesGoogleMyBusiness />}
        />
        <Route
          path="review-writing-services/facebook"
          element={<ReviewWritingServicesFacebook />}
        />
        <Route
          path="review-writing-services/instagram"
          element={<ReviewWritingServicesInstagram />}
        />
        <Route
          path="review-writing-services/qna"
          element={<ReviewWritingServicesQna />}
        />
        <Route
          path="review-writing-services/qna/quora"
          element={<ReviewWritingServicesQnaQuora />}
        />
        <Route
          path="review-writing-services/qna/reddit"
          element={<ReviewWritingServicesQnaReddit />}
        />
        <Route
          path="review-writing-services/qna/other"
          element={<ReviewWritingServicesQnaOther />}
        />
        <Route
          path="savecardrazorpaypaymentsuccess"
          element={<SaveCardRazorpayPaymentSuccess />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
