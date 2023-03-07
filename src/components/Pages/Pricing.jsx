import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Form from '../Form/Form.jsx';
import PricingList from './PricingList/PricingList';

const Pricing = () => {
  return (
    <div>
      <NavBar/>
      <PricingList/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Pricing