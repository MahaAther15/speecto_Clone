import React from "react";
import Navbar from "../../sections/navbar/Navbar";
import Hero from "../../Components/OURTeam/hero/Hero";
import InfoCard from "../../Components/OURTeam/infocard/InfoCard";
import Footer from "../../sections/Footer/Footer";
import ContactUs from "../../sections/contact/ContactUs";
const OurTeam = () => {
    return (
        <div className="min-h-screen relative bg-white dark:bg-darkBg text-slate-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <Hero />
            <InfoCard />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default OurTeam;