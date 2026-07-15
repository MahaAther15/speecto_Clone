import React from "react";
import ProductDesignAnimation from "./ProductDesignAnimation.jsx";

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
                <div className="order-1 md:order-2 relative flex h-full items-start justify-center pt-2 mt-4 sm:mt-[40px] md:mt-0 productDesignIllustrationWrapper md:pt-[20%] lg:pt-[15%] w-full overflow-hidden lg:overflow-visible">
                    <div className="sticky w-full max-w-full md:top-[20%] lg:top-[25%] xl:top-[calc(50%-130px)] 2xl:top-[calc(50%-100px)] overflow-hidden lg:overflow-visible">
                        <div className="w-full">
                            <div className="h-[260px] sm:h-[358px] md:h-auto relative w-full mx-auto sm:mb-0 mb-0">
                                <ProductDesignAnimation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDesign;
