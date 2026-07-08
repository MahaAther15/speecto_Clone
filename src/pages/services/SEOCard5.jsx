import React, { useEffect } from 'react';
import Navbar from '../../sections/navbar/Navbar';
import Hero from '../../Components/ServicesComponent/CardSection/Details/SEO(Card5)/Hero';
import Details from '../../Components/ServicesComponent/CardSection/Details/SEO(Card5)/Details';
import Steps from '../../Components/ServicesComponent/CardSection/Details/SEO(Card5)/Steps';
import Technology from '../../Components/ServicesComponent/CardSection/Details/SEO(Card5)/Technology';
import ContactUs from '../../sections/contact/ContactUs';
import Footer from '../../sections/Footer/Footer';

const SEOCard5 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="md:gap-[80px] gap-[50px] flex flex-col">
            <Navbar />
            <div className="flex flex-col gap-[50px]">
                <Hero />
                <Details />
                <Steps />
            </div>
            <Technology />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default SEOCard5;
