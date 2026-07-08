import React from "react";
import DevelopmentAnimation from "./DevelopmentAnimation.jsx";

// Import local icons and images
import scrumIcon from "../../../assets/asset/scrum.svg";
import codeIcon from "../../../assets/asset/code.svg";

const Development = () => {
    return (
        <div className="container relative developmentSectionDesign">
            <div className="relative">
                <div className="z-50 flex flex-col items-center justify-center w-full">
                    <div className="w-[2px] h-[90px] dark:bg-developmentVerticleLineGradient bg-developmentVerticleLineGradient"></div>
                    <div className="relative z-20 w-full flex justify-center items-center flex-col gap-[30px]">
                        <div className="relative !text-white 2xl:text-2xl lg:text-xl sm:text-lg text-base font-Nunito font-bold rounded-full sm:w-[50px] sm:h-[50px] w-10 h-10 md:w-[60px] md:h-[60px] flex items-center justify-center dark:bg-developmentBoxGradient !bg-developmentBoxGradient dark:text-black text-white">
                            4
                        </div>
                        <a title="link" href="/development">
                            <h2 className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] text-xl font-bold font-Nunito !text-transparent bg-clip-text lg:tracking-[0.2em] tracking-[0.1em] 2xl:tracking-[0.3em] !uppercase dark:bg-torangeGradientDark bg-orangeGradientDark">
                                Development
                            </h2>
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-[50.61%_46.29%] md:gap-[3.4%]">
                {/* LEFT COLUMN: Timeline */}
                <div className="md:order-1 order-2">
                    <div>
                        {/* Placeholder Spacer */}
                        <div className="before:right-[1px] after:right-[1px] md:pt-[100px] before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block dark:after:bg-developmentVerticleLineGradient after:bg-developmentVerticleLineGradient">
                            <div className="justify-start flex-row-reverse items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                                <div className="activeTimelineBorder hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full -mr-[8px] transition-all duration-700 undefined"></div>
                                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 hidden justify-center w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center undefined">
                                    <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                                        <img
                                            alt=""
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="items-center md:items-end 2xl:mr-[40px] md:mr-[42px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-bold text-black dark:text-white mt-[10px] text-opacity-100"> </h3>
                                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-bold mt-[10px] text-gray5 text-center md:text-right"> </p>
                            </div>
                        </div>

                        {/* Step 1: Using scrum */}
                        <div className="before:right-[1px] after:right-[1px] null before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block development">
                            <div className="justify-start flex-row-reverse items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                                <div className="activeTimelineBorder md:block hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full dark:bg-white bg-white -mr-[8px] transition-all duration-700"></div>
                                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 block justify-center w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                                    <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                                        <img src={scrumIcon} alt="Scrum" className="w-full h-auto object-contain" />
                                    </div>
                                </div>
                            </div>
                            <div className="items-center md:items-end 2xl:mr-[40px] md:mr-[42px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-bold text-black dark:text-white mt-[10px] md:dark:text-opacity-50 md:text-opacity-50 text-opacity-100">
                                    Using scrum
                                </h3>
                                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-bold mt-[10px] text-gray5 text-center md:text-right">
                                    At our software development company, we use the Scrum framework to develop software iteratively, in close collaboration with our clients, emphasizing flexibility, continuous improvement, and rapid delivery of high-quality software products. By using Scrum, we prioritize customer satisfaction, team communication, and product adaptability, ensuring that we meet the evolving needs of our clients throughout the software development lifecycle.
                                </p>
                            </div>
                        </div>

                        {/* Step 2: Code Quality */}
                        <div className="before:right-[1px] after:right-[1px] null before:hidden after:hidden md:before:hidden md:after:hidden relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block development">
                            <div className="justify-start flex-row-reverse items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                                <div className="activeTimelineBorder md:block hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full dark:bg-white bg-white -mr-[8px] transition-all duration-700"></div>
                                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 block justify-center w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                                    <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                                        <img src={codeIcon} alt="Code Quality" className="w-full h-auto object-contain" />
                                    </div>
                                </div>
                            </div>
                            <div className="items-center md:items-end 2xl:mr-[40px] md:mr-[42px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-bold text-black dark:text-white mt-[10px] md:dark:text-opacity-50 md:text-opacity-50 text-opacity-100">
                                    Code Quality
                                </h3>
                                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-bold mt-[10px] text-gray5 text-center md:text-right">
                                    Emphasizing code quality is crucial to achieving superior software quality, and we achieve this through various techniques such as automated testing, code reviews, and strict adherence to coding standards. By prioritizing the quality of the code, we can create a highly reliable, maintainable, and efficient software product that meets the ever-changing demands of our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Illustration / Animation */}
                <div className="md:order-2 order-1 relative flex w-full h-full items-start md:pt-[20%] lg:pt-[15%]">
                    <div className="sticky md:top-[20%] lg:top-[25%] xl:top-[calc(50%-130px)] 2xl:top-[calc(50%-100px)] w-full flex justify-center items-center">
                        <DevelopmentAnimation />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Development;