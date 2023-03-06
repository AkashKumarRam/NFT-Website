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
import CaseStudies from "./components/Pages/CaseStudies";

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
