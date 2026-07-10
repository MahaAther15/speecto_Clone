import React from 'react'
import Navbar from '../../sections/navbar/Navbar'
import Hero from '../../Components/HomeComponents/herosection/Hero'
import Work from '../../Components/HomeComponents/work/Work.jsx'
import Requirement from '../../Components/HomeComponents/RequirnmentSection/Requirnment.jsx'
import ProductDesign from '../../Components/HomeComponents/productdesign/ProductDesign'
import SystemDesign from '../../Components/HomeComponents/systemDesign/SystemDesign.jsx'
import Development from '../../Components/HomeComponents/Development/Development.jsx'
import Testing from '../../Components/HomeComponents/Testing/Testing.jsx'
import Production from '../../Components/HomeComponents/production/Production.jsx'
import Deployment from '../../Components/HomeComponents/Deployment/Deployment.jsx'
import ContactUs from '../../sections/contact/ContactUs.jsx'
import Footer from '../../sections/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className="min-h-screen relative bg-white dark:bg-darkBg text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <div className="flex flex-col">
        <Hero />
        <div className="pt-[50px]">
          <Work />
        </div>
        <div className="flex flex-col gap-[50px] md:gap-[80px] mt-[50px] md:mt-[80px]">
          <Requirement />
          <ProductDesign />
          <SystemDesign />
          <Development />
          <Testing />
          <Production />
          <Deployment />
          <ContactUs />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
