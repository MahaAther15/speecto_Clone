import React from "react";

// Local image assets
import productDesignLightBg from "../../../assets/asset/productDesignLightBg.webp";
import productDesignLightMan from "../../../assets/asset/productDesignLightMan.webp";
import productDesignLightCloud1 from "../../../assets/asset/productDesignLightCloud1.webp";
import productDesignLightCloud2 from "../../../assets/asset/productDesignLightCloud2.webp";
import productDesignLightGeometry from "../../../assets/asset/productDesignLightGeometry.webp";

// Timeline icons
import wireframeIcon from "../../../assets/asset/wireframe.svg";
import designIcon from "../../../assets/asset/design.svg";
import productIcon from "../../../assets/asset/product.svg";
import roadmapIcon from "../../../assets/asset/roadmap.svg";

// Gear SVG reused multiple times
const GearIcon = ({ className }) => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className={className}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
    </svg>
);

// Timeline step data
const steps = [
    {
        icon: wireframeIcon,
        alt: "Wireframing",
        title: "Wireframing",
        desc: "Wireframing is a method of creating a basic visual outline of a product or website's structure and features in order to convey and refine design ideas.",
    },
    {
        icon: designIcon,
        alt: "UI/UX Design",
        title: "UI/UX Design",
        desc: "UI/UX design is the process of developing interfaces that are both aesthetically pleasing and easy to use, providing users with a seamless and enjoyable experience while interacting with a product or service.",
    },
    {
        icon: productIcon,
        alt: "Technical review",
        title: "Technical review",
        desc: "A technical review of UI/UX design evaluates the practicality and implementation of design choices, making sure they can be properly executed to create a functional and efficient software product.",
    },
    {
        icon: roadmapIcon,
        alt: "Roadmap",
        title: "Roadmap",
        desc: "A roadmap for product development is a strategic document that defines the timeline, milestones, stages, and necessary resources for a product's development cycle in order to achieve its launch into the market.",
    },
];

