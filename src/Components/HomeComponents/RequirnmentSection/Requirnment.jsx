import React from "react";
import RequirmentAnimation from "./RequirmentAnimation.jsx";

// Import local assets
import clipVector from "../../../assets/asset/clipVector.webp";
import copyVectorLight from "../../../assets/asset/copyVectorLight.webp";
import copyVectorLight1 from "../../../assets/asset/copyVectorLight1.webp";
import messageVectorLight from "../../../assets/asset/messageVectorLight.webp";
import man1LightVector from "../../../assets/asset/man1LightVector.webp";
import plantVectorLight from "../../../assets/asset/plantVectorLight.webp";
import fman2LightVector from "../../../assets/asset/fman2LightVector.webp";
import windowVectorLight from "../../../assets/asset/windowVectorLight.webp";
import reqVideo from "../../../assets/asset/req.mp4";

// Import icons
import meetIcon from "../../../assets/asset/meet.svg";
import analysisIcon from "../../../assets/asset/analysis.svg";
import documentIcon from "../../../assets/asset/document.svg";
import checkIcon from "../../../assets/asset/check.svg";

const Requirement = () => {
  return (
    <div className="container relative developmentDesign w-full max-w-full overflow-hidden lg:overflow-visible">
      <div className="flex flex-col items-center">
        {/* req circle */}
        <div className="dark:bg-blueGradientBoxDark text-white bg-blueGradientBox relative 2xl:text-2xl lg:text-xl sm:text-lg text-base font-Nunito font-bold rounded-full sm:w-[50px] sm:h-[50px] w-10 h-10 md:w-[60px] md:h-[60px] flex items-center justify-center">
          1
        </div>
        <a title="link" href="/requirement-engineering">
          <h2 className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] text-xl font-bold font-Nunito text-center mt-[30px] !text-transparent dark:bg-blueGradientTextDark bg-blueGradientText bg-clip-text lg:tracking-[0.2em] tracking-[0.1em] 2xl:tracking-[0.3em] !uppercase">
            Requirements Engineering
          </h2>
        </a>
      </div>

      <div className="grid md:grid-cols-[39%_60%] lg:grid-cols-[46.29%_50.61%] gap-8 sm:gap-10 md:gap-[3.4%] lg:gap-[45px] items-start w-full max-w-full overflow-hidden lg:overflow-visible">
        {/* Left side: Animated Vectors / Graphical representation */}
        <div className="md:order-1 order-1 relative flex w-full h-full items-start pt-14 md:pt-[20%] lg:pt-[15%] testingContainer systemDesignIllustrationOuterContainer">
          <div className="sticky md:top-[20%] lg:top-[25%] xl:top-[calc(50%-130px)] 2xl:top-[calc(50%-100px)] w-full flex justify-center items-center">
            <video
              src={reqVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-[90%] ml-17 h-auto"
            ></video>
          </div>
        </div>

        {/* Right side: Steps Timeline */}
        <div className="order-2 w-full max-w-full">
          <div>
            {/* Placeholder Hidden Item 1 */}
            <div className="hidden md:block before:left-[4px] after:left-[4px] md:pt-[100px] before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block fadeInTimeLine">
              <div className="justify-start items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                <div className="activeTimelineBorder hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full activeTimelineBorder 2xl:mr-4 transition-all duration-700 undefined"></div>
                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 hidden justify-center w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                  <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="placeholder"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="items-center md:items-start 2xl:ml-[60px] md:ml-[52px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium 2xl:!text-2xl !text-xl justify-start text-black dark:text-white mt-[10px] !font-bold md:dark:text-opacity-50 md:text-opacity-50 text-opacity-100 undefined">
                  {" "}
                </h3>
                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-center md:text-left !font-bold mt-[10px] text-gray5 undefined">
                  {" "}
                </p>
              </div>
            </div>

            {/* Step 1: Elicitation */}
            <div className="before:left-[4px] after:left-[4px] null before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block after:dark:bg-blue-600 after:bg-blue-600 requirementTimeLine">
              <div className="justify-start items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                <div className="activeTimelineBorder md:block hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full activeTimelineBorder 2xl:mr-4 transition-all duration-700 undefined"></div>
                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 block justify-center w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                  <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                    <img
                      src={meetIcon}
                      alt="Elicitation icon"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="items-center md:items-start 2xl:ml-[60px] md:ml-[52px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium 2xl:!text-2xl !text-xl justify-start text-black dark:text-white mt-[10px] !font-bold md:dark:text-opacity-50 md:text-opacity-50 text-opacity-100 undefined">
                  Elicitation
                </h3>
                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-center md:text-left !font-bold mt-[10px] text-gray5 undefined">
                  This step involves identifying stakeholders and understanding
                  their needs.
                </p>
              </div>
            </div>

            {/* Step 2: Analysis & Suggestions */}
            <div className="before:left-[4px] after:left-[4px] null before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block after:dark:bg-blue-600 after:bg-blue-600 requirementTimeLine">
              <div className="justify-start items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                <div className="activeTimelineBorder md:block hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full activeTimelineBorder 2xl:mr-4 transition-all duration-700 undefined"></div>
                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 block justify-center w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                  <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                    <img
                      src={analysisIcon}
                      alt="Analysis icon"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="items-center md:items-start 2xl:ml-[60px] md:ml-[52px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium 2xl:!text-2xl !text-xl justify-start text-black dark:text-white mt-[10px] !font-bold md:dark:text-opacity-50 md:text-opacity-50 text-opacity-100 undefined">
                  Analysis &amp; Suggestions
                </h3>
                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-center md:text-left !font-bold mt-[10px] text-gray5 undefined">
                  We analyze requirements and suggest trending ideas and
                  features that can add value to products.
                </p>
              </div>
            </div>

            {/* Step 3: Document requirements */}
            <div className="before:left-[4px] after:left-[4px] null before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block after:dark:bg-blue-600 after:bg-blue-600 requirementTimeLine">
              <div className="justify-start items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                <div className="activeTimelineBorder md:block hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full activeTimelineBorder 2xl:mr-4 transition-all duration-700 undefined"></div>
                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 block justify-center w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                  <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                    <img
                      src={documentIcon}
                      alt="Document icon"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="items-center md:items-start 2xl:ml-[60px] md:ml-[52px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium 2xl:!text-2xl !text-xl justify-start text-black dark:text-white mt-[10px] !font-bold md:dark:text-opacity-50 md:text-opacity-50 text-opacity-100 undefined">
                  Document requirements
                </h3>
                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-center md:text-left !font-bold mt-[10px] text-gray5 undefined">
                  Document requirements in a clear and concise manner.
                </p>
              </div>
            </div>

            {/* Step 4: Verification and validation */}
            <div className="before:left-[4px] after:left-[4px] null before:hidden after:hidden relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block after:dark:bg-blue-600 after:bg-blue-600 requirementTimeLine">
              <div className="justify-start items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                <div className="activeTimelineBorder md:block hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full activeTimelineBorder 2xl:mr-4 transition-all duration-700 undefined"></div>
                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 block justify-center w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                  <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                    <img
                      src={checkIcon}
                      alt="Check icon"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="items-center md:items-start 2xl:ml-[60px] md:ml-[52px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium 2xl:!text-2xl !text-xl justify-start text-black dark:text-white mt-[10px] !font-bold md:dark:text-opacity-50 md:text-opacity-50 text-opacity-100 undefined">
                  Verification and validation
                </h3>
                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-center md:text-left !font-bold mt-[10px] text-gray5 undefined">
                  Requirement verification checks that the requirements are
                  correct, while requirement validation checks that the
                  requirements are suitable for the intended purpose.
                </p>
              </div>
            </div>

            {/* Placeholder Hidden Item 2 */}
            <div className="before:left-[4px] after:left-[4px] null before:hidden after:hidden md:before:block md:after:block relative before:absolute after:h-[calc(100%+30px)] before:h-[calc(100%+30px)] before:z-10 after:w-[2px] after:top-0 after:transition-all after:duration-700 after:absolute after:z-20 before:w-[1px] before:block hidden before:hidden after:hidden after:dark:bg-blue-600 after:bg-blue-600 requirementTimeLine">
              <div className="justify-start items-center flex 2xl:gap-8 md:gap-[35px] gap-0">
                <div className="activeTimelineBorder md:block hidden relative z-30 -ml-[5px] h-5 w-5 rounded-full activeTimelineBorder 2xl:mr-4 transition-all duration-700 undefined"></div>
                <div className="mx-auto md:mx-0 dark:bg-gray6 bg-gray7 block justify-center w-[50px] h-[50px] md:w-10 md:h-10 2xl:w-[50px] 2xl:h-[50px] rounded-[10px] flex justify-center items-center">
                  <div className="flex items-center justify-center md:max-w-[30px] sm:max-w-[20px]">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="placeholder"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="items-center md:items-start 2xl:ml-[60px] md:ml-[52px] flex flex-col 2xl:pb-[50px] lg:pb-9 pb-5 overflow-hidden">
                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium 2xl:!text-2xl !text-xl justify-start text-black dark:text-white mt-[10px] !font-bold md:dark:text-opacity-50 md:text-opacity-50 text-opacity-100 undefined"></h3>
                <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-center md:text-left !font-bold mt-[10px] text-gray5 undefined">
                  undefined
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirement;
