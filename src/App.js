import BigBrands from "./components/BigBrands/BigBrands";
import MainBanner from "./components/Details/MainBanner";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import KeyPoints from "./components/KeyPoints/KeyPoints";
import NavBar from "./components/NavBar/NavBar";
import TrustedPartners from "./components/TrustedPartners/TrustedPartners";

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
    </div>
  );
}

export default App;

// Roboto Medium = font-family: 'Roboto', sans-serif;
// Red Hat Display Semibold: font-family: 'Red Hat Display', sans-serif;
// Red Hat Mono Regular: font-family: 'Red Hat Mono', monospace;
