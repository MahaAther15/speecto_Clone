import React from "react";
import automatedGear1 from "../../../assets/asset/automatedGear1.webp";
import automatedGear2 from "../../../assets/asset/automatedGear2.webp";
import automatedLightBg from "../../../assets/asset/automatedLightBg.webp";
import automatedLightTrbine from "../../../assets/asset/automatedLightTrbine.webp";
import automatedCircle from "../../../assets/asset/automatedCircle.webp";
import automatedLaptop from "../../../assets/asset/automatedLaptop.webp";
import automatedSearch from "../../../assets/asset/automatedSearch.webp";
import deploymentVideo from "../../../assets/asset/Deployment.mp4";

const Deployment = () => {
    return (
        <div className="container relative">
            <div className="2xl:max-w-[1620px] lg:max-w-[1080px] max-w-[780px] mx-auto flex flex-col 2xl:gap-[30px] gap-6 items-center">

                {/* ── Section connector + badge ── */}
                <div className="flex flex-col items-center justify-center">
                    {/* Thin needle line — transparent top to solid bottom */}
                    <div
                        className="h-[90px] w-[2px]"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255,65,108,0) 0%, #ff4b2b 100%)',
                        }}
                    ></div>
                    {/* Circle badge */}
                    <div
                        className="text-white rounded-full w-[60px] h-[60px] flex items-center justify-center font-Nunito font-bold text-lg"
                        style={{ background: 'linear-gradient(135deg, #ff416c, #ff4b2b)' }}
                    >
                        7
                    </div>
                </div>



                {/* ── Title ── */}
                <a title="link" href="/automated-development">
                    <h2
                        className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] text-xl font-bold font-Nunito !text-transparent bg-clip-text lg:tracking-[0.2em] tracking-[0.1em] 2xl:tracking-[0.3em] !uppercase"
                        style={{ backgroundImage: "linear-gradient(90deg,#ff416c,#ff4b2b)" }}
                    >
                        Automated deployment
                    </h2>
                </a>

                {/* ── Description ── */}
                <p className=" font-Nunito 2xl:text-xl xl:text-lg text-base font-medium !font-bold text-gray5 text-center">
                    Automated deployment ensures a smoother and safer production process by streamlining deployment, reducing human error, and allowing for faster and more consistent releases. It can be achieved through continuous integration and delivery tools, leading to an efficient and reliable production process.
                </p>

                {/* ── Main Graphic ── */}
                <div className="flex justify-center items-center">
                    <video
                        src={deploymentVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>

            </div>
        </div>
    );
};

export default Deployment;