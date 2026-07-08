import React from 'react';
import productionLightBg from "../../../assets/asset/productionLightBg.webp";
import productionSearchIcon from "../../../assets/asset/productionSearchIcon.webp";
import productionGear1 from "../../../assets/asset/productionGear1.webp";
import productionGear2 from "../../../assets/asset/productionGear2.webp";
import productionVolume from "../../../assets/asset/productionVolume.webp";
import productionJumar from "../../../assets/asset/productionJumar.webp";
import productionWave from "../../../assets/asset/productionWave.webp";
import productionVideo from "../../../assets/asset/production.mp4";


const Production = () => {
    return (
        <div className="container relative">
            <div className='mx-auto 2xl:max-w-[1620px] lg:max-w-[1080px] max-w-[780px] flex flex-col 2xl:gap-[30px] gap-6 items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='w-[2px] h-[90px] dark:bg-greenGradientLineDark bg-greenGradientLine'></div>
                    <div className='dark:bg-greenGradientBoxDark text-white bg-greenGradientBox rounded-full w-[60px] h-[60px] flex items-center justify-center'>
                        6
                    </div>
                </div>
                <a title="link" href='/production'>
                    <h2 className='lg:text-[28px] sm:text-2xl 2xl:text-[32px] text-xl font-bold font-Nunito  !text-transparent dark:bg-greenGradientTextDark bg-greenGradientText bg-clip-text lg:tracking-[0.2em] tracking-[0.1em] 2xl:tracking-[0.3em] !uppercase'>
                        Production
                    </h2>
                </a>
                <p className=' font-Nunito 2xl:text-xl xl:text-lg text-base font-medium !font-bold text-gray5 text-center '>
                    Taking a product into production involves finalizing development, testing, preparing for deployment, and coordinating with operations and support teams. The process may vary based on the product and the organization's specific needs. Once completed, the product is released to the public for use.
                </p>
                {/* animation  block div */}
                <div className='flex justify-center items-center'>
                    <video
                        src={productionVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    ></video>
                </div>
            </div>
        </div>
    );
};

export default Production;