import React from 'react'
import Navbar from '../navbar/Navbar'
import heroImage from '../../assets/asset/mobile5.svg'

export const Header = () => {
  return (
    <div className="relative min-h-screen bg-[#081533] text-white overflow-hidden flex flex-col">
      {/* Background Subtle Large Text */}
      <div className="absolute top-[18%] left-[2%] text-[10rem] md:text-[16rem] lg:text-[20rem] font-black text-white/[0.015] select-none pointer-events-none z-0 tracking-wider font-sans leading-none">
        TECH
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 pt-32 pb-12 lg:pt-40 lg:pb-24 flex-grow z-10 gap-10">
        {/* Left Content Column */}
        <div className="flex-1 text-left max-w-xl z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight uppercase font-sans">
            We develop <span className="text-[#FF2D7A]">high-performance</span>
            <br />
            mobile apps
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#FF2D7A] mt-2 mb-6 tracking-wide uppercase font-sans">
            App Development
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-Nunito leading-relaxed mb-10 max-w-lg">
            We are a team of tech enthusiasts dedicated to developing world-class custom software solutions while fostering a culture of creativity, inclusivity, and continuous learning.
          </p>
          <div className="flex items-center gap-6">
            <button className="border border-[#FF2D7A] hover:bg-[#FF2D7A]/10 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 cursor-pointer">
              Get Started
            </button>
            <a href="#learn-more" className="text-white hover:text-[#FF2D7A] transition-colors duration-300 flex items-center gap-2 font-semibold group cursor-pointer">
              Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Right Graphic Column */}
        <div className="flex-1 flex justify-center items-center z-10 relative">
          {/* Subtle glow behind the phone */}
          <div className="absolute w-72 h-72 bg-[#FF2D7A]/10 rounded-full blur-3xl -z-10"></div>
          <img 
            src={heroImage} 
            alt="Speecto App Development" 
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-[0_20px_50px_rgba(255,45,122,0.15)] animate-pulse"
            style={{ animationDuration: '6s' }}
          />
        </div>
      </div>
    </div>
  )
}


