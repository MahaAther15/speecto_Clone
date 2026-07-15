import react from 'react';
import Navbar from '../../sections/navbar/Navbar';
import ContactUs from '../../sections/contact/ContactUs';
import Footer from '../../sections/Footer/Footer';
import Card from '../../Components/ServicesComponent/CardSection/Card';
import Experiences from '../../Components/ServicesComponent/Experiences/Experiences';
import Hero from '../../Components/ServicesComponent/HeroSection/Hero';


const Services = () => {
    return (
        <div className='md:gap-[80px] gap-[50px] flex flex-col'>
            <Navbar />
            <Hero />
            <Card />
            <Experiences />
            <div className="-mb-14 md:-mb-24">
                <ContactUs />
            </div>
            <Footer />
        </div>
    )
}
export default Services;