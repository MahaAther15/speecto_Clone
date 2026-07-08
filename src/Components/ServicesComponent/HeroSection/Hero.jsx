import React from 'react';
import { Link } from 'react-router-dom';

import reactLogo from "../../../assets/asset/reactIcon2.webp";
import bannerReactCircle1 from "../../../assets/asset/bannerReactCircle1.webp";
import bannerReactCircle2 from "../../../assets/asset/bannerReactCircle2.webp";
import bannerReactCircle3 from "../../../assets/asset/bannerReactCircle3.webp";
import bannerReactCircle4 from "../../../assets/asset/bannerReactCircle4.webp";

const Hero = () => {
    return (
        <div className="w-full items-center justify-center flex bg-lightBg dark:bg-darkBg 2xl:max-h-[550px] 2xl:min-h-[550px] md:max-h-[500px] md:min-h-[500px] min-h-[550px] max-h-[550px] overflow-hidden relative undefined">
            <div className="bg-lightBg dark:bg-darkBg w-full pt-[70px] sm:pt-[80px] pb-5 h-full max-h-full overflow-hidden">
                <div className="container h-full relative grid grid-cols-1 items-center ">
                    <div className="grid md:grid-cols-2 grid-cols-1 2xl:gap-[0] md:gap-x-[10%] gap-3">
                        <div className="md:col-start-1 row-start-1 md:text-left text-center self-center">
                            <h1 className="2xl:text-5xl lg:text-4xl font-Nunito  md:text-3xl text-2xl  text-primary font-bold   !text-white flex items-center justify-center md:justify-start uppercase">Our <span className="!text-transparent bg-buttontextGradient bg-clip-text">Services</span> </h1>
                            <p className=" font-Nunito 2xl:text-xl xl:text-lg text-base font-medium  text-white mt-3 md:mt-5">we offer a comprehensive range of IT solutions to meet your business needs. From Requirement Engineering, development and Product design to cloud computing and Testing, our experienced team is here to provide expert guidance and deliver innovative solutions.</p>
                        </div>
                        <div className="md:col-start-1 md:row-start-2 row-start-3 w-full">
                            <Link to="/contact">
                                <button className="relative overflow-hidden group rounded-xl sm:text-base text-sm lg:text-lg 2xl:text-xl font-bold w-max h-max mx-auto p-[2px] bg-buttontextGradient md:min-w-0 min-w-full ">
                                    <div className=" rounded-[10px] w-full flex items-center justify-center bg-lightBg dark:bg-darkBg  !text-xl capitalize !font-bold shadow-buttonShadow">
                                        <div className="flex z-[3] relative !text-transparent group-hover:!text-white group-hover:!bg-white !bg-clip-text bg-buttontextGradient py-2 sm:py-[11px] px-5 sm:px-[25px]">Contact Us</div>
                                    </div>
                                    <div className="absolute z-[1] left-0 top-0 content-[' '] h-full bg-darkBg transition-all duration-300 bg-buttontextGradient group-hover:w-full w-0"></div>
                                </button>
                            </Link>
                        </div>
                        <div className="md:col-start-2 md:row-start-1 max-w-max mx-auto row-start-2 md:row-span-2 md:mt-0 -mt-3">
                            <div className="w-full overflow-hidden z-[999] ">
                                <div className="relative flex items-center justify-center w-full h-full " id="circle">
                                    <div className="relative w-[285px] h-[285px] sm:w-full sm:h-full " style={{ width: "330px", height: "330px" }}>
                                        <div className="  absolute     overflow-hidden flex justify-center items-center p-5 rounded-full w-[80%] sm:w-[67%] h-[80%] sm:h-[67%] m-auto inset-0   ">
                                            <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27405%27%20height=%27405%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                                                </span>
                                                <img alt="image" src={reactLogo} decoding="async" data-nimg="intrinsic" className="w-full z-[999]" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderStyle: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                            </span>
                                        </div>
                                        <div className="">
                                            <div className="  pointer-events-none hover:pause animate-waving-hand   transition-none duration-300  rounded-full       w-full h-full z-[199]  absolute    flex items-center inset-0 m-auto     justify-center  ">
                                                <div className="  pointer-events-auto bg-[#0f0563] cursor-pointer w-[12%] h-[12%] hover:w-[14%] hover:h-[14%] scale-100 hover:scale-125  absolute border-2 overflow-hidden border-white rounded-full flex hover:border-transparent transition-all duration-150 ease-in z-[999]    justify-center items-center     " style={{ transform: "rotate(0deg) translate(132px)" }}>
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                        <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2763%27%20height=%2752%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                                                        </span>
                                                        <img alt="" src={bannerReactCircle4} decoding="async" data-nimg="intrinsic" className=" rotate-90 z-[999] transition-all duration-200 ease-in flex-1 w-full h-full object-contain" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderStyle: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                </div>
                                                <div className="  pointer-events-auto bg-[#0f0563] cursor-pointer w-[12%] h-[12%] hover:w-[14%] hover:h-[14%] scale-100 hover:scale-125  absolute border-2 overflow-hidden border-white rounded-full flex hover:border-transparent transition-all duration-150 ease-in z-[999]    justify-center items-center     " style={{ transform: "rotate(90deg) translate(132px)" }}>
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                        <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2763%27%20height=%2735%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                                                        </span>
                                                        <img alt="" src={bannerReactCircle3} decoding="async" data-nimg="intrinsic" className=" rotate-90 z-[999] transition-all duration-200 ease-in flex-1 w-full h-full object-contain" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderStyle: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                </div>
                                                <div className="  pointer-events-auto bg-[#0f0563] cursor-pointer w-[12%] h-[12%] hover:w-[14%] hover:h-[14%] scale-100 hover:scale-125  absolute border-2 overflow-hidden border-white rounded-full flex hover:border-transparent transition-all duration-150 ease-in z-[999]    justify-center items-center     " style={{ transform: "rotate(180deg) translate(132px)" }}>
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                        <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2763%27%20height=%2761%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                                                        </span>
                                                        <img alt="" src={bannerReactCircle2} decoding="async" data-nimg="intrinsic" className=" rotate-90 z-[999] transition-all duration-200 ease-in flex-1 w-full h-full object-contain" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderStyle: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                </div>
                                                <div className="  pointer-events-auto bg-[#0f0563] cursor-pointer w-[12%] h-[12%] hover:w-[14%] hover:h-[14%] scale-100 hover:scale-125  absolute border-2 overflow-hidden border-white rounded-full flex hover:border-transparent transition-all duration-150 ease-in z-[999]    justify-center items-center     " style={{ transform: "rotate(270deg) translate(132px)" }}>
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                        <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2763%27%20height=%2765%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                                                        </span>
                                                        <img alt="" src={bannerReactCircle1} decoding="async" data-nimg="intrinsic" className=" rotate-90 z-[999] transition-all duration-200 ease-in flex-1 w-full h-full object-contain" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderStyle: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className=" flex items-center w-full h-full z-[101] absolute inset-0 m-auto   justify-center    ">
                                                <div className="  absolute z-[101] w-4 md:w-8 h-4 md:h-8    bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(0deg) translate(132px)" }}></div>
                                                <div className="  absolute z-[101] w-4 md:w-8 h-4 md:h-8    bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(45deg) translate(132px)" }}></div>
                                                <div className="  absolute z-[101] w-4 md:w-8 h-4 md:h-8    bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(90deg) translate(132px)" }}></div>
                                                <div className="  absolute z-[101] w-4 md:w-8 h-4 md:h-8    bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(135deg) translate(132px)" }}></div>
                                                <div className="  absolute z-[101] w-4 md:w-8 h-4 md:h-8    bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(180deg) translate(132px)" }}></div>
                                                <div className="  absolute z-[101] w-4 md:w-8 h-4 md:h-8    bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(225deg) translate(132px)" }}></div>
                                                <div className="  absolute z-[101] w-4 md:w-8 h-4 md:h-8    bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(270deg) translate(132px)" }}></div>
                                                <div className="  absolute z-[101] w-4 md:w-8 h-4 md:h-8    bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(315deg) translate(132px)" }}></div>
                                            </div>
                                            <div className="flex z-[100] items-center     w-full h-full absolute inset-0 m-auto justify-center ">
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(0deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(22.5deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(45deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(67.5deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(90deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(112.5deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(135deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(157.5deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(180deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(202.5deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(225deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(247.5deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(270deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(292.5deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(315deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                                <div className="  absolute border bg-[#0f0563] border-primary1  rounded-full flex   justify-center items-center     " style={{ transform: "rotate(337.5deg) translate(132px)", width: "2.68293%", height: "2.68293%" }}></div>
                                            </div>
                                            <div className=" z-[50]     flex justify-center items-center  w-full h-full  absolute inset-0 m-auto rounded-full     ">
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(0deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(11.25deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(22.5deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(33.75deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(45deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(56.25deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(67.5deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(78.75deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(90deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(101.25deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(112.5deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(123.75deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(135deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(146.25deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(157.5deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(168.75deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(180deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(191.25deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(202.5deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(213.75deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(225deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(236.25deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(247.5deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(258.75deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(270deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(281.25deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(292.5deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(303.75deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(315deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(326.25deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(337.5deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                                <div className="   absolute bg-white rounded-full flex   justify-center items-center     " style={{ transform: "rotate(348.75deg) translate(132px)", width: "1.01538%", height: "1.01538%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;