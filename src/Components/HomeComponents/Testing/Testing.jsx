import React from "react";

// Import local icons and images
import componentIcon from "../../../assets/asset/component.svg";
import pathIcon from "../../../assets/asset/path.svg";
import routeIcon from "../../../assets/asset/route.svg";
import listIcon from "../../../assets/asset/list.svg";
import testingVideo from "../../../assets/asset/testing.mp4";

const Testing = () => {
    return (
        <div className="container relative testingDesign">
            {/* Header */}
            <div className="relative">
                <div className="z-50 flex flex-col items-center justify-center w-full">
                    <div className="w-[2px] h-[90px] dark:bg-testingDesignVerticleLineGradient bg-testingDesignVerticleLineGradient"></div>
                    <div className="relative z-20 w-full flex justify-center items-center flex-col gap-[30px]">
                        <div className="relative !text-white 2xl:text-2xl lg:text-xl sm:text-lg text-base font-Nunito font-bold rounded-full sm:w-[50px] sm:h-[50px] w-10 h-10 md:w-[60px] md:h-[60px] flex items-center justify-center dark:bg-testingDesignBoxGradient !bg-testingDesignBoxGradient dark:text-black text-white">
                            5
                        </div>
                        <a title="link" href="/testing">
                            <h2 className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] text-xl font-bold font-Nunito !text-transparent bg-clip-text lg:tracking-[0.2em] tracking-[0.1em] 2xl:tracking-[0.3em] !uppercase dark:bg-testingDesignTextGradient bg-testingDesignTextGradient">
                                Testing
                            </h2>
                        </a>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-bold text-gray5 text-center 2xl:mt-[30px] mt-6">
                By employing various testing strategies such as unit, integration, integration testing, and end-to-end testing, we identify and fix defects early in the development process, leading to a highly reliable and performant software product that meets the requirements of our clients.
            </p>

            {/* Content grid */}
            <div className="grid grid-cols-1 md:grid-cols-[46.29%_50.61%] md:gap-[3.4%]">

                {/* LEFT COLUMN: Video (sticky scroll) */}
                <div className="md:order-1 order-1 relative flex w-full h-full items-start pt-14 md:pt-[20%] lg:pt-[15%] testingContainer systemDesignIllustrationOuterContainer">
                    <div className="sticky md:top-[20%] lg:top-[25%] xl:top-[calc(50%-130px)] 2xl:top-[calc(50%-100px)] w-full flex justify-center items-center">
                        <video
                            src={testingVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto"
                        ></video>
                    </div>
                </div>

                {/* RIGHT COLUMN: Timeline Steps */}
                <div className="order-2 md:order-2">
                    <div>
                        {/* Placeholder Spacer step */}
                        <div className="before:left-[4px] after:left-[4px] md:pt-[100px] before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block dark:after:bg-testingDesignVerticleLineGradient after:bg-testingDesignVerticleLineGradient">
                            <div className="justify-start items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                                <div className="activeTimelineBorder hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full 2xl:mr-4 transition-all duration-700"></div>
                                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 hidden w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                                    <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                                        <img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="w-full h-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="items-center md:items-start 2xl:ml-[60px] md:ml-[52px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-bold text-black dark:text-white mt-[10px] text-opacity-100"> </h3>
                                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-bold mt-[10px] text-gray5 text-center md:text-left"> </p>
                            </div>
                        </div>

                        {/* Step 1: Unit Testing */}
                        <div className="before:left-[4px] after:left-[4px] null before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block testing">
                            <div className="justify-start items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                                <div className="activeTimelineBorder md:block hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full dark:bg-white bg-white 2xl:mr-4 transition-all duration-700"></div>
                                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 block w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                                    <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                                        <img src={componentIcon} alt="Unit Testing" className="w-full h-auto object-contain" />
                                    </div>
                                </div>
                            </div>
                            <div className="items-center md:items-start 2xl:ml-[60px] md:ml-[52px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-bold text-black dark:text-white mt-[10px] md:dark:text-opacity-50 md:text-opacity-50 text-opacity-100">
                                    Unit Testing
                                </h3>
                                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-bold mt-[10px] text-gray5 text-center md:text-left">
                                    Unit testing helps us identify and fix defects in individual code components, resulting in a more reliable and efficient software product that meets client requirements.
                                </p>
                            </div>
                        </div>

                        {/* Step 2: Integration Testing */}
                        <div className="before:left-[4px] after:left-[4px] null before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block testing">
                            <div className="justify-start items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                                <div className="activeTimelineBorder md:block hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full dark:bg-white bg-white 2xl:mr-4 transition-all duration-700"></div>
                                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 block w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                                    <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                                        <img src={pathIcon} alt="Integration Testing" className="w-full h-auto object-contain" />
                                    </div>
                                </div>
                            </div>
                            <div className="items-center md:items-start 2xl:ml-[60px] md:ml-[52px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-bold text-black dark:text-white mt-[10px] md:dark:text-opacity-50 md:text-opacity-50 text-opacity-100">
                                    Integration Testing
                                </h3>
                                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-bold mt-[10px] text-gray5 text-center md:text-left">
                                    Our focus on integration testing ensures that different parts of the codebase work together seamlessly, resulting in a more reliable and efficient software product that meets client requirements.
                                </p>
                            </div>
                        </div>

                        {/* Step 3: End-to-End Testing */}
                        <div className="before:left-[4px] after:left-[4px] null before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block testing">
                            <div className="justify-start items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                                <div className="activeTimelineBorder md:block hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full dark:bg-white bg-white 2xl:mr-4 transition-all duration-700"></div>
                                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 block w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                                    <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                                        <img src={routeIcon} alt="End-to-End Testing" className="w-full h-auto object-contain" />
                                    </div>
                                </div>
                            </div>
                            <div className="items-center md:items-start 2xl:ml-[60px] md:ml-[52px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-bold text-black dark:text-white mt-[10px] md:dark:text-opacity-50 md:text-opacity-50 text-opacity-100">
                                    End-to-End Testing
                                </h3>
                                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-bold mt-[10px] text-gray5 text-center md:text-left">
                                    End-to-end testing allows us to identify and resolve defects that might not be caught through other testing methods, resulting in a more reliable and seamless software product that meets the expectations of our clients. By emphasizing end-to-end testing, we can ensure a highly satisfied user base.
                                </p>
                            </div>
                        </div>

                        {/* Step 4: Test-Driven Development */}
                        <div className="before:left-[4px] after:left-[4px] null before:hidden after:hidden md:before:hidden md:after:hidden relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block testing">
                            <div className="justify-start items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                                <div className="activeTimelineBorder md:block hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full dark:bg-white bg-white 2xl:mr-4 transition-all duration-700"></div>
                                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 block w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                                    <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                                        <img src={listIcon} alt="Test-Driven Development" className="w-full h-auto object-contain" />
                                    </div>
                                </div>
                            </div>
                            <div className="items-center md:items-start 2xl:ml-[60px] md:ml-[52px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-bold text-black dark:text-white mt-[10px] md:dark:text-opacity-50 md:text-opacity-50 text-opacity-100">
                                    Test-Driven Development
                                </h3>
                                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-bold mt-[10px] text-gray5 text-center md:text-left">
                                    Test-driven development (TDD) improves software quality by writing tests before code, leading to a more reliable and maintainable codebase with fewer defects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testing;