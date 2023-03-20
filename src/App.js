// import BigBrands from "./components/BigBrands/BigBrands";
// import { useEffect, useState } from "react";
// import MainBanner from "./components/Details/MainBanner";
// import Features from "./components/Features/Features";
// import Header from "./components/Header/Header";
// import KeyPoints from "./components/KeyPoints/KeyPoints";
// import BrandDetails from "./components/MakeYourBrand/BrandDetails";
// import NavBar from "./components/NavBar/NavBar";
// import Testimonial from "./components/Testimonials/Testimonial";
// import TrustedPartners from "./components/TrustedPartners/TrustedPartners";
// import Form from "./components/Form/Form";
// import Footer from "./components/Footer/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home";
import AccountSetup from "./components/Pages/AccountSetup/AccountSetup";
import AccountSetupStep2 from "./components/Pages/AccountSetup/AccountSetupStep2";
import AccountSetupStep3 from "./components/Pages/AccountSetup/AccountSetupStep3";
import PendingVerification from "./components/Pages/AccountSetup/PendingVerification";
import WorkEmail from "./components/Pages/AccountSetup/WorkEmail";
import AdminDashBoard from "./components/Pages/Admin Dashboard/AdminDashBoard";
import Articles from "./components/Pages/Articles";
import CaseStudies from "./components/Pages/CaseStudies";
import ForgotPassword from "./components/Pages/ForgotPassword";
import Login from "./components/Pages/Login";
import Pricing from "./components/Pages/Pricing";
import ResetPassword from "./components/Pages/ResetPassword";
import SignUp from "./components/Pages/SignUp";
import Collection from "./components/Pages/Admin Dashboard/Collection";
import ArtWork from "./components/Pages/Admin Dashboard/Artwork";
import Integration from "./components/Pages/Admin Dashboard/Integration";
import Settings from "./components/Pages/Admin Dashboard/Settings";
import Targeting from "./components/Pages/Admin Dashboard/Targeting";
import RequestBeta from "./components/Pages/RequestBeta";
import PepsiArticle from "./components/Pages/Articles/PepsiArticle";
import AdidasArticle from "./components/Pages/Articles/AdidasArticle";
import NikeArticle from "./components/Pages/Articles/NikeArticle";
import OdysseyArticle from "./components/Pages/Articles/OdysseyArticle";
import StreetArtArticle from "./components/Pages/Articles/StreetArtArticle";

function App() {
  // const [isLargeScreen, setIsLargeScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsLargeScreen(window.innerWidth >= "640px"); // Change breakpoint here
  //   };

  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // const navigate = useNavigate();


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/casestudies" element={<CaseStudies/>} />
        <Route path="/casestudydetail-cococola" element={<Articles/>} />
        <Route path="/casestudydetail-pepsi" element={<PepsiArticle/>} />
        <Route path="/casestudydetail-adidas" element={<AdidasArticle/>} />
        <Route path="/casestudydetail-nike" element={<NikeArticle/>} />
        <Route path="/casestudydetail-starbucks" element={<OdysseyArticle/>} />
        <Route path="/casestudydetail-streetart" element={<StreetArtArticle/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/accountsetup-step-1" element={<AccountSetup/>} />
        <Route path="/accountsetup-step-2" element={<AccountSetupStep2/>} />
        <Route path="/accountsetup-step-3" element={<AccountSetupStep3/>} />
        <Route path="/workemail-verification" element={<WorkEmail/>} />
        <Route path="/pending-verification" element={<PendingVerification/>} />
        <Route path="/forgetpassword" element={<ForgotPassword/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/admin-dashboard" element={<AdminDashBoard/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/artwork" element={<ArtWork/>} />
        <Route path="/integration" element={<Integration/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/targeting" element={<Targeting/>} />
        <Route path="/requestbeta" element={<RequestBeta/>} />
        </Routes>
      </BrowserRouter>
      {/* <NavBar />
      <Header />
      <TrustedPartners />
      {isLargeScreen ? <MainBanner /> : <BigBrands />}
      {isLargeScreen ? <BigBrands /> : <MainBanner />}
      <Features/>
      <KeyPoints/>
      <Testimonial/>
      <BrandDetails/>
      <Form/>
      <Footer/> */}
    </div>
  );
}

export default App;

// Roboto Medium = font-family: 'Roboto', sans-serif;
// Red Hat Display Semibold: font-family: 'Red Hat Display', sans-serif;
// Red Hat Mono Regular: font-family: 'Red Hat Mono', monospace;
