import React from 'react';
import { Link } from 'react-router-dom';
import ourSingleService from '../../../../../assets/asset/common.png';

const Hero = () => {
    return (
        <div className="w-full items-center justify-center flex bg-lightBg dark:bg-darkBg 2xl:max-h-[550px] 2xl:min-h-[550px] md:max-h-[500px] md:min-h-[500px] min-h-[550px] max-h-[550px] overflow-hidden relative">
            <div className="container h-full pt-[80px] md:pt-[70px] min-h-full my-auto flex items-center justify-center">
                <div className="min-h-full grid gap-3 md:grid-cols-2 md:gap-[2.27%] md:items-center">
                    
                    {/* Left Column */}
                    <div className="!z-[99] md:text-left text-center">
                        <h1 className="2xl:text-5xl lg:text-4xl font-Nunito md:text-3xl text-2xl text-primary font-bold !text-white uppercase">
                            MVP <span className="!text-transparent !bg-clip-text bg-buttontextGradient">Development</span>
                        </h1>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium my-3 text-white md:my-5">
                            Product design is a multidisciplinary approach that combines user research, Fusing creativity, user-centered thinking, and functional aesthetics to craft innovative and delightful products that solve real-world problems and enhance user experiences.
                        </p>
                        <Link to="/contact">
                            <button className="relative overflow-hidden group rounded-xl sm:text-base text-sm lg:text-lg 2xl:text-xl font-bold w-max h-max mx-auto p-[2px] bg-buttontextGradient md:min-w-0 min-w-full" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 4px" }}>
                                <div className="rounded-[10px] w-full flex items-center justify-center bg-lightBg dark:bg-darkBg">
                                    <div className="flex z-[3] relative !text-transparent group-hover:!text-white group-hover:!bg-white !bg-clip-text bg-buttontextGradient py-2 sm:py-[11px] px-5 sm:px-[25px]">
                                        Get Started
                                    </div>
                                </div>
                                <div className="absolute z-[1] left-0 top-0 content-[''] h-full bg-darkBg transition-all duration-300 bg-buttontextGradient group-hover:w-full w-0"></div>
                            </button>
                        </Link>
                    </div>

                    {/* Right Column */}
                    <div>
                        <div className="max-w-[200px] sm:max-w-[250px] md:max-w-[400px] mx-auto flex">
                            <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27521%27%20height=%27479%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                                </span>
                                <img 
                                    alt="MVP Development Banner" 
                                    src={ourSingleService} 
                                    decoding="async" 
                                    className="w-full object-cover" 
                                    style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} 
                                />
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
