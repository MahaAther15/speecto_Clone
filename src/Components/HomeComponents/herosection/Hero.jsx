import React, { useState, useEffect } from "react";
import "../../../App.css";

import OrbitAnimation from "./heroAnimation/Home.jsx";
import MobileAnimation from "./heroAnimation/Mobile.jsx";
import LaptopAnimation from "./heroAnimation/Laptop.jsx";
import LaptopmanAnimation from "./heroAnimation/Laptopman.jsx";
import StandingAnimation from "./heroAnimation/Standing.jsx";
import techImage from "../../../assets/asset/tech.jpg";

const CONTENT_VARIATIONS = [
    {
        prefix: "We develop ",
        highlight: "high-performance ",
        suffix: "web apps",
        typewriterText: "web development",
        gradientClass: "bg-orangeGradientDark",
        themeColor: "#eb4215",
        gradientBg: "linear-gradient(90deg, #eb4215, #fb896c)",
        glowColor: "rgba(235, 66, 21, 0.20)",
    },
    {
        prefix: "We develop ",
        highlight: "high-performance ",
        suffix: "mobile apps",
        typewriterText: "app development",
        gradientClass: "bg-productDesignTextGradient",
        themeColor: "#eb15a2",
        gradientBg: "linear-gradient(90deg, #eb15a2, #ff74e0)",
        glowColor: "rgba(235, 21, 162, 0.20)",
    },
    {
        prefix: "We develop ",
        highlight: "high-performance ",
        suffix: "mobile apps",
        typewriterText: "app development",
        gradientClass: "bg-purpleGradient1Dark",
        themeColor: "#3f2b96",
        gradientBg: "linear-gradient(90deg, #3f2b96, #a8c0ff)",
        glowColor: "rgba(63, 43, 150, 0.20)",
    },
    {
        prefix: "",
        highlight: "Thorough testing ",
        suffix: "for seamless software experiences.",
        typewriterText: "testing",
        gradientClass: "bg-automatedWindowGrad",
        themeColor: "#ff416c",
        gradientBg: "linear-gradient(90deg, #ff416c, #ff4b2b)",
        glowColor: "rgba(255, 65, 108, 0.20)",
    },
    {
        prefix: "We excel in ",
        highlight: "crafting",
        suffix: " superior software solutions.",
        typewriterText: "digital solutions",
        gradientClass: "bg-purpleGradient1Dark",
        themeColor: "#3f2b96",
        gradientBg: "linear-gradient(90deg, #3f2b96, #a8c0ff)",
        glowColor: "rgba(63, 43, 150, 0.20)",
    },
];

const ANIM_COMPONENTS = [
    { component: LaptopAnimation, name: "laptop" },
    { component: MobileAnimation, name: "mobile" },
    { component: StandingAnimation, name: "standing" },
    { component: LaptopmanAnimation, name: "laptopman" },
    { component: OrbitAnimation, name: "orbit" },
];

