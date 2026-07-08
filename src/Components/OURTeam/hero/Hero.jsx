import React from 'react';
import teamBg from '../../../assets/asset/teamCropedBg.webp';

const Hero = () => {
    return (
        <div className="md:gap-[80px] gap-[50px] flex flex-col">
            <div className="relative w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] 2xl:max-h-[550px] 2xl:min-h-[550px] flex dark:bg-white bg-white/20">
                <div className="w-full z-[2] relative bg-darkBg/50 pt-[100px] md:pt-[120px] 2xl:pt-[140px] flex items-center flex-col">
                    <div className="text-center container sm:px-5 px-2">
                        <h1 className="2xl:text-5xl lg:text-4xl font-Nunito md:text-3xl text-2xl text-primary font-bold !text-white uppercase 2xl:!text-5xl md:!text-3xl">
                            Meet Our{' '}
                            <span className="!text-transparent bg-buttontextGradient bg-clip-text">
                                team
                            </span>
                        </h1>
                        <h2 className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] text-xl font-bold font-Nunito text-white uppercase mt-2 2xl:mt-[15px] !text-base sm:!text-xl 2xl:!text-2xl !font-medium">
                            Unleashing the power of collaboration to create extraordinary results.
                        </h2>
                    </div>
                </div>
                <div className="absolute z-[1] bottom-0 flex max-w-max w-full left-1/2 -translate-x-1/2">
                    <img
                        src={teamBg}
                        alt="Team Background"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;