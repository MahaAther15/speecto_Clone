import React, { useEffect } from 'react';
import Navbar from '../../sections/navbar/Navbar';
import Hero from '../../Components/ServicesComponent/CardSection/Details/MVP/Hero';
import Detail from '../../Components/ServicesComponent/CardSection/Details/MVP/Detail';
import Steps from '../../Components/ServicesComponent/CardSection/Details/MVP/Steps';
import Technology from '../../Components/ServicesComponent/CardSection/Details/MVP/Technology';
import ContactUs from '../../sections/contact/ContactUs';
import Footer from '../../sections/Footer/Footer';

const MVP = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="md:gap-[80px] gap-[50px] flex flex-col">
            <Navbar />
            <div className="flex flex-col gap-[50px]">
                <Hero />
                <Detail />
                <Steps />
            </div>
            <Technology />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default MVP;
