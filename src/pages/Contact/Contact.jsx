import React from 'react';
import Navbar from '../../sections/navbar/Navbar';
import Footer from '../../sections/Footer/Footer';
import Hero from '../../Components/ContactUSComponent/Hero/Hero';
import Info from '../../Components/ContactUSComponent/info/Info';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="md:gap-[80px] gap-[50px] flex flex-col md:p-0 pt-[100px] overflow-hidden pb-12 md:pb-20">
        <Hero />
        <Info />
      </div>
      <Footer />
    </>
  );
};

export default Contact;