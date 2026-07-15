import React from "react";
import reactLogo from "../../../../assets/asset/reactIcon2.webp";

const CenterDisplay = ({ activeComponent }) => {
    return (
        <div className="absolute w-[170px] h-[170px] z-10 flex items-center justify-center pointer-events-none">
            {activeComponent ? (
                <div className="absolute w-[600px] h-[600px] flex items-center justify-center transform scale-[0.48] [&>div]:!scale-100 transition-all duration-300">
                    {activeComponent}
                </div>
            ) : (
                <img
                    src={reactLogo}
                    alt="center"
                    className="w-[170px] h-[170px] object-contain transition-all duration-300"
                />
            )}
        </div>
    );
};

export default CenterDisplay;