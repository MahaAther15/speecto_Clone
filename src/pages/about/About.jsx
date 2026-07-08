import React from 'react'
import Navbar from '../../sections/navbar/Navbar'
import Hero from '../../Components/AboutUs/Hero/Hero'
import ContactUs from '../../sections/contact/ContactUs'
import Footer from '../../sections/Footer/Footer'

const About = () => {
    return (
        <div className="min-h-screen relative bg-white dark:bg-darkBg text-slate-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <div className="md:gap-[80px] gap-[50px] flex flex-col">
                <Hero />
                <ContactUs />
            </div>
            <Footer />
        </div>
    )
}

export default About;