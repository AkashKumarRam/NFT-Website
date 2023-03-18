import React from 'react';
import BigBrands from "../BigBrands/BigBrands.jsx";
import { useEffect, useState } from "react";
import MainBanner from "../Details/MainBanner";
import Features from "../Features/Features";
import Header from "../Header/Header";
import KeyPoints from "../KeyPoints/KeyPoints";
import BrandDetails from "../MakeYourBrand/BrandDetails";
import NavBar from "../NavBar/NavBar";
import Testimonial from "../Testimonials/Testimonial";
import TrustedPartners from "../TrustedPartners/TrustedPartners";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

const Home = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= "640px"); // Change breakpoint here
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <div>
    <NavBar />
      <Header />
      <TrustedPartners />
      {isLargeScreen ? <MainBanner /> : <BigBrands />}
      {isLargeScreen ? <BigBrands /> : <MainBanner />}
      <Features/>
      <KeyPoints/>
      {/* <Testimonial/> */}
      <BrandDetails/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home