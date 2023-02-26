import MainBanner from "./components/Details/MainBanner";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import TrustedPartners from "./components/TrustedPartners/TrustedPartners";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <TrustedPartners />
      <MainBanner/>
    </div>
  );
}

export default App;

// Roboto Medium = font-family: 'Roboto', sans-serif;
// Red Hat Display Semibold: font-family: 'Red Hat Display', sans-serif;
// Red Hat Mono Regular: font-family: 'Red Hat Mono', monospace;
