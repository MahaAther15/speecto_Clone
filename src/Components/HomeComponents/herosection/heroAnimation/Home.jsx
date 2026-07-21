import React, { useState, useEffect } from "react";
import "./Home.css";

import bannerReactCircle1 from "../../../../assets/asset/bannerReactCircle1.webp";
import bannerReactCircle2 from "../../../../assets/asset/bannerReactCircle2.webp";
import bannerReactCircle3 from "../../../../assets/asset/bannerReactCircle3.webp";
import bannerReactCircle4 from "../../../../assets/asset/bannerReactCircle4.webp";
import reactLogo from "../../../../assets/asset/reactIcon2.webp";

import LaptopAnimation from "./Laptop.jsx";
import ManAnimation from "./Standing.jsx";
import ManLaptopAnimation from "./Laptopman.jsx";
import MobileAnimation from "./Mobile.jsx";
import CenterDisplay from "./CenterDisplay.jsx";

const Home = () => {
    const [hoveredName, setHoveredName] = useState(null);
    const [selectedName, setSelectedName] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 50);
    }, []);

    const nodes = [
        {
            id: 1,
            type: "component",
            name: "laptop",
            component: <LaptopAnimation />,
            img: bannerReactCircle1,
            angle: 0,
        },
        { id: 2, type: "large-white", angle: 14 },
        { id: 3, type: "orange-empty", angle: 45 },
        { id: 4, type: "tiny-white", angle: 68 },

        {
            id: 5,
            type: "component",
            name: "standing",
            component: <ManAnimation />,
            img: bannerReactCircle2,
            angle: 90,
        },
        { id: 6, type: "large-white", angle: 104 },
        { id: 7, type: "orange-empty", angle: 135 },
        { id: 8, type: "tiny-white", angle: 158 },

        {
            id: 9,
            type: "component",
            name: "laptopman",
            component: <ManLaptopAnimation />,
            img: bannerReactCircle3,
            angle: 180,
        },
        { id: 10, type: "large-white", angle: 194 },
        { id: 11, type: "tiny-white", angle: 225 },
        { id: 12, type: "orange-empty", angle: 248 },

        {
            id: 13,
            type: "component",
            name: "mobile",
            component: <MobileAnimation />,
            img: bannerReactCircle4,
            angle: 270,
        },
        { id: 14, type: "large-white", angle: 284 },
        { id: 15, type: "tiny-white", angle: 315 },
        { id: 16, type: "orange-empty", angle: 338 },
    ];

    const activeComponent = (() => {
        const activeName = hoveredName || selectedName;
        if (!activeName) return null;
        const matchedNode = nodes.find((node) => node.name === activeName);
        return matchedNode ? matchedNode.component : null;
    })();

    return (
        <div className="home-anim-wrapper flex w-full h-full items-center justify-center">
            <style>{`
        @keyframes waving-hand {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes waving-hand-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-waving-hand {
          animation: waving-hand 10s linear infinite;
        }
        .animate-waving-hand-reverse {
          animation: waving-hand-reverse 10s linear infinite;
        }
        .spin-paused {
          animation-play-state: paused !important;
        }
      `}</style>
            <div className="relative w-[330px] h-[330px] flex items-center justify-center scale-[0.80] sm:scale-[1.10] md:scale-[1.25] mx-auto origin-center">
                {/* Center Image */}
                <div className="absolute flex justify-center items-center rounded-full w-[80%] sm:w-[67%] h-[80%] sm:h-[67%] m-auto inset-0">
                    <CenterDisplay activeComponent={activeComponent} />
                </div>

                {/* 4 Revolving Icons */}
                <div className="absolute w-full h-full pointer-events-none">
                    <div
                        className={`pointer-events-none rounded-full w-full h-full z-[199] absolute flex items-center inset-0 m-auto justify-center animate-waving-hand ${(hoveredName || selectedName) ? "spin-paused" : ""
                            }`}
                    >
                        {nodes
                            .filter((node) => node.type === "component")
                            .map((node) => (
                                <div
                                    key={node.id}
                                    className="absolute"
                                    style={{
                                        transform: `rotate(${node.angle}deg)`,
                                    }}
                                >
                                    <div
                                        style={{
                                            transform: `translate(${isLoaded ? 132 : 0}px)`,
                                            transition: "transform 0.4s ease-out",
                                        }}
                                    >
                                        <div
                                            className={`animate-waving-hand-reverse ${(hoveredName || selectedName) ? "spin-paused" : ""
                                                }`}
                                        >
                                            <div
                                                style={{
                                                    transform: `rotate(-${node.angle}deg)`,
                                                }}
                                                className="flex items-center justify-center w-[50px] h-[50px]"
                                            >
                                                <div
                                                    className={`pointer-events-auto bg-[#0f0563] cursor-pointer rounded-full border-2 overflow-hidden flex hover:border-transparent transition-all duration-150 ease-in z-[999] justify-center items-center lg:w-[48px] lg:h-[48px] w-[34px] h-[34px] scale-100 hover:scale-125 ${selectedName === node.name
                                                        ? "border-[#fc5b3f] shadow-[0_0_10px_rgba(252,91,63,0.8)] scale-110"
                                                        : "border-white"
                                                        }`}
                                                    onMouseEnter={() => setHoveredName(node.name)}
                                                    onMouseLeave={() => setHoveredName(null)}
                                                    onClick={() =>
                                                        setSelectedName((prev) =>
                                                            prev === node.name ? null : node.name
                                                        )
                                                    }
                                                >
                                                    <img
                                                        src={node.img}
                                                        alt=""
                                                        className="rotate-90 z-[999] transition-all duration-200 ease-in flex-1 w-full h-full object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* 8 White Circles */}
                <div className="flex items-center w-full h-full z-[101] absolute inset-0 m-auto justify-center pointer-events-none">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
                        <div
                            key={idx}
                            className="absolute z-[101] w-4 md:w-8 h-4 md:h-8 bg-white rounded-full flex justify-center items-center"
                            style={{ transform: `rotate(${angle}deg) translate(132px)` }}
                        ></div>
                    ))}
                </div>

                {/* 16 Red/Orange Empty Circles */}
                <div className="flex z-[100] items-center w-full h-full absolute inset-0 m-auto justify-center pointer-events-none">
                    {Array.from({ length: 16 }, (_, i) => i * 22.5).map((angle, idx) => (
                        <div
                            key={idx}
                            className="absolute border bg-transparent border-[#eb4215] rounded-full flex justify-center items-center"
                            style={{
                                transform: `rotate(${angle}deg) translate(132px)`,
                                width: "2.68293%",
                                height: "2.68293%",
                            }}
                        ></div>
                    ))}
                </div>

                {/* 16 Tiny White Dots (filtered to not overlap with red circles) */}
                <div className="z-[50] flex justify-center items-center w-full h-full absolute inset-0 m-auto rounded-full pointer-events-none">
                    {Array.from({ length: 32 }, (_, i) => i * 11.25)
                        .filter((_, idx) => idx % 2 !== 0)
                        .map((angle, idx) => (
                            <div
                                key={`tiny-white-${idx}`}
                                className="absolute bg-white rounded-full flex justify-center items-center"
                                style={{
                                    transform: `rotate(${angle}deg) translate(132px)`,
                                    width: "1.01538%",
                                    height: "1.01538%",
                                }}
                            ></div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Home;