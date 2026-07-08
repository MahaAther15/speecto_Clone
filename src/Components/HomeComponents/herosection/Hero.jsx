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
    { component: LaptopAnimation, delay: 0 },
    { component: LaptopmanAnimation, delay: 1 },
    { component: MobileAnimation, delay: 2 },
    { component: StandingAnimation, delay: 3 },
    { component: OrbitAnimation, delay: 4 },
];

function Hero() {
    const [loopNum, setLoopNum] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [typewriterState, setTypewriterState] = useState("typing"); // "typing", "holding_full", "deleting", "holding_empty"
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [currentAnimIndex, setCurrentAnimIndex] = useState(0);

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
        const animInterval = setInterval(() => {
            setCurrentAnimIndex((prev) => (prev + 1) % ANIM_COMPONENTS.length);
        }, 5000);
        return () => clearInterval(animInterval);
    }, []);

    const renderAnimation = (index) => {
        switch (index) {
            case 0:
                return <LaptopAnimation />;
            case 1:
                return <MobileAnimation />;
            case 2:
                return <OrbitAnimation />;
            case 3:
                return <LaptopmanAnimation />;
            case 4:
                return <StandingAnimation />;
            default:
                return <LaptopAnimation />;
        }
    };

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

                {/* Two-column grid: text left, animation right */}
                <div className="relative items-center justify-center gap-y-0 grid grid-cols-1 md:grid-cols-[55%_45%] xl:grid-cols-[58%_42%] 2xl:grid-cols-[60%_35%] gap-x-[1%] sm:gap-x-[4%] h-max pt-2 pb-3 sm:pb-0 min-h-[calc(100vh-80px)]">

                    {/* Left Column: Heading + Description + Buttons */}
                    <div className="flex flex-col justify-center gap-6 lg:gap-8 z-10 w-full">
                        {/* Heading */}
                        <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-lg text-primary font-bold font-Nunito md:!text-left !font-Lemon !font-normal !text-center !text-white1 2xl:!text-5xl lg:!text-4xl sm:!text-3xl uppercase leading-tight">
                            <div>
                                {currentContent.prefix}
                                <span className={`!text-transparent !bg-clip-text ${currentContent.gradientClass}`}>
                                    {currentContent.highlight}
                                </span>
                                {currentContent.suffix}
                            </div>
                            <div className={`uppercase md:block hidden !text-transparent !bg-clip-text mt-[10px] mb-[10px] ${currentContent.gradientClass}`}>
                                <div className="react-reveal" style={{ opacity: 1 }}>
                                    <div className="Typewriter" data-testid="typewriter-wrapper">
                                        <span className="Typewriter__wrapper">{typedText}</span>
                                        <span className="Typewriter__cursor" style={{ visibility: "hidden" }}>|</span>
                                    </div>
                                </div>
                            </div>
                        </h1>

                        {/* Description + buttons */}
                        <div className="flex flex-col md:items-start items-center">
                            <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium md:!text-left !text-center !font-bold text-gray2 2xl:mb-[40px] mb-5 md:mb-8 line-clamp-3 md:line-clamp-none">
                                We are a team of tech enthusiasts dedicated to developing world-class
                                custom software solutions while fostering a culture of creativity,
                                inclusivity, and continuous learning.
                            </p>

                            <div className="flex mb-5 w-full flex-col items-center gap-8 md:flex-row">
                                <button
                                    onMouseEnter={() => setIsButtonHovered(true)}
                                    onMouseLeave={() => setIsButtonHovered(false)}
                                    className="relative group w-full py-[11px] px-[25px] font-bold rounded-[10px] sm:w-[70%] md:w-max transition-all duration-300 border-[1.5px] border-transparent cursor-pointer"
                                    style={{
                                        backgroundImage: isButtonHovered
                                            ? currentContent.gradientBg
                                            : `linear-gradient(#081533, #081533), ${currentContent.gradientBg}`,
                                        backgroundOrigin: "border-box",
                                        backgroundClip: "padding-box, border-box",
                                        boxShadow: isButtonHovered
                                            ? `0px 0px 50px 0px ${currentContent.glowColor}`
                                            : "none",
                                    }}
                                >
                                    <p
                                        className="text-base z-10 relative md:text-lg 2xl:text-xl transition-all duration-300"
                                        style={{
                                            backgroundImage: isButtonHovered ? "none" : currentContent.gradientBg,
                                            WebkitBackgroundClip: isButtonHovered ? "unset" : "text",
                                            WebkitTextFillColor: isButtonHovered ? "white" : "transparent"
                                        }}
                                    >
                                        Get Started
                                    </p>
                                </button>
                                <button className="btn-learn-more flex items-center text-white font-bold gap-2 transition-all duration-300 group">
                                    Learn more <span className="arrow-icon transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Animation */}
                    <div className="flex relative items-center justify-center w-full min-h-[300px] md:min-h-[500px] overflow-visible">
                        <div
                            key={currentAnimIndex}
                            className="animate-hero-fade-in scale-75 xl:scale-90 2xl:scale-100 w-full h-full flex items-center justify-center"
                            style={{
                                transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
                                opacity: 1,
                                transitionDelay: `${ANIM_COMPONENTS[currentAnimIndex].delay * 0.3}s`,
                            }}
                        >
                            <ActiveComponent />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;
