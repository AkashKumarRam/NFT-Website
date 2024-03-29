import React,{useEffect} from 'react'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import AdidasCaseStudy from './CaseStudies/AdidasCaseStudy';
import CaseStudy from './CaseStudies/CaseStudy';
import NikeCaseStudies from './CaseStudies/NikeCaseStudies';
import OdssyCaseStudy from './CaseStudies/OdssyCaseStudy';
import PepsiCaseStudy from './CaseStudies/PepsiCaseStudy';
import StreetArtCaseStudy from './CaseStudies/StreetArtCaseStudy';

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <NavBar/>
        <div className='bg-[#FEFEFF]'>
        <div className='flex justify-center mt-14 max-sm:hidden'>
            <h1 className='font-body text-4xl'>NFT Marketing Case-Studies</h1>
        </div>

        <div className='flex flex-col items-center p-5 mt-14 sm:hidden justify-center'>
            <h1 className='font-body items-center text-4xl text-center'>NFT Marketing Case- Studies</h1>
        </div>
        <div className='max-sm:space-y-5'>
        <CaseStudy/>
        <PepsiCaseStudy/>
        <AdidasCaseStudy/>
        <NikeCaseStudies/>
        <OdssyCaseStudy/>
        <StreetArtCaseStudy/>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CaseStudies