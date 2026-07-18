import React from "react";
import contactVideo from "../../../assets/asset/Contact.mp4";

const Hero = () => {
    return (
        <div className="md:flex hidden pt-[50px] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] 2xl:max-h-[550px] 2xl:min-h-[550px] bg-lightBg dark:bg-darkBg items-center justify-center">
            <div className="h-full flex items-center justify-center md:justify-between container w-full">
                {/* Left */}
                <h1 className="2xl:text-5xl lg:text-4xl font-Nunito md:text-3xl text-2xl text-primary font-bold !text-white uppercase">
                    <span className="!text-transparent bg-buttontextGradient bg-clip-text">Contact</span> Us
                </h1>

                {/* Right */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="mb-7 pl-10 w-full max-w-[450px] flex justify-center items-center translate-x-6 translate-y-6">
                        <video
                            src={contactVideo}
                            autoPlay
                            loop
                            muted
                            className="w-[90%] ml-12 mb-8 mr-2 mt-12 h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;