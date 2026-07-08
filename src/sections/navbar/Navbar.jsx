import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/asset/speectoLogo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light");
        } else {
            root.classList.add("light");
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            {/* Header / Navbar container */}
            <div className={`py-5 left-0 w-full transition-all !duration-500 !z-[1000001] bg-[#081533] ${
                isScrolled ? "fixed top-0 animate-navSticky bg-opacity-95" : "absolute"
            }`}>
                <div className="w-full flex items-center justify-center z-20">
                    <div className="container flex items-center justify-between w-full gap-3 mx-auto lg:gap-5 px-6">
                        
                        {/* Logo Link (Pixel-perfect matching of speecto.com image spans) */}
                        <NavLink 
                            to="/" 
                            title="link" 
                            className="flex items-center sm:translate-y-0 translate-y-[1px] my-auto max-h-max md:max-w-[160px] max-w-[150px]"
                        >
                            <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271770%27%20height=%27256%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                                </span>
                                <img 
                                    alt="logo" 
                                    src={logo} 
                                    className="object-cover" 
                                    style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} 
                                />
                            </span>
                        </NavLink>

                        {/* Navigation Links (Desktop - Pixel-perfect inner tag formatting) */}
                        <div className="items-center justify-center hidden w-full gap-1 lg:flex md:gap-2 lg:gap-5 xl:gap-8 2xl:gap-[50px]">
                            <NavLink to="/" title="link">
                                {({ isActive }) => (
                                    <p className={`font-Nunito 2xl:text-xl xl:text-lg text-base font-medium relative flex justify-center font-Nunito transition-all ${
                                        isActive 
                                            ? "text-white1 !font-bold before:w-[30%] before:h-[5px] before:bg-white before:content-[''] before:absolute before:-bottom-[5px]" 
                                            : "text-gray5 font-medium"
                                    }`}>
                                        Home
                                    </p>
                                )}
                            </NavLink>
                            <NavLink to="/services" end title="link">
                                {({ isActive }) => (
                                    <p className={`font-Nunito 2xl:text-xl xl:text-lg text-base font-medium relative flex justify-center font-Nunito transition-all ${
                                        isActive 
                                            ? "text-white1 !font-bold before:w-[30%] before:h-[5px] before:bg-white before:content-[''] before:absolute before:-bottom-[5px]" 
                                            : "text-gray5 font-medium"
                                    }`}>
                                        Services
                                    </p>
                                )}
                            </NavLink>
                            <NavLink to="/contact" title="link">
                                {({ isActive }) => (
                                    <p className={`font-Nunito 2xl:text-xl xl:text-lg text-base font-medium relative flex justify-center font-Nunito transition-all ${
                                        isActive 
                                            ? "text-white1 !font-bold before:w-[30%] before:h-[5px] before:bg-white before:content-[''] before:absolute before:-bottom-[5px]" 
                                            : "text-gray5 font-medium"
                                    }`}>
                                        Contact Us
                                    </p>
                                )}
                            </NavLink>
                            <NavLink to="/our-team" title="link">
                                {({ isActive }) => (
                                    <p className={`font-Nunito 2xl:text-xl xl:text-lg text-base font-medium relative flex justify-center font-Nunito transition-all ${
                                        isActive 
                                            ? "text-white1 !font-bold before:w-[30%] before:h-[5px] before:bg-white before:content-[''] before:absolute before:-bottom-[5px]" 
                                            : "text-gray5 font-medium"
                                    }`}>
                                        Our Team
                                    </p>
                                )}
                            </NavLink>
                            <NavLink to="/about-us" title="link">
                                {({ isActive }) => (
                                    <p className={`font-Nunito 2xl:text-xl xl:text-lg text-base font-medium relative flex justify-center font-Nunito transition-all ${
                                        isActive 
                                            ? "text-white1 !font-bold before:w-[30%] before:h-[5px] before:bg-white before:content-[''] before:absolute before:-bottom-[5px]" 
                                            : "text-gray5 font-medium"
                                    }`}>
                                        About Us
                                    </p>
                                )}
                            </NavLink>
                        </div>

                        {/* Get Started Button */}
                        <div>
                            <button 
                                className="font-Nunito cursor-pointer min-w-max py-[14px] px-5 lg:text-lg md:text-base text-sm 2xl:text-xl font-bold text-white rounded-[10px] bg-blue-300 !py-[9px] lg:block hidden !rounded-lg !bg-white !text-black" 
                                name="button"
                            >
                                Get Started
                            </button>
                        </div>

                        {/* Theme Toggle & Mobile Menu Trigger */}
                        <div className="flex items-center gap-3">
                            <div className="min-w-[40px] sm:min-w-[60px]">
                                <div 
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="bg-blue-200 overflow-hidden cursor-pointer rounded-[20px] min-h-[20px] min-w-[40px] sm:min-h-[30px] sm:min-w-[60px] relative transition-colors duration-300"
                                >
                                    {/* Sliding Sun/Moon Ball */}
                                    <div 
                                        className={`opacity-100 scale-100 !shadow-serviceCardShadow bg-yellow-300 transition-all duration-300 w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] absolute top-1/2 -translate-y-1/2 rounded-full overflow-hidden ${
                                            theme === "dark" 
                                                ? "left-[calc(100%-19px)] sm:left-[calc(100%-24px)]" 
                                                : "left-1"
                                        }`}
                                    >
                                        <div className="bg-yellow-300 transition-all duration-500 sm:w-[25px] sm:h-[25px] w-[22px] h-[22px] rounded-full absolute -top-2 -right-3"></div>
                                    </div>

                                    {/* Cloud SVGs */}
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="text-white/80 sm:text-xl text-sm animate-cloud-top absolute left-[10%]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="text-white sm:text-2xl animate-cloud-bottom -bottom-2 absolute left-[10%]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Mobile Menu Toggle Button */}
                            <button 
                                className="flex items-center lg:hidden text-white text-3xl"
                                onClick={() => setMenuOpen(true)}
                            >
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-white text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Mobile Drawer Overlay */}
            <div 
                aria-hidden="true" 
                onClick={() => setMenuOpen(false)}
                className={`w-full h-full min-h-[calc(100vh+100px)] top-0 left-0 fixed bg-black/70 z-[99999] transition-opacity duration-300 ${
                    menuOpen ? "opacity-100 block" : "opacity-0 hidden"
                }`}
            ></div>

            {/* Mobile Drawer Panel */}
            <div 
                className={`lg:hidden block fixed p-4 w-[60%] max-w-[280px] overflow-auto h-screen z-[999999999] shadow-md transition-all duration-300 bg-blueGradientBoxDark top-0 ${
                    menuOpen ? "left-0" : "left-[-60%]"
                }`}
            >
                {/* Close Button */}
                <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 352 512" 
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer absolute top-4 right-4 text-white text-xl" 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                </svg>

                {/* Mobile Drawer Logo */}
                <div className="flex justify-center w-full">
                    <NavLink 
                        to="/" 
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 max-w-[130px] mx-auto w-full my-[40px]"
                    >
                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271770%27%20height=%27256%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                            </span>
                            <img 
                                alt="logo" 
                                src={logo} 
                                className="w-full !grayscale invert-0" 
                                style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} 
                            />
                        </span>
                    </NavLink>
                </div>

                {/* Mobile Drawer Menu Links */}
                <div className="flex flex-col w-full gap-2 pt-2">
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>
                        <p className="font-Nunito 2xl:text-lg text-sm sm:text-base font-medium !text-white1">Home</p>
                    </NavLink>
                    <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                        <p className="font-Nunito 2xl:text-lg text-sm sm:text-base font-medium !text-white1">Services</p>
                    </NavLink>
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                        <p className="font-Nunito 2xl:text-lg text-sm sm:text-base font-medium !text-white1">Contact Us</p>
                    </NavLink>
                    <NavLink to="/our-team" onClick={() => setMenuOpen(false)}>
                        <p className="font-Nunito 2xl:text-lg text-sm sm:text-base font-medium !text-white1">Our Team</p>
                    </NavLink>
                    <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
                        <p className="font-Nunito 2xl:text-lg text-sm sm:text-base font-medium !text-white1">About Us</p>
                    </NavLink>

                    {/* Get Started Mobile Button */}
                    <button 
                        className="font-Nunito cursor-pointer min-w-max py-[14px] px-5 lg:text-lg md:text-base text-sm 2xl:text-xl font-bold text-white rounded-[10px] bg-blue-300 !py-[9px] md:hidden block !w-full mt-10 !bg-white !text-black" 
                        name="button"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
