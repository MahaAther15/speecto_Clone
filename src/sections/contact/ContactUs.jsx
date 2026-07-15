import React from "react";
import { useLocation } from "react-router-dom";
import './ContactUs.css';

const ContactUs = ({ buttonAlign }) => {
    const location = useLocation();
    const align = buttonAlign || (location && location.pathname.includes('/contact') ? "left" : "center");
    return (
        <div id="contactUs">
            <div className="container relative">
                <div className="max-w-[1030px] m-auto">

                    {/* Section Heading */}
                    <h2 className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] text-xl font-bold font-Nunito 2xl:mb-[50px] mb-10 text-center lg:tracking-[0.2em] tracking-[0.1em] 2xl:tracking-[0.3em] capitalize !text-transparent bg-buttontextGradient bg-clip-text">
                        Let's get started
                    </h2>

                    {/* Form Grid Wrapper */}
                    <div className="grid grid-cols-1 2xl:mt-[50px] lg:mt-10 sm:mt-8 mt-5">
                        <form className="w-full">
                            {/* 2-column grid for input fields */}
                            <div className="w-full grid sm:grid-cols-2 2xl:gap-[50px] lg:gap-10 sm:gap-8 gap-5">

                                {/* Name */}
                                <div className="relative">
                                    <div className="w-full h-max">
                                        <p className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold dark:text-white text-black">
                                            Name
                                        </p>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            className="rounded-[60px] 2xl:h-[60px] lg:h-[50px] h-10 dark:placeholder:text-gray6 placeholder:text-gray2 w-full border-[1.5px] bg-transparent dark:border-gray6 border-gray7 focus:outline-none 2xl:px-5 px-3"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="relative">
                                    <div className="w-full h-max">
                                        <p className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold dark:text-white text-black">
                                            Email
                                        </p>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="rounded-[60px] 2xl:h-[60px] lg:h-[50px] h-10 dark:placeholder:text-gray6 placeholder:text-gray2 w-full border-[1.5px] bg-transparent dark:border-gray6 border-gray7 focus:outline-none 2xl:px-5 px-3"
                                        />
                                    </div>
                                </div>

                                {/* Phone No. */}
                                <div className="relative">
                                    <div className="w-full h-max">
                                        <p className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold dark:text-white text-black">
                                            Phone No.
                                        </p>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Phone Number"
                                            className="rounded-[60px] 2xl:h-[60px] lg:h-[50px] h-10 dark:placeholder:text-gray6 placeholder:text-gray2 w-full border-[1.5px] bg-transparent dark:border-gray6 border-gray7 focus:outline-none 2xl:px-5 px-3"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="relative">
                                    <div className="w-full h-max">
                                        <p className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold dark:text-white text-black">
                                            Subject
                                        </p>
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            className="rounded-[60px] 2xl:h-[60px] lg:h-[50px] h-10 dark:placeholder:text-gray6 placeholder:text-gray2 w-full border-[1.5px] bg-transparent dark:border-gray6 border-gray7 focus:outline-none 2xl:px-5 px-3"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Your Message */}
                            <div className="relative">
                                <div className="w-full h-max 2xl:mt-[50px] lg:mt-10 sm:mt-8 mt-5">
                                    <p className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold dark:text-white text-black">
                                        Your Message
                                    </p>
                                    <textarea
                                        name="message"
                                        defaultValue=""
                                        placeholder="Write your message..."
                                        className="!bg-transparent border-[1.5px] dark:!border-gray6 !border-gray7 dark:placeholder:text-gray6 placeholder:text-gray2 rounded-xl italic w-full h-full focus:outline-none text-gray1 2xl:px-5 px-3 bg-gray4 min-h-[100px] pt-3"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="w-full flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="relative overflow-hidden group rounded-xl sm:text-base text-sm lg:text-lg 2xl:text-xl font-bold w-[110px] min-w-[110px] h-max mx-auto p-[2px] bg-buttontextGradient 2xl:mt-24 lg:mt-14 md:mt-10 mt-5"
                                    style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 4px' }}
                                >
                                    <div className="rounded-[10px] w-full flex items-center justify-center bg-lightBg dark:bg-darkBg !bg-white dark:!bg-darkBg">
                                        <div className="flex z-[3] relative !text-transparent group-hover:!text-white group-hover:!bg-white !bg-clip-text bg-buttontextGradient py-2 sm:py-[11px] px-3">
                                            Submit
                                        </div>
                                    </div>
                                    <div className="absolute z-[1] left-0 top-0 content-[' '] h-full bg-darkBg transition-all duration-300 bg-buttontextGradient group-hover:w-full w-0"></div>
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactUs;