import React from "react";
import "./DevelopmentAnimation.css";

// Import your images (assuming they are in your src/assets folder)
import manImage from "../../../assets/asset/developmentMan.webp";
import bgImage from "../../../assets/asset/developmentBg.webp";

const GearSVG = ({ size = 40, color = "#c5c4c7ff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81A.485.485 0 0 0 13.92 2.4h-3.84c-.24 0-.43.17-.47.41L9.25 5.35c-.59.24-1.13.57-1.62.94L5.24 5.33c-.22-.08-.47 0-.59.22L2.74 8.87c-.13.21-.07.47.12.61l2.03 1.58C4.84 11.36 4.8 11.69 4.8 12s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zm-7.14 2.66c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const DevelopmentAnimation = () => {
  const barHeights = ["40%", "70%", "60%", "90%", "50%", "75%"];
  return (
    <div className="w-full flex items-center justify-center overflow-hidden md:overflow-visible">
      <div className="relative w-[270px] h-[160px] sm:w-[390px] sm:h-[220px] md:w-[420px] md:h-[235px] lg:w-[460px] lg:h-[260px] xl:w-[535px] xl:h-[300px] 2xl:w-[630px] 2xl:h-[355px] mx-auto flex items-center justify-center overflow-hidden md:overflow-visible">
        <div className="absolute top-[10px] left-[10px] sm:top-[5px] sm:left-[6px] md:static md:top-auto md:left-auto origin-top-left md:origin-center scale-[0.28] sm:scale-[0.42] md:scale-[0.45] lg:scale-[0.50] xl:scale-[0.58] 2xl:scale-[0.68] mx-auto">
          <section className="hero-container1 sm:hero-container fade-in">
            <div className="floating-card card-top-left">
              {/* Dark header with 3 white dots */}
              <div className="sda-cloud-hdr1">
                <span className="sda-cloud-dot" />
                <span className="sda-cloud-dot" />
                <span className="sda-cloud-dot" />
              </div>
              <div className="pulse-circle"></div>
            </div>

            <div className="card-top-right">
              <div className="chart-wrapper">
                {/* 1. The Bars */}
                {barHeights.map((h, i) => (
                  <div
                    key={i}
                    className="mt-10 mb-[-6px] bar"
                    style={{ height: h }}
                  ></div>
                ))}

                {/* 2. The Line and Dots (SVG) */}
                <svg
                  className="line-svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {/* Connecting Line */}
                  <polyline
                    className="line-path"
                    points="5,60 23,30 41,50 59,10 77,45 95,35"
                  />

                  {/* Data Dots */}
                  <circle className=" dot" cx="5" cy="60" r="4" />
                  <circle className=" dot" cx="23" cy="30" r="4" />
                  <circle className=" dot" cx="41" cy="50" r="4" />
                  <circle className=" dot" cx="59" cy="10" r="4" />
                  <circle className=" dot" cx="77" cy="45" r="4" />
                  <circle className=" dot" cx="95" cy="35" r="4" />
                </svg>
              </div>
            </div>
            {/* The empty panels layer */}
            <div className="w-[350px] h-[400px]">
              <img
                src={bgImage}
                alt="Workspace Background"
                className="relative  bg-layer"
              />

              <div className=" sda-small-gear sda-gear-top-right">
                <GearSVG size={42} color="#b9b9b9ff" />
              </div>

              {/* Bottom-left gear */}
              <div className="mb-[450px] sda-small-gear sda-gear-bottom-left">
                <GearSVG size={42} color="#cfcfd0ff" />
              </div>
              <div className="mb-[400px] sda-small-gear sda-gear-bottom-left">
                <GearSVG size={42} color="#cfcfd0ff" />
              </div>
              <div className="mb-[435px] ml-10  sda-small-gear sda-gear-bottom-left">
                <GearSVG size={46} color="#cfcfd0ff" />
              </div>
              <div className="mb-[389px] ml-40  sda-small-gear sda-gear-bottom-left">
                <GearSVG size={46} color="#cfcfd0ff" />
              </div>

              {/* Bottom-right gear */}
              <div className="mb-[420px] sda-small-gear sda-gear-bottom-right">
                <GearSVG size={48} color="#cfceceff" />
              </div>
            </div>

            {/* The characters and cycle arrow layer */}
            <img
              src={manImage}
              alt="Developers at work"
              className="relative character-layer"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentAnimation;
