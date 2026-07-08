import React from "react";

const Work = () => {
  return (
    <div className="container">
      <div className="max-w-[980px] 2xl:max-w-[1225px] m-auto flex flex-col gap-5">
        <h2 className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] text-xl font-bold font-Nunito !font-bold text-center 2xl:!text-2xl lg:!text-xl !text-lg text-black dark:text-white lg:tracking-[0.2em] tracking-[0.1em] 2xl:tracking-[0.3em] uppercase">
          How do we work
        </h2>
        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium mb-3 text-center dark:text-gray5 text-gray6">
          As a team, we work tirelessly to develop software solutions that are both innovative and dependable, empowering businesses to prosper and individuals to flourish.
        </p>
        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium font-bold text-center dark:text-gray5 text-gray6">
          Our meticulous and collaborative software development process delivers exceptional results, ensuring quality, reliability, and client satisfaction at every stage.
        </p>
      </div>
    </div>
  );
};

export default Work;