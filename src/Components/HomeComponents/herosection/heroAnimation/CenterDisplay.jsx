import React from "react";
import reactLogo from "../../../../assets/asset/reactIcon2.webp";

const CenterDisplay = ({ activeComponent }) => {
    return (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            {activeComponent ? (
                <div
                    className="absolute w-full h-full flex items-center justify-center transition-all duration-300"
                    style={{
                        transform: "scale(0.45)", 
                        transformOrigin: "center center",
                    }}
                >
                    {activeComponent}
                </div>
            ) : (
                <img
                    src={reactLogo}
                    alt="center"
                    className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-contain transition-all duration-300 animate-pulse"
                />
            )}
        </div>
    );
};

export default CenterDisplay;
