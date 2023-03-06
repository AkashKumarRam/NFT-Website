import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import CaseStudy from './CaseStudies/CaseStudy';

const CaseStudies = () => {
  return (
    <div>
        <NavBar/>
        <div className='flex justify-center mt-14'>
            <h1 className='font-body text-4xl'>NFT Marketing Case-Studies</h1>
        </div>
        <CaseStudy/>
        <CaseStudy/>
        <CaseStudy/>
        <CaseStudy/>
        <Footer/>
    </div>
  )
}

export default CaseStudies