function Hero() {
    const [loopNum, setLoopNum] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [typewriterState, setTypewriterState] = useState("typing"); // "typing", "holding_full", "deleting", "holding_empty"
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [currentAnimIndex, setCurrentAnimIndex] = useState(0);
    const [isAnimVisible, setIsAnimVisible] = useState(false);

    useEffect(() => {
        const currentVariantIndex = loopNum % CONTENT_VARIATIONS.length;
        const fullText = CONTENT_VARIATIONS[currentVariantIndex].typewriterText;

        if (typewriterState === "typing") {
            if (typedText.length < fullText.length) {
                const timeout = setTimeout(() => {
                    setTypedText(fullText.substring(0, typedText.length + 1));
                }, 100);
                return () => clearTimeout(timeout);
            } else {
                const holdTime = (currentVariantIndex === 4) ? 2000 : 1000;
                const timeout = setTimeout(() => {
                    setTypewriterState("deleting");
                }, holdTime);
                return () => clearTimeout(timeout);
            }
        } else if (typewriterState === "deleting") {
            if (typedText.length > 0) {
                const timeout = setTimeout(() => {
                    setTypedText(typedText.substring(0, typedText.length - 1));
                }, 100);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setLoopNum((prev) => prev + 1);
                    setTypewriterState("typing");
                }, 1500);
                return () => clearTimeout(timeout);
            }
        }
    }, [typedText, typewriterState, loopNum]);

    useEffect(() => {
        // Pop out from exact center to full size
        const popInTimer = setTimeout(() => {
            setIsAnimVisible(true);
        }, 50);

        // Stay in center for ~2.5 seconds, then shrink back into center
        const exitTimer = setTimeout(() => {
            setIsAnimVisible(false);
        }, 3100);

        // After shrinking completes, switch to next animation
        const nextTimer = setTimeout(() => {
            setCurrentAnimIndex((prev) => (prev + 1) % ANIM_COMPONENTS.length);
        }, 3700);

        return () => {
            clearTimeout(popInTimer);
            clearTimeout(exitTimer);
            clearTimeout(nextTimer);
        };
    }, [currentAnimIndex]);

    const currentContent = CONTENT_VARIATIONS[loopNum % CONTENT_VARIATIONS.length];
    const holdTime = ((loopNum % CONTENT_VARIATIONS.length) === 4) ? 2000 : 1000;
    const slideDuration = ((currentContent.typewriterText.length * 200) + holdTime + 1500) / 1000;

    const ActiveComponent = ANIM_COMPONENTS[currentAnimIndex].component;

    return (
        <div className="w-full bg-lightBg dark:bg-darkBg relative overflow-hidden text-white">
            {/* Background Watermark */}
            <div className="flex absolute sm:max-w-[400px] 2xl:max-w-[619px] left-1/2 md:translate-x-0 -translate-x-1/2 w-[80%] top-[80px] 2xl:top-[100px] md:left-0 select-none pointer-events-none z-0 mix-blend-screen">
                <img
                    src={techImage}
                    alt="TECH watermark"
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Container wrapping grid layout */}
            <div className="container w-full h-full relative">
                {/* Spacer for navbar */}
                <div className="min-h-[80px] w-full"></div>

                {/* Grid layout matching original speecto.com structure */}
                <div className="relative items-center justify-center gap-y-0 grid grid-cols-1 2xl:grid-cols-[60%_35%] md:grid-cols-[55%_40%] gap-x-[1%] sm:gap-x-[5.27%] h-max pt-2 pb-3 sm:pb-0 min-h-[calc(100vh-80px)] 2xl:max-h-screen 2xl:min-h-[calc(100vh-80px)]">

                    {/* Row 1: Heading */}
                    <div className="md:col-start-1 row-start-1 self-end">
                        <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-lg text-primary font-bold font-Nunito md:!text-left !font-Lemon !font-normal !text-center !text-white1 2xl:!text-5xl lg:!text-4xl sm:!text-3xl uppercase">
                            <div>
                                {currentContent.prefix}
                                <span className={`!text-transparent !bg-clip-text ${currentContent.gradientClass}`}>
                                    {currentContent.highlight}
                                </span>
                                {currentContent.suffix}
                            </div>
                            <div className={`uppercase md:block hidden !text-transparent !bg-clip-text mb-[10px] ${currentContent.gradientClass}`}>
                                <div className="react-reveal" style={{ opacity: 1 }}>
                                    <div className="Typewriter" data-testid="typewriter-wrapper">
                                        <span className="Typewriter__wrapper">{typedText}</span>
                                        <span className="Typewriter__cursor">|</span>
                                    </div>
                                </div>
                            </div>
                        </h1>
                    </div>

                    {/* Row 2 (mobile row 3): Description + Buttons */}
                    <div className="md:col-start-1 row-start-3 md:row-start-2 flex flex-col md:items-start items-center self-start">
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium md:!text-left !text-center !font-bold text-gray2 2xl:mb-[50px] mb-5 md:mb-10 line-clamp-3 md:line-clamp-none">
                            We are a team of tech enthusiasts dedicated to developing world-class
                            custom software solutions while fostering a culture of creativity,
                            inclusivity, and continuous learning.
                        </p>

                        <div className="flex mb-5 w-full flex-col items-center gap-8 md:flex-row">
                            <button
                                name="button"
                                onMouseEnter={() => setIsButtonHovered(true)}
                                onMouseLeave={() => setIsButtonHovered(false)}
                                className="relative group w-full h-full py-[11px] overflow-hidden px-[25px] gap-x-[18px] p-[1.5px] font-bold !rounded-[10px] relative w-full capitalize sm:w-[70%] md:w-max cursor-pointer"
                                style={{
                                    boxShadow: `${currentContent.glowColor} 0px 0px 50px 0px`,
                                    backgroundImage: isButtonHovered
                                        ? currentContent.gradientBg
                                        : `linear-gradient(#081533, #081533), ${currentContent.gradientBg}`,
                                    backgroundOrigin: "border-box",
                                    backgroundClip: "padding-box, border-box",
                                    border: "1.5px solid transparent",
                                }}
                            >
                                <p
                                    className="text-base z-[2] relative md:text-lg 2xl:text-xl transition-all duration-300"
                                    style={{
                                        backgroundImage: isButtonHovered ? "none" : currentContent.gradientBg,
                                        WebkitBackgroundClip: isButtonHovered ? "unset" : "text",
                                        WebkitTextFillColor: isButtonHovered ? "white" : "transparent",
                                    }}
                                >
                                    Get Started
                                </p>
                            </button>
                            <button
                                className="cursor-pointer min-w-max py-[14px] px-5 lg:text-lg md:text-base text-sm 2xl:text-xl font-bold text-white rounded-[10px] relative group flex items-center bg-transparent text-white gap-x-[18px] font-Nunito font-bold 2xl:text-lg text-base"
                                name="button"
                            >
                                Learn more
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="transition-transform duration-300 group-hover:translate-x-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Animation spanning rows 1-2 */}
                    <div className="md:row-start-1 row-start-2 md:col-start-2 md:row-span-2 flex items-center order-1 w-full sm:h-full md:order-2 sm:mt-0">
                        <div className="max-w-[717px] h-[300px] md:h-[500px] z-[10] w-full flex items-center sm:pt-0 relative -top-[6px]">
                            <div
                                className="flex items-center justify-center w-full h-full origin-center"
                                style={{
                                    transform: isAnimVisible ? "scale(1)" : "scale(0)",
                                    opacity: isAnimVisible ? 1 : 0,
                                    transition: isAnimVisible
                                        ? "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.7s ease-out"
                                        : "transform 0.6s cubic-bezier(0.36, 0, 0.66, -0.56), opacity 0.6s ease-in",
                                }}
                            >
                                <ActiveComponent />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;