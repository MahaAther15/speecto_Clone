import React from "react";
import speectoLogo from "../../assets/asset/speectoLogo.png";

const Footer = () => {
    return (
        <footer>
            <div className="w-full 2xl:py-[50px] py-10 2xl:px-[150px] xl:px-20 md:px-10 px-5 mt-10 md:mt-[100px]">
                {/* Logo & Newsletter Heading */}
                <div className="max-w-[429px] m-auto flex flex-col items-center">
                    <a title="link" className="mb-5 2xl:mb-[30px] 2xl:max-w-[232px] lg:max-w-[190px] md:max-w-[180px] sm:max-w-[170px] max-w-[150px] w-full" href="/">
                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271770%27%20height=%27256%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                            </span>
                            <img
                                alt="logo"
                                src={speectoLogo}
                                decoding="async"
                                data-nimg="intrinsic"
                                className="object-cover !grayscale-0 dark:!grayscale invert dark:invert-0"
                                style={{
                                    position: "absolute",
                                    inset: "0px",
                                    boxSizing: "border-box",
                                    padding: "0px",
                                    borderWidth: "medium",
                                    borderStyle: "none",
                                    borderColor: "currentcolor",
                                    borderImage: "initial",
                                    margin: "auto",
                                    display: "block",
                                    width: "0px",
                                    height: "0px",
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%"
                                }}
                            />
                        </span>
                    </a>
                    <p className="lg:text-3xl sm:text-2xl font-Nunito text-xl font-medium 2xl:!text-[32px] text-black dark:text-white1 !font-Nunito !font-bold capitalize mb-5 ">
                        Subscribe To Our Newsletter
                    </p>
                </div>


                {/* Newsletter Form & Footer Links */}
                <div className="max-w-[800px] m-auto">
                    <form>
                        <div className="relative grid w-full grid-cols-1 sm:grid-cols-[78.6%_21.3%] gap-y-5 sm:gap-y-0 min-h-10 sm:min-h-[50px] mb-[50px]">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="focus:outline-none w-full h-10 sm:h-11 2xl:h-full px-4 bg-transparent sm:rounded-tl-[10px] sm:rounded-none rounded-[10px] sm:rounded-bl-[10px] border-[1.5px] dark:border-white1 border-gray2 2xl:px-5 md:px-4 placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:font-normal"
                            />
                            <button
                                type="submit"
                                name="button"
                                className="cursor-pointer min-w-max py-[14px] px-5 lg:text-lg md:text-base text-sm 2xl:text-xl font-bold text-white rounded-[10px] bg-blue-300 flex justify-center items-center sm:rounded-tr-[10px] sm:rounded-br-[10px] rounded-[10px] sm:rounded-none border-[1.5px] dark:border-white1 border-black w-full !px-10 2xl:h-[50px] sm:h-11 h-10 dark:!bg-white1 !bg-black dark:text-black text-white 2xl:!text-lg font-Nunito"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>

                    {/* Footer Links Grid */}
                    <div className="2xl:px-[69px] md:px-10 px-0">
                        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

                            {/* Explore Column */}
                            <div className="flex flex-col w-full pb-6 2xl:gap-y-6 lg:gap-y-5 gap-y-4">
                                <p className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito !font-bold text-black dark:text-white1">
                                    Explore
                                </p>
                                <div className="flex flex-col w-full lg:gap-y-4 gap-y-3 2xl:gap-y-5">
                                    <div>
                                        <a className="text-sm font-medium font-Nunito text-black dark:text-white1" title="link" href="/">Home</a>
                                    </div>
                                    <div>
                                        <a className="text-sm font-medium font-Nunito text-black dark:text-white1" title="link" href="/our-team">Our Team</a>
                                    </div>
                                </div>
                            </div>

                            {/* Resources Column */}
                            <div className="flex flex-col w-full pb-6 2xl:gap-y-6 lg:gap-y-5 gap-y-4">
                                <p className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito !font-bold text-black dark:text-white1">
                                    Resources
                                </p>
                                <div className="flex flex-col w-full lg:gap-y-4 gap-y-3 2xl:gap-y-5">
                                    <div>
                                        <a className="text-sm font-medium font-Nunito text-black dark:text-white1" title="link" href="/contact">Contact</a>
                                    </div>
                                    <div>
                                        <a className="text-sm font-medium font-Nunito text-black dark:text-white1" title="link" href="/services">Services</a>
                                    </div>
                                </div>
                            </div>

                            {/* GetInTouch Column */}
                            <div className="flex flex-col w-full pb-6 2xl:gap-y-6 lg:gap-y-5 gap-y-4">
                                <p className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito !font-bold text-black dark:text-white1">
                                    GetInTouch
                                </p>
                                <div className="flex flex-col w-full lg:gap-y-4 gap-y-3 2xl:gap-y-5">
                                    <div>
                                        <div className="flex flex-col !font-medium lg:gap-y-4 gap-y-3 2xl:gap-y-5 font-Nunito">
                                            {/* Address */}
                                            <a target="_blank" className="flex items-center 2xl:gap-x-[13px] gap-x-[10px]" href="https://www.google.com/maps/place/Shop+71,+ALG+ID+Cards+t%2Fa+The+Lanyard,+75+Shelton+St,+London+WC2H+9JQ,+UK/@51.5149037,-0.1235842,17z" rel="noreferrer">
                                                <div className="w-5">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-[13px] text-black dark:text-white1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                                    </svg>
                                                </div>
                                                <p className="text-sm font-medium font-Nunito flex-1 text-black break-words dark:text-white1">
                                                    71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
                                                </p>
                                            </a>

                                            {/* Email */}
                                            <a title="link" className="flex items-center 2xl:gap-x-[13px] gap-x-[10px]" href="mailto:contactus@speecto.com">
                                                <div className="w-5">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-black dark:text-white1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                                                    </svg>
                                                </div>
                                                <p className="text-sm font-medium font-Nunito flex-1 text-black dark:text-white1">
                                                    contactus@speecto.com
                                                </p>
                                            </a>

                                            {/* Phone */}
                                            <a title="link" className="flex items-center 2xl:gap-x-[13px] gap-x-[10px]" href="callto:+442071757733">
                                                <div className="w-5">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-black dark:text-white1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                                                    </svg>
                                                </div>
                                                <p className="text-sm font-medium font-Nunito text-black dark:!text-white1 flex-1">
                                                    +442071757733
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bottom Bar */}
            <div className="px-5 xl:px-20 md:px-10 dark:bg-gray6 bg-[#E9ECEF]">
                <div className="min-h-[50px] w-full flex justify-center items-center py-2">
                    <p className="md:text-base font-Nunito text-sm font-medium text-center dark:text-gray8 text-gray2">
                        © 2023 Speecto Ltd is a company registered in England and Wales (Company No. 15060881)
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;