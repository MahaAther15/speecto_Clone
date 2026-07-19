import React from "react";
import reqVideo from "../../../assets/asset/req.mp4";
import "./Sections.css";

const RequirmentAnimation = () => {
  return (
    <div className="relative w-full h-[280px] sm:h-[380px] lg:w-[670px] lg:h-[720px] 2xl:w-[730px] 2xl:h-[780px] mx-auto translate-x-[-30px] sm:translate-x-[-50px] lg:translate-x-[-90px] 2xl:translate-x-[-110px] overflow-visible flex items-center justify-center font-sans">
      <div className="w-full h-full flex items-center justify-center">
        <video
          src={reqVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-[82%] ml-42 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default RequirmentAnimation;
