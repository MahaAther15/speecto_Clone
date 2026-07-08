import React from 'react';

// Import technology logos
import reactLogo from '../../../../../assets/asset/react.png';
import reduxLogo from '../../../../../assets/asset/reduximg.png';
import iosLogo from '../../../../../assets/asset/ios.png';
import androidLogo from '../../../../../assets/asset/android.png';
import jsLogo from '../../../../../assets/asset/js.png';

const Technology = () => {
    return (
        <div className="container">
            <h2 className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] text-xl font-bold font-Nunito md:mb-[50px] mb-[20px]">
                Technologies
            </h2>
            <div className="flex flex-wrap gap-3 md:gap-[30px] lg:gap-[30px] 2xl:gap-[84px] h-full items-center md:justify-evenly">

                {/* React */}
                <div className="group relative overflow-hidden flex p-6 items-center justify-center sm:p-[30px] xl:p-[50px] 2xl:min-w-[200px] 2xl:min-h-[200px] max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] xl:max-w-[180px] xl:max-h-[180px] 2xl:max-w-[200px] 2xl:max-h-[200px] bg-gray7/80 rounded-xl sm:rounded-[20px]">
                    <div id="0" className="absolute z-10 content-[''] transition-all duration-500 w-0 h-0 left-1/2 top-1/2 rounded-[50%] bg-buttontextGradient group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:top-0 group-hover:rounded-none"></div>
                    <div className="z-[11]" style={{ maxWidth: "100px", maxHeight: "100px" }}>
                        <img
                            src={reactLogo}
                            className="object-cover w-full group-hover:filter group-hover:brightness-200 group-hover:grayscale-100 transition-all duration-300"
                            alt="React Native"
                        />
                    </div>
                </div>

                {/* Redux */}
                <div className="group relative overflow-hidden flex p-6 items-center justify-center sm:p-[30px] xl:p-[50px] 2xl:min-w-[200px] 2xl:min-h-[200px] max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] xl:max-w-[180px] xl:max-h-[180px] 2xl:max-w-[200px] 2xl:max-h-[200px] bg-gray7/80 rounded-xl sm:rounded-[20px]">
                    <div id="1" className="absolute z-10 content-[''] transition-all duration-500 w-0 h-0 left-1/2 top-1/2 rounded-[50%] bg-buttontextGradient group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:top-0 group-hover:rounded-none"></div>
                    <div className="z-[11]" style={{ maxWidth: "100px", maxHeight: "100px" }}>
                        <img
                            src={reduxLogo}
                            className="object-cover w-full group-hover:filter group-hover:brightness-200 group-hover:grayscale-100 transition-all duration-300"
                            alt="Redux"
                        />
                    </div>
                </div>

                {/* iOS */}
                <div className="group relative overflow-hidden flex p-6 items-center justify-center sm:p-[30px] xl:p-[50px] 2xl:min-w-[200px] 2xl:min-h-[200px] max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] xl:max-w-[180px] xl:max-h-[180px] 2xl:max-w-[200px] 2xl:max-h-[200px] bg-gray7/80 rounded-xl sm:rounded-[20px]">
                    <div id="2" className="absolute z-10 content-[''] transition-all duration-500 w-0 h-0 left-1/2 top-1/2 rounded-[50%] bg-buttontextGradient group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:top-0 group-hover:rounded-none"></div>
                    <div className="z-[11]" style={{ maxWidth: "100px", maxHeight: "100px" }}>
                        <img
                            src={iosLogo}
                            className="object-cover w-full group-hover:filter group-hover:brightness-200 group-hover:grayscale-100 transition-all duration-300"
                            alt="iOS"
                        />
                    </div>
                </div>

                {/* Android */}
                <div className="group relative overflow-hidden flex p-6 items-center justify-center sm:p-[30px] xl:p-[50px] 2xl:min-w-[200px] 2xl:min-h-[200px] max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] xl:max-w-[180px] xl:max-h-[180px] 2xl:max-w-[200px] 2xl:max-h-[200px] bg-gray7/80 rounded-xl sm:rounded-[20px]">
                    <div id="3" className="absolute z-10 content-[''] transition-all duration-500 w-0 h-0 left-1/2 top-1/2 rounded-[50%] bg-buttontextGradient group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:top-0 group-hover:rounded-none"></div>
                    <div className="z-[11]" style={{ maxWidth: "100px", maxHeight: "100px" }}>
                        <img
                            src={androidLogo}
                            className="object-cover w-full group-hover:filter group-hover:brightness-200 group-hover:grayscale-100 transition-all duration-300"
                            alt="Android"
                        />
                    </div>
                </div>

                {/* JS */}
                <div className="group relative overflow-hidden flex p-6 items-center justify-center sm:p-[30px] xl:p-[50px] 2xl:min-w-[200px] 2xl:min-h-[200px] max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] xl:max-w-[180px] xl:max-h-[180px] 2xl:max-w-[200px] 2xl:max-h-[200px] bg-gray7/80 rounded-xl sm:rounded-[20px]">
                    <div id="4" className="absolute z-10 content-[''] transition-all duration-500 w-0 h-0 left-1/2 top-1/2 rounded-[50%] bg-buttontextGradient group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:top-0 group-hover:rounded-none"></div>
                    <div className="z-[11]" style={{ maxWidth: "100px", maxHeight: "100px" }}>
                        <img
                            src={jsLogo}
                            className="object-cover w-full group-hover:filter group-hover:brightness-200 group-hover:grayscale-100 transition-all duration-300"
                            alt="JavaScript"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Technology;
