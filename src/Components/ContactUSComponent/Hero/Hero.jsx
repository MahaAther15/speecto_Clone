import React from "react";
import contactus from "../../../assets/asset/contactUs.mp4";

const Hero = () => {
    return (
        <div className="md:flex hidden pt-[50px] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] 2xl:max-h-[550px] 2xl:min-h-[550px] bg-lightBg dark:bg-darkBg items-center justify-center">
            <div className="h-full flex items-center justify-center md:justify-between container w-full">
                {/* Left */}
                <h1 className="2xl:text-5xl lg:text-4xl font-Nunito md:text-3xl text-2xl text-primary font-bold !text-white uppercase">
                    <span className="!text-transparent bg-buttontextGradient bg-clip-text">Contact</span> Us
                </h1>

                {/* Right - Video assets instead of animation with imgs */}
                <div className="md:flex hidden h-full items-center relative">
                    <div className="contactUsAnimationWrapper mx-auto w-full mt-[-50px] md:h-[250px] h-[460px] sm:h-[400px] lg:h-[400px] lg:max-w-none max-w-[350px] flex items-center justify-center relative">
                        <div className="absolute w-full max-w-[300px] sm:max-w-[400px] mx-auto top-[50%] translate-y-[-50%] h-full">
                            <video
                                src={contactus}
                                autoPlay
                                loop
                                muted
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;