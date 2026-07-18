import React from 'react';
import { Link } from 'react-router-dom';
import OrbitAnimation from "../../HomeComponents/herosection/heroAnimation/Home.jsx";

const Hero = () => {
    return (
        <div className="w-full items-center justify-center flex bg-lightBg dark:bg-darkBg 2xl:max-h-[550px] 2xl:min-h-[550px] md:max-h-[500px] md:min-h-[500px] min-h-[550px] max-h-[550px] overflow-hidden relative undefined">
            <div className="bg-lightBg dark:bg-darkBg w-full pt-[70px] sm:pt-[80px] pb-5 h-full max-h-full overflow-hidden">
                <div className="container h-full relative grid grid-cols-1 items-center ">
                    <div className="grid md:grid-cols-2 grid-cols-1 2xl:gap-[0] md:gap-x-[10%] gap-3">
                        <div className="md:col-start-1 row-start-1 md:text-left text-center self-center md:pt-8">
                            <h1 className="2xl:text-5xl lg:text-4xl font-Nunito  md:text-3xl text-2xl  text-primary font-bold   !text-white flex items-center justify-center md:justify-start uppercase">Our <span className="!text-transparent bg-buttontextGradient bg-clip-text">Services</span> </h1>
                            <p className=" font-Nunito 2xl:text-xl xl:text-lg text-base font-medium  text-white mt-3 md:mt-5">we offer a comprehensive range of IT solutions to meet your business needs. From Requirement Engineering, development and Product design to cloud computing and Testing, our experienced team is here to provide expert guidance and deliver innovative solutions.</p>
                        </div>
                        <div className="md:col-start-1 md:row-start-2 row-start-3 w-full">
                            <Link to="/contact">
                                <button className="relative overflow-hidden group rounded-xl sm:text-base text-sm lg:text-lg 2xl:text-xl mb-8 font-bold w-max h-max mx-auto md:mx-0 p-[2px] bg-buttontextGradient md:min-w-0 min-w-full">
                                    <div className=" rounded-[10px] w-full flex items-center justify-center bg-lightBg dark:bg-darkBg  !text-xl capitalize !font-bold shadow-buttonShadow">
                                        <div className="flex z-[3] relative !text-transparent group-hover:!text-white group-hover:!bg-white !bg-clip-text bg-buttontextGradient py-2 sm:py-[11px] px-5 sm:px-[25px]">Contact Us</div>
                                    </div>
                                    <div className="absolute z-[1] left-0 top-0 content-[' '] h-full bg-darkBg transition-all duration-300 bg-buttontextGradient group-hover:w-full w-0"></div>
                                </button>
                            </Link>
                        </div>
                        <div className="md:col-start-2 md:row-start-1 max-w-max mx-auto row-start-2 md:row-span-2 md:mt-0 -mt-3">
                            <OrbitAnimation />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;