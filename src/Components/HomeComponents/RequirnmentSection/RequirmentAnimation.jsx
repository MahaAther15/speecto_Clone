import React from "react";
import womanStanding from "../../../assets/asset/fman2LightVector.webp";
import man1 from "../../../assets/asset/man1LightVector.webp";
import plant from "../../../assets/asset/plantVectorLight.webp";
import clip from "../../../assets/asset/clipVector.webp";
import chatBubble from "../../../assets/asset/contactUsAnimateMessage.webp";
import windowBlind from "../../../assets/asset/windowVectorLight.webp";
import paperLeft from "../../../assets/asset/copyVectorLight.webp";
import paperRight from "../../../assets/asset/copyVectorLight1.webp";
import "./Sections.css";

const RequirmentAnimation = () => {
  return (
    <div className="lg:w-1/2 relative lg:sticky lg:top-32 flex justify-center w-full overflow-hidden lg:overflow-visible">
      <div className="h-[230px] sm:h-[270px] md:h-[350px] mt-4 2xl:h-[410px] relative flex items-center justify-center 2xl:max-w-[650px] w-full lg:max-w-full md:max-w-[400px] sm:max-w-[350px] max-w-full opacity-100 overflow-hidden lg:overflow-visible">
        <div className="req-animation-scaler scale-[0.62] sm:scale-[0.78] md:scale-100 mx-auto origin-center">
          <div className="scene-wrapper">
            <div className="scene-container">
              {/* Background Elements */}
              <img
                src={windowBlind}
                className="lg:left-80 left-58 asset window-blind"
                alt="window blinds"
              />

              <img
                src={paperLeft}
                className="asset paper-left"
                alt="floating paper"
              />
              <img
                src={paperLeft}
                className="asset paper-left-top"
                alt="floating paper"
              />
              <img
                src={paperRight}
                className="asset top-40 left-[-40%] lg:paper-right"
                alt="floating paper"
              />

              {/* CSS Clock */}
              <div className="css-clock-s lg:css-clock">
                <div className="clock-hand minute"></div>
                <div className="clock-hand hour"></div>
              </div>

              <img
                src={chatBubble}
                className="chat-bubble bubble-left"
                alt="chat"
              />
              <img
                src={chatBubble}
                className="chat-bubble bubble-right"
                alt="chat"
              />

              <div className="giant-clipboard1 giant-clipboard">
                <img src={clip} className="clipboard-clip" alt="clip" />

                <div className="clipboard-paper">
                  <div className="placeholder-box-top"></div>

                  <div className="checklist-item">
                    <div className="lines">
                      <div className="checklist-line"></div>
                      <div className="checklist-line"></div>
                    </div>
                    <div className="checkbox checked">✓</div>
                  </div>
                  <div className="checklist-item">
                    <div className="lines">
                      <div className="checklist-line"></div>
                      <div className="checklist-line"></div>
                    </div>
                    <div className="checkbox checked">✓</div>
                  </div>
                  <div className="checklist-item">
                    <div className="lines">
                      <div className="checklist-line"></div>
                      <div className="checklist-line"></div>
                    </div>
                    <div className="checkbox checked"></div>
                  </div>
                  <div className="checklist-item">
                    <div className="lines">
                      <div className="checklist-line"></div>
                      <div className="checklist-line"></div>
                    </div>
                    <div className="checkbox checked"></div>
                  </div>

                  <div className="placeholder-box-bottom"></div>
                </div>
              </div>

              <img
                src={womanStanding}
                className="h-[140px] sm:h-[155px] left-20 top-55 lg:h-[200px] lg:left-[42%]
                lg:top-[38%] z-20 relative lg:asset lg:woman-standing"
                alt="woman standing"
              />
              <img
                src={man1}
                className="left-[-25%] bottom-7 h-[200px] sm:h-[230px] lg:h-[300px] lg:left-[7%]
                lg:top-[-23%] z-20 relative lg:asset lg:woman-standing"
                alt="man standing"
              />

              <img
                src={plant}
                className="bottom-15 right-70 w-[30px] sm:w-[36px] lg:w-auto
                lg:bottom-30 z-10 lg:left-[-2%]
                asset lg:plant1"
                alt="plant in vase"
              />

              <div className="mt-4 floor-lines">
                <div className="floor-line main"></div>
                <div className="floor-line shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirmentAnimation;
