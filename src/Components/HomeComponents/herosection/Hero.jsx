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
    { component: LaptopAnimation,  name: "laptop",    yOffset: 0   },
    { component: MobileAnimation,  name: "mobile",    yOffset: -10 },
    { component: StandingAnimation,name: "standing",  yOffset: 10  },
    { component: LaptopmanAnimation,name:"laptopman", yOffset: 0   },
    { component: OrbitAnimation,   name: "orbit",     yOffset: -16 },
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
    const activeYOffset   = ANIM_COMPONENTS[currentAnimIndex].yOffset;

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

                    {/* Row 1: Heading and Description */}
                    <div className="md:col-start-1 row-start-1 md:text-left text-center self-center">
                        <h1 className="2xl:text-5xl lg:text-4xl font-Nunito md:text-3xl text-2xl text-primary font-bold !text-white flex items-center justify-center md:justify-start uppercase">
                            Our <span className="!text-transparent bg-buttontextGradient bg-clip-text ml-2">Services</span> 
                        </h1>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-white mt-3 md:mt-5">
                            we offer a comprehensive range of IT solutions to meet your business needs. From Requirement Engineering, development and Product design to cloud computing and Testing, our experienced team is here to provide expert guidance and deliver innovative solutions.
                        </p>
                    </div>

                    {/* Row 2 (mobile row 3): Contact Button */}
                    <div className="md:col-start-1 md:row-start-2 row-start-3 w-full mt-5 md:mt-0">
                        <a href="/contact">
                            <button className="relative overflow-hidden group rounded-xl sm:text-base text-sm lg:text-lg 2xl:text-xl font-bold w-max h-max mx-auto md:mx-0 p-[2px] bg-buttontextGradient md:min-w-0 min-w-full">
                                <div className="rounded-[10px] w-full flex items-center justify-center bg-lightBg dark:bg-darkBg !text-xl capitalize !font-bold shadow-buttonShadow">
                                    <div className="flex z-[3] relative !text-transparent group-hover:!text-white group-hover:!bg-white !bg-clip-text bg-buttontextGradient py-2 sm:py-[11px] px-5 sm:px-[25px]">
                                        Contact Us
                                    </div>
                                </div>
                                <div className="absolute z-[1] left-0 top-0 content-[' '] h-full bg-darkBg transition-all duration-300 bg-buttontextGradient group-hover:w-full w-0"></div>
                            </button>
                        </a>
                    </div>

                    {/* Right Column: Animation spanning rows 1-2 */}
                    <div className="md:row-start-1 row-start-2 md:col-start-2 md:row-span-2 flex items-center order-1 w-full sm:h-full md:order-2 sm:mt-0">
                        <div
                            className="max-w-[717px] h-[300px] md:h-[500px] z-[10] w-full"
                            style={{ position: "relative" }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: isAnimVisible
                                        ? "translate(-50%, -50%) scale(1)"
                                        : "translate(-50%, -50%) scale(0)",
                                    opacity: isAnimVisible ? 1 : 0,
                                    transition: isAnimVisible
                                        ? "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.7s ease-out"
                                        : "transform 0.6s cubic-bezier(0.36, 0, 0.66, -0.56), opacity 0.6s ease-in",
                                    transformOrigin: "center center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <div style={{ transform: `translateY(${activeYOffset}px)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <ActiveComponent />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;