const ProductDesign = () => {
    return (
        <div className="container relative developmentDesign w-full max-w-full overflow-hidden lg:overflow-visible">
            {/* ── Section Header ── */}
            <div className="relative">
                <div className="z-50 flex flex-col items-center justify-center w-full">
                    {/* Vertical line above circle */}
                    <div className="w-[2px] h-[90px] dark:bg-productDesignVerticleLineGradient bg-productDesignVerticleLineGradient" />

                    <div className="relative z-20 w-full flex justify-center items-center flex-col gap-[30px]">
                        {/* Numbered circle */}
                        <div className="relative text-white 2xl:text-2xl lg:text-xl sm:text-lg text-base font-Nunito font-bold rounded-full sm:w-[50px] sm:h-[50px] w-10 h-10 md:w-[60px] md:h-[60px] flex items-center justify-center bg-productDesignBoxGradient dark:bg-productDesignBoxGradient">
                            2
                        </div>

                        {/* Section title */}
                        <a title="link" href="">
                            <h2 className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] text-xl font-bold font-Nunito !text-transparent bg-clip-text lg:tracking-[0.2em] tracking-[0.1em] 2xl:tracking-[0.3em] !uppercase bg-productDesignTextGradient dark:bg-productDesignTextGradient">
                                Product Design
                            </h2>
                        </a>
                    </div>
                </div>
            </div>

            {/* ── Two-column grid ── */}
            <div className="grid md:grid-cols-[50.61%_46.29%] sm:gap-[3.4%] items-start w-full max-w-full overflow-hidden lg:overflow-visible">

                {/* ── LEFT COLUMN: Timeline ── */}
                <div className="md:order-1 order-2 w-full max-w-full">
                    <div>
                        {/* Hidden placeholder (creates top padding + fade-in line) */}
                        <div className="hidden md:block before:right-[1px] after:right-[1px] md:pt-[100px] before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block fadeInProductLine">
                            <div className="justify-start flex-row-reverse items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                                {/* Hidden dot */}
                                <div className="productDesignCircle hidden relative z-30 -mr-[8px] h-5 w-5 rounded-full transition-all duration-700" />
                                {/* Hidden icon box */}
                                <div className="mx-auto md:mx-0 bg-gray7 dark:bg-gray6 hidden justify-center w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center" />
                            </div>
                            <div className="items-center md:items-end 2xl:mr-[40px] md:mr-[42px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-bold text-black dark:text-white mt-[10px] md:opacity-50"> </h3>
                                <p className="font-Nunito text-base font-bold mt-[10px] text-gray5"> </p>
                            </div>
                        </div>

                        {/* ── Visible steps ── */}
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={`before:right-[1px] after:right-[1px] before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block ${i === steps.length - 1 ? '!after:hidden !before:hidden' : 'productDesigns'}`}
                            >
                                <div className="justify-start flex-row-reverse items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                                    {/* Filled pink circle dot */}
                                    <div className="productDesignCircle md:block hidden relative z-30 -mr-[8px] h-5 w-5 rounded-full transition-all duration-700" />
                                    {/* Icon box */}
                                    <div className="mx-auto md:mx-0 bg-gray7 dark:bg-gray6 block justify-center w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                                        <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                                            <img
                                                src={step.icon}
                                                alt={step.alt}
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Text content */}
                                <div className="items-center md:items-end 2xl:mr-[40px] md:mr-[42px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                                    <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-bold text-black dark:text-white mt-[10px] md:opacity-50 text-opacity-100">
                                        {step.title}
                                    </h3>
                                    <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-bold mt-[10px] text-gray5 text-center md:text-right">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {/* Hidden trailing placeholder */}
                        <div className="before:right-[1px] after:right-[1px] before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 hidden before:hidden after:hidden productDesigns">
                            <div className="justify-start flex-row-reverse items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                                <div className="productDesignCircle md:block hidden relative z-30 -mr-[8px] h-5 w-5 rounded-full transition-all duration-700" />
                                <div className="mx-auto md:mx-0 bg-gray7 dark:bg-gray6 block justify-center w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center" />
                            </div>
                            <div className="items-center md:items-end 2xl:mr-[40px] md:mr-[42px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                                <h3 className="font-Nunito font-bold text-black dark:text-white mt-[10px]" />
                                <p className="font-Nunito text-base font-bold mt-[10px] text-gray5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT COLUMN: Illustration ── */}
                <div className="order-1 relative flex h-full items-center justify-center pt-[60px] mt-[80px] sm:mt-[40px] md:mt-0 productDesignIllustrationWrapper">
                    <div className="lg:mt-0 md:mt-[-85%] md:top-[78%] lg:top-[90%] sticky sm:max-w-none max-w-[448px] w-[99%] lg:w-[96%] mx-auto md:ml-0 md:mr-auto">
                        <div className="w-full">
                            <div className="h-[285px] sm:h-[405px] md:h-auto relative w-full mx-auto sm:mb-0 mb-[50px] w-full">
                                <div className="w-full h-full top-[-100px] md:top-[-240px] absolute w-full opacity-0">
                                    <div className="flex items-center justify-center w-full h-full p-5 rounded-md animate-pulse opacity-50 dark:bg-lazyLoadBg bg-gray-300">
                                        <div className="h-[5px] w-full bg-buttonborderGradient rounded-md animate-width-full2"></div>
                                    </div>
                                </div>
                                <div className="w-full mx-auto h-full relative flex justify-center opacity-100 w-[100%]">
                                    {/* Background Layer: diagram, clouds, gears, step stool */}
                                    <div className="overflow-visible absolute w-[85%] lg:w-[90%] bottom-[60px] sm:bottom-[80px] lg:bottom-[95px] xl:bottom-[110px] z-0">
                                        <div className="w-[100px] ml-auto relative top-10 right-[-55px] sm:-right-[45px] lg:-right-5">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="absolute text-4xl lg:text-[55px] 2xl:text-[68px] text-[#F5F5F5] dark:text-[#989898] spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path>
                                            </svg>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="absolute text-[26px] lg:text-[40px] 2xl:text-[44px] text-[#F5F5F5] dark:text-[#989898] right-[100px] lg:right-[95px] top-3 lg:top-5 2xl:top-[25px] spin-back" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path>
                                            </svg>
                                            <div className="right-[62px] 2xl:right-[65px] top-9 lg:top-[54px] 2xl:top-[60px] absolute rotate-[20deg] w-[53px] h-[53px]">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="absolute text-3xl lg:text-[44px] 2xl:text-[53px] text-[#F5F5F5] dark:text-[#989898] spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <img alt="Background Diagram" src={productDesignLightBg} decoding="async" className="w-[97%] max-w-[505px] h-auto object-contain mx-auto" />
                                        <div className="animate-cloud-float-cycle absolute 2xl:max-w-[109px] md:max-w-[60px] max-w-[50px] top-[15px] sm:top-[20px] lg:top-[25px] left-[22%] sm:left-[23%]">
                                            <img alt="" src={productDesignLightCloud1} decoding="async" className="w-full h-auto object-contain" />
                                        </div>
                                        <div className="animate-cloud-float-cycle absolute 2xl:max-w-[65px] md:max-w-[40px] max-w-[32px] top-[5px] sm:top-[10px] lg:top-[15px] left-[54%] sm:left-[55%]">
                                            <img alt="" src={productDesignLightCloud2} decoding="async" className="w-full h-auto object-contain" />
                                        </div>
                                        <div className="animate-cloud-float-opposite absolute 2xl:max-w-[70px] md:max-w-[50px] max-w-[40px] top-[-90px] sm:top-[-110px] lg:top-[-130px] left-[58%] sm:left-[60%]">
                                            <img alt="" src={productDesignLightCloud2} decoding="async" className="w-full h-auto object-contain" />
                                        </div>
                                        <div className="w-[70px] h-[44px] left-[30px] absolute bottom-[-15px] bg-[#E1E1E1] dark:bg-[#7C7C7C] flex justify-end items-center">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-[#F5F5F5] dark:text-[#989898] text-2xl mr-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
                                            </svg>
                                        </div>
                                        <div className="w-[70px] lg:w-[100px] h-[50px] lg:h-[60px] bg-[#E1E1E1] dark:bg-[#7C7C7C] border-[5px] border-[#F5F5F5] dark:border-[#989898] absolute bottom-[-20px] right-[30px]">
                                            <div className="w-full h-[5px] bg-[#F5F5F5] dark:bg-[#989898]"></div>
                                            <div className="flex flex-col p-2 gap-[2px] lg:gap-1 animate-width-full">
                                                <div className="w-[80%] h-[2px] bg-[#F5F5F5] dark:bg-[#989898]"></div>
                                                <div className="w-[70%] h-[2px] bg-[#F5F5F5] dark:bg-[#989898]"></div>
                                                <div className="w-[60%] h-[2px] bg-[#F5F5F5] dark:bg-[#989898]"></div>
                                                <div className="w-[50%] h-[2px] bg-[#F5F5F5] dark:bg-[#989898]"></div>
                                                <div className="w-[40%] h-[2px] bg-[#F5F5F5] dark:bg-[#989898]"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Foreground Layer: Character Standing + Pink Browser Window */}
                                    <div className="absolute w-[100%] bottom-[0px] z-20">
                                        <div className="relative z-20 flex justify-center w-full">
                                            <img alt="Characters" src={productDesignLightMan} decoding="async" className="relative z-20 w-[112%] sm:w-[110%] max-w-[565px] h-auto object-contain mx-auto" />
                                        </div>
                                        <div className="pt-[9px] pb-5 px-[13px] w-[66%] sm:w-[67%] m-auto left-[18%] sm:left-[17.5%] bottom-[28%] z-10 2xl:h-[290px] md:h-[170px] h-[200px] sm:h-[240px] lg:h-[190px] xl:h-[240px] absolute bg-[#f9b9e4] dark:bg-[#683d5e] rounded-lg">
                                            <div className="relative w-full h-full bg-productDesignBoxGradient">
                                                <div className="px-[2px] xl:px-2 w-full h-[20%] bg-black/20 top-0 left-0 flex justify-between items-center">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-[8px] h-[8px] bg-[#6a104c]"></span>
                                                        <span className="w-[8px] h-[8px] bg-[#6a104c] rounded-sm"></span>
                                                        <span className="w-[8px] h-[8px] bg-[#6a104c] rounded-full"></span>
                                                    </div>
                                                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" className="text-[#fed1f3] dark:text-[#6a104c] text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                                <div className="grid grid-cols-[45%_55%] w-full h-full">
                                                    <div className="w-full h-[80%] bg-[#fa99dd] dark:bg-darkBg/30 relative">
                                                        <div className="relative w-[50%] lg:w-[45%] xl:w-[60%] ml-[22%] h-[40px] lg:h-[60%] mt-[10%]">
                                                            <img alt="" src={productDesignLightGeometry} decoding="async" className="relative z-10 w-full h-full object-contain" />
                                                            <div className="w-[100px] mt-[-6px] absolute ml-[-10%] sm:block hidden">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="absolute text-2xl text-[#fff7fd] dark:text-[#332b31] spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path>
                                                                </svg>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="absolute text-xl text-[#ffdff7] dark:text-[#55354e] left-[22px] top-[6px] spin-back" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path>
                                                                </svg>
                                                                <div className="left-[6px] top-[27px] absolute rotate-[20deg] w-[53px] h-[53px]">
                                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="absolute text-base text-[#fed0f4] dark:text-[#6f3e63] spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[10px] w-10 h-[14px] bg-[#fed1f3] dark:bg-[#4e3448] rounded-md right-[-15px]"></div>
                                                    </div>
                                                    <div className="flex flex-col gap-3 xl:gap-6">
                                                        <div className="dark:ants ants1 w-[70%] h-[40%] mt-[-10%] ml-[5%] relative flex justify-end items-center">
                                                            {/* Revolving Dashed Border (Marching Ants) connecting the 6 boxes */}
                                                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                                                                <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" className="text-[#602c51] dark:text-[#602c51] animate-marching-ants" />
                                                            </svg>
                                                            {/* 6 Square Handles (Top-Left, Top-Center, Top-Right, Bottom-Left, Bottom-Center, Bottom-Right) */}
                                                            <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
                                                                <div className="w-[10px] h-[10px] bg-productDesignBoxGradient border border-[#602c51] absolute top-[-5px] left-[-5px]"></div>
                                                                <div className="w-[10px] h-[10px] bg-productDesignBoxGradient border border-[#602c51] absolute top-[-5px] left-[50%] -translate-x-1/2"></div>
                                                                <div className="w-[10px] h-[10px] bg-productDesignBoxGradient border border-[#602c51] absolute top-[-5px] right-[-5px]"></div>
                                                                <div className="w-[10px] h-[10px] bg-productDesignBoxGradient border border-[#602c51] absolute bottom-[-5px] left-[-5px]"></div>
                                                                <div className="w-[10px] h-[10px] bg-productDesignBoxGradient border border-[#602c51] absolute bottom-[-5px] left-[50%] -translate-x-1/2"></div>
                                                                <div className="w-[10px] h-[10px] bg-productDesignBoxGradient border border-[#602c51] absolute bottom-[-5px] right-[-5px]"></div>
                                                            </div>
                                                            <div className="flex gap-2 w-max mr-[10%] relative z-10">
                                                                <div className="w-5 lg:w-7 xl:w-10 h-[9px] lg:h-[14px] bg-[#fed1f3] dark:bg-[#4e3448] rounded-md"></div>
                                                                <div className="w-5 lg:w-7 xl:w-10 h-[9px] lg:h-[14px] bg-[#fed1f3] dark:bg-[#4e3448] rounded-md"></div>
                                                            </div>
                                                        </div>
                                                        <div className="w-[70%] rotate-[-180deg] ml-[5%]">
                                                            <div className="flex flex-col gap-[2px] lg:gap-1 animate-width-full">
                                                                <div className="w-[60%] h-[4px] bg-[#F5F5F5] dark:bg-[#602c51]"></div>
                                                                <div className="w-[80%] h-[4px] bg-[#F5F5F5] dark:bg-[#602c51]"></div>
                                                                <div className="w-[80%] h-[4px] bg-[#F5F5F5] dark:bg-[#602c51]"></div>
                                                            </div>
                                                        </div>
                                                        <div className="w-10 xl:w-[60px] h-[9px] lg:h-[14px] bg-[#fed1f3] dark:bg-[#4e3448] rounded-xl mx-auto"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Prominent Pink Code Box Card overlay at bottom-left (Between man's shoes and monitor stand) */}
                                        <div className="z-30 w-[70px] sm:w-[90px] lg:w-[105px] xl:w-[118px] h-[40px] sm:h-[50px] lg:h-[60px] xl:h-[68px] bg-[#f12eb3] dark:bg-productDesignBoxGradient border-[4px] sm:border-[5px] lg:border-[6px] border-[#f8a5dc] dark:border-[#76245b] absolute bottom-[-10px] sm:bottom-[-15px] lg:bottom-[-20px] left-[18%] sm:left-[20%] lg:left-[22%] rounded-md shadow-md p-1.5 sm:p-2 lg:p-2.5 flex items-center">
                                            <div className="flex flex-col justify-center w-full gap-1 sm:gap-1.5 animate-width-full">
                                                <div className="w-[85%] h-[2px] sm:h-[2.5px] lg:h-[3px] bg-[#F5F5F5] dark:bg-[#592648] rounded-full"></div>
                                                <div className="w-[75%] h-[2px] sm:h-[2.5px] lg:h-[3px] bg-[#F5F5F5] dark:bg-[#592648] rounded-full"></div>
                                                <div className="w-[65%] h-[2px] sm:h-[2.5px] lg:h-[3px] bg-[#F5F5F5] dark:bg-[#592648] rounded-full"></div>
                                                <div className="w-[55%] h-[2px] sm:h-[2.5px] lg:h-[3px] bg-[#F5F5F5] dark:bg-[#592648] rounded-full"></div>
                                                <div className="w-[45%] h-[2px] sm:h-[2.5px] lg:h-[3px] bg-[#F5F5F5] dark:bg-[#592648] rounded-full"></div>
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

export default ProductDesign;
