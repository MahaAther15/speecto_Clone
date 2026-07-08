import React from 'react';
import aboutUsImg from '../../../assets/asset/aboutus.webp';

const Hero = () => {
    return (
        <div className="w-full items-center justify-center flex bg-lightBg dark:bg-darkBg 2xl:max-h-[550px] 2xl:min-h-[550px] md:max-h-[500px] md:min-h-[500px] min-h-[550px] max-h-[550px] overflow-hidden relative">
            <div className="container h-full pt-[80px] md:pt-[70px] min-h-full my-auto flex items-center justify-center">
                <div className="min-h-full grid gap-3 md:grid-cols-2 md:gap-[2.27%] md:items-center">

                    {/* Left Content */}
                    <div className="!z-[99] md:text-left text-center">
                        <h1 className="2xl:text-5xl lg:text-4xl font-Nunito md:text-3xl text-2xl text-primary font-bold !text-white uppercase">
                            About{' '}
                            <span className="!text-transparent !bg-clip-text bg-buttontextGradient">
                                Us
                            </span>
                        </h1>

                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium my-3 text-white md:my-5">
                            We are keen to deliver highly innovative &amp; technological solutions
                            through utilizing a rigorous development process. Our journey has taken
                            us from the development of dynamic websites and mobile applications to
                            the development of key enterprise solutions including.
                        </p>

                        {/* Our Team Button */}
                        <button className="relative overflow-hidden group rounded-xl sm:text-base text-sm lg:text-lg 2xl:text-xl font-bold w-max h-max mx-auto p-[2px] bg-buttontextGradient md:min-w-0 min-w-full">
                            <div className="rounded-[10px] w-full flex items-center justify-center bg-lightBg dark:bg-darkBg">
                                <div className="flex z-[3] relative !text-transparent group-hover:!text-white group-hover:!bg-white !bg-clip-text bg-buttontextGradient py-2 sm:py-[11px] px-5 sm:px-[25px]">
                                    Our Team
                                </div>
                            </div>
                            <div className="absolute z-[1] left-0 top-0 content-[' '] h-full bg-darkBg transition-all duration-300 bg-buttontextGradient group-hover:w-full w-0"></div>
                        </button>
                    </div>

                    {/* Right Image */}
                    <div>
                        <div className="max-w-[200px] sm:max-w-[250px] md:max-w-[400px] mx-auto flex">
                            <img
                                src={aboutUsImg}
                                alt="About Us"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;