import BigBrands from "./components/BigBrands/BigBrands";
import MainBanner from "./components/Details/MainBanner";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import KeyPoints from "./components/KeyPoints/KeyPoints";
import BrandDetails from "./components/MakeYourBrand/BrandDetails";
import NavBar from "./components/NavBar/NavBar";
import Testimonial from "./components/Testimonials/Testimonial";
import TrustedPartners from "./components/TrustedPartners/TrustedPartners";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <TrustedPartners />
      <MainBanner/>
      <BigBrands/>
      <Features/>
      <KeyPoints/>
      <Testimonial/>
      <BrandDetails/>
      <Form/>
    </div>
  );
}

export default App;

// Roboto Medium = font-family: 'Roboto', sans-serif;
// Red Hat Display Semibold: font-family: 'Red Hat Display', sans-serif;
// Red Hat Mono Regular: font-family: 'Red Hat Mono', monospace;
