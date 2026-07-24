import React from "react";
import "./SystemDesign.css";

import product from "../../../assets/asset/product.svg";
import roadmap from "../../../assets/asset/roadmap.svg";
import wireframe from "../../../assets/asset/wireframe.svg";
import design from "../../../assets/asset/design.svg";
import systemDesignLightBg from "../../../assets/asset/systemDesignLightBg.webp";
import systemDesignLightMan from "../../../assets/asset/systemDesignLightMan.webp";
import systemDesignMessage from "../../../assets/asset/systemDesignMessage.webp";
import systemDesignLine1 from "../../../assets/asset/systemDesignLine1.webp";
import systemDesignLine2 from "../../../assets/asset/systemDesignLine2.webp";
import systemDesignCloud1 from "../../../assets/asset/systemDesignCloud1.webp";
import gearSvg from "../../../assets/asset/gear.svg";
import blackGearSvg from "../../../assets/asset/gearblack.svg";

const SystemDesign = () => {
  return (
    <div className="flex flex-col items-center bg-white lg:px-1 pt-24 pb-12 lg:pt-40 lg:pb-20 w-full max-w-full overflow-hidden lg:overflow-visible">
      {/* HEADER */}
      <div className="relative h-[70px] w-6 flex justify-center">
        <div className="timeline-lineHeader3"></div>
      </div>

      <div className="flex flex-col items-center mb-2">
        <div className="relative  !text-white 2xl:text-2xl lg:text-xl sm:text-lg text-base font-Nunito font-bold rounded-full sm:w-[50px] sm:h-[50px] w-10 h-10 md:w-[60px] md:h-[60px]  flex  items-center justify-center  dark:text-black text-white bg-gradient-to-r from-[#554bac] to-[#8c99e3]  shadow-lg mb-4">
          3
        </div>

        <h2 className="lg:text-[28px] sm:text-2xl mt-3 2xl:text-[32px]    text-xl font-bold font-Nunito   !mb-10 !text-transparent   bg-clip-text lg:tracking-[0.2em]  tracking-[0.1em] 2xl:tracking-[0.3em] !uppercase  bg-gradient-to-r from-[#554bac] to-[#8c99e3]">
          SYSTEM DESIGN
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-0 max-w-6xl w-full max-w-full items-center lg:items-start relative overflow-visible">
        {/* LEFT COLUMN */}
        <div className="w-full mt-90 max-w-[360px] sm:max-w-[460px] lg:max-w-none lg:w-[50%] order-first lg:order-none relative lg:sticky lg:top-40 self-start flex items-start justify-center pb-6 sm:pb-8 lg:pb-0 pt-4 lg:pt-8 productDesignIllustrationWrapper">
          <div className="md:order-1 order-1 flex relative items-start systemDesignIllustrationOuterContainer w-full">
            <div className="sm:max-w-none max-w-[400px] mx-auto flex justify-center w-full">
              <div className="absolute mx-auto translate-y-[-65%] w-full opacity-0 h-full">
                <div className="flex items-center justify-center w-full h-full p-5 rounded-md animate-pulse opacity-50 dark:bg-lazyLoadBg bg-gray-300">
                  <div className="h-[5px] w-full bg-buttonborderGradient rounded-md animate-width-full2"></div>
                </div>
              </div>
              <div className="opacity-100 relative w-full max-w-[480px] xl:max-w-[540px] flex flex-col items-center mx-auto h-[250px] sm:mb-0 mb-[50px] sm:h-[358px] md:h-auto">
                <div className="absolute w-[80%] bottom-[15px] animate-card-float-fade z-0">
                  <div className="w-full h-full relative">
                    <div className="absolute 2xl:w-[120px] translate-x-[-45%] left-[45%] lg:w-[100px] w-20 rounded-lg overflow-hidden top-[-42px] xl:top-[-54px]">
                      <div>
                        <div className="px-2 w-full h-[10px] xl:h-[20px] bg-[#e1e1e1] dark:bg-[#656565] flex justify-end gap-1 items-center">
                          <span className="w-[4px] xl:w-[6px] h-[4px] xl:h-[6px] rounded-full bg-[#eeeeee] dark:bg-[#777777]"></span>
                          <span className="w-[4px] xl:w-[6px] h-[4px] xl:h-[6px] rounded-full bg-[#eeeeee] dark:bg-[#777777]"></span>
                          <span className="w-[4px] xl:w-[6px] h-[4px] xl:h-[6px] rounded-full bg-[#eeeeee] dark:bg-[#777777]"></span>
                        </div>
                        <div className="w-full flex flex-col justify-center gap-1 py-2 xl:py-3 xl:gap-2 px-2 dark:bg-[#828282] bg-[#e7e7e7]">
                          <div className="flex items-center w-full gap-1 animate-width-full">
                            <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#f0f0f0] dark:bg-[#9b9191]"></span>
                            <span className="w-[60%] h-[2px] xl:h-[3px] bg-[#f4f4f4] dark:bg-[#4c4c4c]"></span>
                            <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#f0f0f0] dark:bg-[#9b9191]"></span>
                          </div>
                          <div className="flex items-center w-full gap-1 animate-width-full">
                            <span className="w-[20%] h-[2px] xl:h-[3px]"></span>
                            <span className="w-[50%] h-[2px] xl:h-[3px] bg-[#e1e1e1] dark:bg-[#656565]"></span>
                            <span className="w-[30%] h-[2px] xl:h-[3px] bg-[#f0f0f0] dark:bg-[#9b9191]"></span>
                          </div>
                          <div className="flex items-center w-full gap-1 animate-width-full">
                            <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#f0f0f0] dark:bg-[#9b9191]"></span>
                            <span className="w-[60%] h-[2px] xl:h-[3px] bg-[#f0f0f0] dark:bg-[#9b9191]"></span>
                            <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#f4f4f4] dark:bg-[#4c4c4c]"></span>
                          </div>
                          <div className="flex items-center w-full gap-1 animate-width-full">
                            <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#e1e1e1] dark:bg-[#676767]"></span>
                            <span className="w-[60%] h-[2px] xl:h-[3px] bg-[#f0f0f0] dark:bg-[#9b9191]"></span>
                            <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#e1e1e1] dark:bg-[#676767]"></span>
                          </div>
                          <div className="flex items-center w-full gap-1 animate-width-full">
                            <span className="w-[20%] h-[2px] xl:h-[3px]"></span>
                            <span className="w-[50%] h-[2px] xl:h-[3px] bg-[#f5f5f5] dark:bg-[#4c4c4c]"></span>
                            <span className="w-[30%] h-[2px] xl:h-[3px] bg-[#f0f0f0] dark:bg-[#9b9191]"></span>
                          </div>
                          <div className="flex items-center w-full gap-1 animate-width-full">
                            <span className="w-[20%] h-[2px] xl:h-[3px]"></span>
                            <span className="w-[30%] h-[2px] xl:h-[3px] bg-[#e1e1e1] dark:bg-[#656565]"></span>
                            <span className="w-[30%] h-[2px] xl:h-[3px]"></span>
                          </div>
                          <div className="flex items-center w-full gap-1 animate-width-full">
                            <span className="w-[20%] h-[2px] xl:h-[3px]"></span>
                            <span className="w-[60%] h-[2px] xl:h-[3px] bg-[#f5f5f5] dark:bg-[#4c4c4c]"></span>
                            <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#f5f5f5] dark:bg-[#4c4c4c]"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img src={blackGearSvg} alt="Gear" className="animate-gear-float-spin z-10 absolute 2xl:w-[80px] lg:w-[60px] md:w-[50px] w-[40px] h-auto top-[15%] lg:right-[15%] right-[10%]" />
                    <img src={blackGearSvg} alt="Gear" className="animate-gear-float-spin z-10 absolute 2xl:w-[60px] lg:w-[40px] w-[30px] h-auto top-[60%] 2xl:left-[-30px] lg:left-[-20px] left-[-15px]" />
                    <img src={blackGearSvg} alt="Gear" className="animate-gear-float-spin-back z-10 absolute 2xl:w-[60px] lg:w-[40px] w-[30px] h-auto top-[35%] 2xl:right-[-30px] lg:right-[-20px] right-[-15px]" />
                    <div className="animate-pulse z-30 absolute 2xl:w-[50px] lg:w-[42px] sm:w-[36px] w-[30px] top-[75%] left-[-12px] sm:left-[-16px] lg:left-[-22px] 2xl:left-[-28px]">
                      <img src={systemDesignMessage} alt="System Design Message" className="w-full h-auto object-contain" />
                    </div>
                    <div className="max-w-[750px]">
                      <img src={systemDesignLightBg} alt="System Design Background" className="w-full h-auto object-contain" />
                    </div>
                  </div>
                </div>
                <div className="mt-auto w-[100%] z-0">
                  <div className="w-full relative z-20 flex justify-center bottom-[-60px] sm:bottom-0 xl:bottom-[-60px]">
                    <img src={systemDesignLightMan} alt="System Design Man" className=" mt-12 relative z-20 img w-full h-auto object-contain" />
                    <div className="2xl:h-[300px] md:h-[150px] h-[200px] sm:h-[220px] lg:h-[180px] xl:h-[270px] pt-[13px] pb-6 px-[16px] w-[70%] m-auto left-[15%] bottom-[33%] z-10 absolute bg-[#bac0c2] dark:bg-[#23292b] rounded-lg">
                      <div className="w-full h-full bg-[#f8f2ff] dark:bg-[#31293b] relative overflow-visible">
                        <div className="px-2 w-full h-[10%] bg-systemDesignIllustrationGrad flex gap-2 justify-end items-center">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#5f3a8e]"></span>
                          <span className="w-[6px] h-[6px] rounded-full bg-[#5f3a8e]"></span>
                          <span className="w-[6px] h-[6px] rounded-full bg-[#5f3a8e]"></span>
                        </div>
                        <div className="flex items-center justify-center w-full h-[90%]">
                          <div className="relative gear xl:w-[130px] xl:h-[130px] w-[70px] h-[70px] bg-[#9246f4] dark:bg-[#9d57f6] rounded-full flex justify-center items-center">
                            <div className="animate-wiggle33 bar xl:w-[170px] w-[85px] h-5 xl:h-10 bg-[#9246f4] dark:bg-[#9d57f6] absolute z-0"></div>
                            <div className="animate-wiggle33 bar xl:w-[170px] w-[85px] h-5 xl:h-10 bg-[#9246f4] dark:bg-[#9d57f6] absolute z-0 rotate-[60deg]"></div>
                            <div className="animate-wiggle33 bar xl:w-[170px] w-[85px] h-5 xl:h-10 bg-[#9246f4] dark:bg-[#9d57f6] absolute z-0 rotate-[120deg]"></div>
                            <div className="animate-wiggle44 text-black gear-inner xl:w-[70px] xl:h-[70px] w-[35px] h-[35px] bg-[#f6effe] dark:bg-[#342d3c] rounded-full flex justify-center items-center relative z-10">
                              <p className="text-[#6230a0] dark:text-[#9d57f6] font-extrabold text-sm xl:text-2xl uppercase tracking-wider">API</p>
                            </div>
                            <img src={blackGearSvg} alt="Gear" className="spin z-10 absolute 2xl:w-[45px] xl:w-[40px] md:w-[32px] w-[24px] h-auto 2xl:top-[-5px] top-[-2px] 2xl:right-[-45px] right-[-25px] xl:right-[-44px]" />
                            <img src={gearSvg} alt="Gear" className="spin-back z-10 absolute 2xl:w-[30px] xl:w-[24px] md:w-[20px] w-[16px] h-auto 2xl:top-[-35px] xl:top-[-28px] lg:top-[-22px] top-[-18px] 2xl:right-[-15px] right-[-10px] xl:right-[-19px]" />
                            <img src={blackGearSvg} alt="Gear" className="spin z-10 absolute 2xl:w-[45px] xl:w-[40px] md:w-[32px] w-[24px] h-auto 2xl:bottom-[-5px] bottom-[-2px] 2xl:left-[-45px] left-[-25px] xl:left-[-44px]" />
                            <img src={gearSvg} alt="Gear" className="spin-back z-10 absolute 2xl:w-[30px] xl:w-[24px] md:w-[20px] w-[16px] h-auto 2xl:bottom-[-35px] xl:bottom-[-28px] lg:bottom-[-22px] bottom-[-18px] 2xl:left-[-15px] left-[-10px] xl:left-[-19px]" />
                            <div></div>
                            <div className="absolute z-30 w-[16px] xl:w-[48px] left-[-16px] xl:left-[-48px] top-[12px] xl:top-[-5px]">
                              <img src={systemDesignLine1} alt="Line 1" className="relative z-30 img w-full h-auto object-contain block" />
                            </div>
                            <div className="absolute z-30 w-[32px] lg:w-[60px] xl:w-[80px] 2xl:w-[90px] right-[-32px] lg:right-[-60px] xl:right-[-80px] 2xl:right-[-90px] bottom-[-9px] lg:bottom-[-14px] xl:bottom-[-12px]">
                              <img src={systemDesignLine2} alt="Line 2" className="relative z-30 img w-full h-auto object-contain block" />
                            </div>
                          </div>
                        </div>
                        <div className="!z-30 absolute 2xl:w-[120px] left-[-6%] lg:left-[-11.5%] lg:w-[100px] sm:w-[85px] w-[70px] rounded-lg overflow-hidden top-[-42px] xl:top-[-54px] shadow-sm flex flex-col bg-[#c69ef9] dark:bg-[#5e398e]">
                          <div className="px-2 w-full h-[20px] bg-systemDesignIllustrationGrad flex justify-end gap-1 items-center shrink-0">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#cfadfb] dark:bg-[#654390]"></span>
                            <span className="w-[6px] h-[6px] rounded-full bg-[#cfadfb] dark:bg-[#654390]"></span>
                            <span className="w-[6px] h-[6px] rounded-full bg-[#cfadfb] dark:bg-[#654390]"></span>
                          </div>
                          <div className="w-full flex items-center justify-center py-2 lg:py-3 px-2 lg:px-3 grow">
                            <img src={systemDesignCloud1} alt="Cloud 1" className="relative z-10 animate-wiggle44 w-full h-auto object-contain block" />
                          </div>
                        </div>
                        <div className="!z-40 absolute 2xl:w-[120px] right-[-60px] lg:w-[100px] w-20 rounded-lg overflow-hidden top-[25%]">
                          <div className="px-2 w-full h-[10px] xl:h-[20px] bg-systemDesignIllustrationGrad flex justify-end gap-1 items-center">
                            <span className="w-[4px] xl:w-[6px] h-[4px] xl:h-[6px] rounded-full bg-[#cba6fa] dark:bg-[#5f3a8e]"></span>
                            <span className="w-[4px] xl:w-[6px] h-[4px] xl:h-[6px] rounded-full bg-[#cba6fa] dark:bg-[#5f3a8e]"></span>
                            <span className="w-[4px] xl:w-[6px] h-[4px] xl:h-[6px] rounded-full bg-[#cba6fa] dark:bg-[#5f3a8e]"></span>
                          </div>
                          <div className="w-full flex flex-col justify-center gap-1 py-2 xl:py-3 xl:gap-2 px-2 dark:bg-[#674790] bg-[#d6b7fd]">
                            <div className="flex items-center w-full gap-1 animate-pulse">
                              <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#a15df8] dark:bg-[#925fd3]"></span>
                              <span className="w-[60%] h-[2px] xl:h-[3px] bg-[#e5d2fd] dark:bg-[#433752]"></span>
                              <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#a15df8] dark:bg-[#925fd3]"></span>
                            </div>
                            <div className="flex items-center w-full gap-1 animate-pulse">
                              <span className="w-[20%] h-[2px] xl:h-[3px]"></span>
                              <span className="w-[50%] h-[2px] xl:h-[3px] bg-[#e1e1e1] dark:bg-[#1A2E35]"></span>
                              <span className="w-[30%] h-[2px] xl:h-[3px] bg-[#a15df8] dark:bg-[#925fd3]"></span>
                            </div>
                            <div className="flex items-center w-full gap-1 animate-pulse">
                              <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#a15df8] dark:bg-[#925fd3]"></span>
                              <span className="w-[60%] h-[2px] xl:h-[3px] bg-[#a15df8] dark:bg-[#925fd3]"></span>
                              <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#e5d2fd] dark:bg-[#433752]"></span>
                            </div>
                            <div className="flex items-center w-full gap-1 animate-pulse">
                              <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#e1e1e1] dark:bg-[#1A2E35]"></span>
                              <span className="w-[60%] h-[2px] xl:h-[3px] bg-[#a15df8] dark:bg-[#925fd3]"></span>
                              <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#e1e1e1] dark:bg-[#1A2E35]"></span>
                            </div>
                            <div className="flex items-center w-full gap-1 animate-pulse">
                              <span className="w-[20%] h-[2px] xl:h-[3px]"></span>
                              <span className="w-[50%] h-[2px] xl:h-[3px] bg-[#f5f5f5] dark:bg-[#433752]"></span>
                              <span className="w-[30%] h-[2px] xl:h-[3px] bg-[#a15df8] dark:bg-[#925fd3]"></span>
                            </div>
                            <div className="flex items-center w-full gap-1 animate-pulse">
                              <span className="w-[20%] h-[2px] xl:h-[3px]"></span>
                              <span className="w-[30%] h-[2px] xl:h-[3px] bg-[#646485] dark:bg-[#1A2E35]"></span>
                              <span className="w-[30%] h-[2px] xl:h-[3px]"></span>
                            </div>
                            <div className="flex items-center w-full gap-1 animate-pulse">
                              <span className="w-[60%] h-[2px] xl:h-[3px] bg-[#a564f8] dark:bg-[#865fb6]"></span>
                              <span className="w-[20%] h-[2px] xl:h-[3px] bg-[#efe4ff] dark:bg-[#433752]"></span>
                              <span className="w-[20%] h-[2px] xl:h-[3px]"></span>
                            </div>
                          </div>
                        </div>
                        <div className="!z-40 absolute 2xl:w-[120px] bg-[#ceacf8] dark:bg-[#43226e] right-[-60px] lg:w-[100px] w-20 rounded-lg overflow-hidden top-[85%]">
                          <div className="grid grid-cols-[30%_70%] h-full">
                            <div className="flex h-full flex-col bg-[#7952ab] dark:bg-[#3c156e] gap-2 py-2 px-[6px]">
                              <div className="animate-ups-Down w-full h-[6px] lg:h-[10px] bg-[#6028a9] dark:bg-[#7142ad]"></div>
                              <div className="animate-ups-Down w-full h-[6px] lg:h-[10px] bg-[#6028a9] dark:bg-[#7142ad]"></div>
                              <div className="animate-ups-Down w-full h-[6px] lg:h-[10px] bg-[#6028a9] dark:bg-[#7142ad]"></div>
                              <div className="animate-ups-Down w-full h-[6px] lg:h-[10px] bg-[#6028a9] dark:bg-[#7142ad]"></div>
                              <div className="animate-ups-Down w-full h-[6px] lg:h-[10px] bg-[#6028a9] dark:bg-[#7142ad]"></div>
                              <div className="animate-ups-Down w-full h-[6px] lg:h-[10px] bg-[#6028a9] dark:bg-[#7142ad]"></div>
                            </div>
                            <div className="flex flex-col bg-[#ceacf8] dark:bg-[#3c156e] gap-2 py-2 px-[6px]">
                              <div className="animate-width-full w-full h-[6px] lg:h-[10px] bg-[#964df5] flex gap-3 justify-between px-1">
                                <div className="flex items-center gap-2">
                                  <span className="w-[5px] h-[5px] bg-[#6b3ca7] rounded-full"></span>
                                  <span className="w-[5px] h-[5px] bg-[#8045cc] rounded-full"></span>
                                  <span className="w-[5px] h-[5px] bg-[#6a3da3] rounded-full"></span>
                                </div>
                              </div>
                              <div className="animate-width-full w-full h-[6px] lg:h-[10px] bg-[#964df5] flex gap-3 justify-between px-1">
                                <div className="flex items-center gap-2">
                                  <span className="w-[5px] h-[5px] bg-[#6b3ca7] rounded-full"></span>
                                  <span className="w-[5px] h-[5px] bg-[#8045cc] rounded-full"></span>
                                  <span className="w-[5px] h-[5px] bg-[#6a3da3] rounded-full"></span>
                                </div>
                              </div>
                              <div className="animate-width-full w-full h-[6px] lg:h-[10px] bg-[#964df5] flex gap-3 justify-between px-1">
                                <div className="flex items-center gap-2">
                                  <span className="w-[5px] h-[5px] bg-[#6b3ca7] rounded-full"></span>
                                  <span className="w-[5px] h-[5px] bg-[#8045cc] rounded-full"></span>
                                  <span className="w-[5px] h-[5px] bg-[#6a3da3] rounded-full"></span>
                                </div>
                              </div>
                              <div className="animate-width-full w-full h-[6px] lg:h-[10px] bg-[#964df5] flex gap-3 justify-between px-1">
                                <div className="flex items-center gap-2">
                                  <span className="w-[5px] h-[5px] bg-[#6b3ca7] rounded-full"></span>
                                  <span className="w-[5px] h-[5px] bg-[#8045cc] rounded-full"></span>
                                  <span className="w-[5px] h-[5px] bg-[#6a3da3] rounded-full"></span>
                                </div>
                              </div>
                              <div className="animate-width-full w-full h-[6px] lg:h-[10px] bg-[#964df5] flex gap-3 justify-between px-1">
                                <div className="flex items-center gap-2">
                                  <span className="w-[5px] h-[5px] bg-[#6b3ca7] rounded-full"></span>
                                  <span className="w-[5px] h-[5px] bg-[#8045cc] rounded-full"></span>
                                  <span className="w-[5px] h-[5px] bg-[#6a3da3] rounded-full"></span>
                                </div>
                              </div>
                              <div className="animate-width-full w-full h-[6px] lg:h-[10px] bg-[#964df5] flex gap-3 justify-between px-1">
                                <div className="flex items-center gap-2">
                                  <span className="w-[5px] h-[5px] bg-[#6b3ca7] rounded-full"></span>
                                  <span className="w-[5px] h-[5px] bg-[#8045cc] rounded-full"></span>
                                  <span className="w-[5px] h-[5px] bg-[#6a3da3] rounded-full"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------Middle dots--------------- */}
        <div className="hidden l-6 lg:flex relative h-[650px] w-14 justify-center">
          <div className="timeline-line3"></div>

          {/* dot */}
          <div className="absolute  top-36 w-5 h-5 bg-gradient-to-r from-[#554bac] to-[#8c99e3] rounded-full"></div>
          <div className="absolute mt-[597px] w-5 h-5 bg-gradient-to-r from-[#554bac] to-[#8c99e3] rounded-full"></div>
          <div className="absolute mt-[380px]  w-5 h-5 bg-gradient-to-r from-[#554bac] to-[#8c99e3] rounded-full"></div>
        </div>

        {/*------------------- Right section----------------------- */}
        <div className="w-full lg:w-[50%] flex flex-col items-start text-center lg:text-left gap-0">
          {/* Left part: stacked items */}
          <div className="flex flex-col flex-1">
            <div className="hidden lg:block bg-white w-full h-28"></div>

            {[
              {
                title: "Architectural design",
                text: "Our software architectural design services involve creating a high-level overview of a system's structure and organization to ensure scalability, modularity, maintainability, and performance.",
                img: roadmap,
              },
              {
                title: "Database design",
                text: "We specialize in software database design, creating efficient and scalable data storage solutions that ensure optimal performance, data integrity, and security.",
                img: wireframe,
              },
              {
                title: "Interface Design",
                text: "Interface Design creates the user-facing layouts, inputs, and feedback elements to ensure a clear, interactive, and user-friendly experience.",
                img: design,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative pl-4 my-5 w-full flex flex-col items-center lg:items-start"
              >
                {/* Image */}
                <div className="w-10 h-10  bg-gray-200 rounded-xl flex items-center justify-center  shadow-sm mx-auto lg:ml-0 lg:mr-auto">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className=" font-Nunito 2xl:text-2xl lg:text-xl  text-lg font-medium  2xl:!text-2xl !text-xl justify-start text-black mt-[10px] !font-bold text-opacity-100 undefined">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="  font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-center md:text-left  !font-bold mt-[10px] text-gray-500 undefined">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Middle: timeline dots */}
          <div className="flex ">
            <div className="ml-7 hidden l-6 lg:flex relative h-[500px] w-14 justify-center">
              <div className="timeline-line3-1"></div>

              {/* dot */}
              <div className="absolute  top-40 w-5 h-5 bg-gradient-to-r from-[#554bac] to-[#8c99e3] rounded-full"></div>
              <div className="absolute mt-[445px] w-5 h-5 bg-gradient-to-r from-[#554bac] to-[#8c99e3] rounded-full"></div>
            </div>

            <div className="flex flex-col flex-1">
              <div className="hidden lg:block bg-white w-auto h-28"></div>

              {[
                {
                  title: "APIs",
                  text: "Designing endpoints before development is important because it helps to establish a clear communication protocol between different components, facilitates efficient data exchange, and ensures that the system is scalable, flexible, and secure",
                  img: design,
                },
                {
                  title: "GraphQL",
                  text: "Designing GraphQL prior to development is of utmost importance as it guarantees the optimization of the GraphQL schema for optimal performance, consistency, and alignment with the needs of both the server and client, thereby resulting in a highly efficient, scalable, and maintainable system.",
                  img: product,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative pl-3 pt-4 my-5 w-full flex flex-col items-center lg:items-start"
                >
                  {/* Image */}
                  <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center shadow-sm mx-auto lg:ml-0 lg:mr-auto">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium 2xl:!text-2xl !text-xl justify-start text-black mt-[10px] !font-bold text-opacity-100">
                    {item.title}
                  </h3>

                  {/* Text */}
                  <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-center md:text-left !font-bold mt-[10px] text-gray-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDesign;
