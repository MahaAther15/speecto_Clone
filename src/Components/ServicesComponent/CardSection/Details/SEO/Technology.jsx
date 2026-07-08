import React from 'react';

// Import technology logos
import reactLogo from '../../../../../assets/asset/react.png';
import googleLogo from '../../../../../assets/asset/google.png';
import tagLogo from '../../../../../assets/asset/tag.png';
import analyticsLogo from '../../../../../assets/asset/analytics.png';

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
                    <div className="z-[11]" style={{ maxWidth: "64px", maxHeight: "64px" }}>
                        <img 
                            src={reactLogo} 
                            className="object-cover w-full group-hover:filter group-hover:brightness-200 group-hover:grayscale-100 transition-all duration-300" 
                            alt="React" 
                        />
                    </div>
                </div>

                {/* Google */}
                <div className="group relative overflow-hidden flex p-6 items-center justify-center sm:p-[30px] xl:p-[50px] 2xl:min-w-[200px] 2xl:min-h-[200px] max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] xl:max-w-[180px] xl:max-h-[180px] 2xl:max-w-[200px] 2xl:max-h-[200px] bg-gray7/80 rounded-xl sm:rounded-[20px]">
                    <div id="1" className="absolute z-10 content-[''] transition-all duration-500 w-0 h-0 left-1/2 top-1/2 rounded-[50%] bg-buttontextGradient group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:top-0 group-hover:rounded-none"></div>
                    <div className="z-[11]" style={{ maxWidth: "64px", maxHeight: "64px" }}>
                        <img 
                            src={googleLogo} 
                            className="object-cover w-full group-hover:filter group-hover:brightness-200 group-hover:grayscale-100 transition-all duration-300" 
                            alt="Google Search Console" 
                        />
                    </div>
                </div>

                {/* Tag */}
                <div className="group relative overflow-hidden flex p-6 items-center justify-center sm:p-[30px] xl:p-[50px] 2xl:min-w-[200px] 2xl:min-h-[200px] max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] xl:max-w-[180px] xl:max-h-[180px] 2xl:max-w-[200px] 2xl:max-h-[200px] bg-gray7/80 rounded-xl sm:rounded-[20px]">
                    <div id="2" className="absolute z-10 content-[''] transition-all duration-500 w-0 h-0 left-1/2 top-1/2 rounded-[50%] bg-buttontextGradient group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:top-0 group-hover:rounded-none"></div>
                    <div className="z-[11]" style={{ maxWidth: "64px", maxHeight: "64px" }}>
                        <img 
                            src={tagLogo} 
                            className="object-cover w-full group-hover:filter group-hover:brightness-200 group-hover:grayscale-100 transition-all duration-300" 
                            alt="Google Tag Manager" 
                        />
                    </div>
                </div>

                {/* Analytics */}
                <div className="group relative overflow-hidden flex p-6 items-center justify-center sm:p-[30px] xl:p-[50px] 2xl:min-w-[200px] 2xl:min-h-[200px] max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] xl:max-w-[180px] xl:max-h-[180px] 2xl:max-w-[200px] 2xl:max-h-[200px] bg-gray7/80 rounded-xl sm:rounded-[20px]">
                    <div id="3" className="absolute z-10 content-[''] transition-all duration-500 w-0 h-0 left-1/2 top-1/2 rounded-[50%] bg-buttontextGradient group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:top-0 group-hover:rounded-none"></div>
                    <div className="z-[11]" style={{ maxWidth: "64px", maxHeight: "64px" }}>
                        <img 
                            src={analyticsLogo} 
                            className="object-cover w-full group-hover:filter group-hover:brightness-200 group-hover:grayscale-100 transition-all duration-300" 
                            alt="Google Analytics" 
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Technology;
