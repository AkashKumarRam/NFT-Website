import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Form from '../Form/Form.jsx';
import PricingList from './PricingList/PricingList';
import Faq from './PricingList/Faq';

const Pricing = () => {
  return (
    <div>
      <NavBar/>
      <PricingList/>
      <Faq/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Pricing