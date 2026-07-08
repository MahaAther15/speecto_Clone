import React from 'react';

const Info = () => {
  return (
    <div className="md:container grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="md:col-start-1">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 container md:p-0 md:max-w-none">
            <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium !font-bold">Get In Touch</p>
            <div className="flex flex-col gap-6 max-w-[273px] w-full">
              <div className="flex items-center gap-2">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Shop+71,+ALG+ID+Cards+t%2Fa+The+Lanyard,+75+Shelton+St,+London+WC2H+9JQ,+UK/@51.5149037,-0.1235842,17z/data=!3m1!4b1!4m6!3m5!1s0x487604ccab37652b:0x22220c3f07824033!8m2!3d51.5149037!4d-0.1235842!16s%2Fg%2F11ll1x_2x2?entry=ttu">
                  <p className="text-sm font-medium font-Nunito">71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:contactus@speecto.com">
                  <p className="text-sm font-medium font-Nunito">
                    <span className="underline">contactus@speecto.com</span>
                  </p>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:+442071757733">
                  <p className="text-sm font-medium font-Nunito">+442071757733</p>
                </a>
              </div>
            </div>
          </div>
          {/* Map Container - renders interactive Google Maps */}
          <div id="map" style={{ width: '100%', height: '330px', position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
            <iframe 
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9058444704043!2d-0.12615912336336338!3d51.51490367178497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab37652b%3A0x22220c3f07824033!2s75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div id="contactUs" className="md:col-start-2 row-start-1">
        <div className="container relative">
          <div className="max-w-[1030px] m-auto">
            <h2 className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] text-xl font-bold font-Nunito md:!hidden 2xl:mb-[50px] mb-10 text-center lg:tracking-[0.2em] tracking-[0.1em] 2xl:tracking-[0.3em] capitalize !text-transparent bg-buttontextGradient bg-clip-text">
              Let’s get started
            </h2>
            <div className="grid grid-cols-1 2xl:mt-[50px] lg:mt-10 sm:mt-8 mt-5">
              <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="w-full grid sm:grid-cols-2 2xl:gap-[50px] lg:gap-10 sm:gap-8 gap-5">
                  <div className="relative">
                    <div className="w-full h-max">
                      <p className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold dark:text-white text-black">Name</p>
                      <input type="text" name="name" className="rounded-[60px] 2xl:h-[60px] lg:h-[50px] h-10 dark:placeholder:text-gray6 placeholder:text-gray2 w-full border-[1.5px] bg-transparent dark:border-gray6 border-gray7 focus:outline-none 2xl:px-5 px-3" placeholder="Name" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full h-max">
                      <p className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold dark:text-white text-black">Email</p>
                      <input type="email" name="email" className="rounded-[60px] 2xl:h-[60px] lg:h-[50px] h-10 dark:placeholder:text-gray6 placeholder:text-gray2 w-full border-[1.5px] bg-transparent dark:border-gray6 border-gray7 focus:outline-none 2xl:px-5 px-3" placeholder="Email" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full h-max">
                      <p className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold dark:text-white text-black">Phone No.</p>
                      <input type="text" name="phoneNumber" className="rounded-[60px] 2xl:h-[60px] lg:h-[50px] h-10 dark:placeholder:text-gray6 placeholder:text-gray2 w-full border-[1.5px] bg-transparent dark:border-gray6 border-gray7 focus:outline-none 2xl:px-5 px-3" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full h-max">
                      <p className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold dark:text-white text-black">Subject</p>
                      <input type="text" name="subject" className="rounded-[60px] 2xl:h-[60px] lg:h-[50px] h-10 dark:placeholder:text-gray6 placeholder:text-gray2 w-full border-[1.5px] bg-transparent dark:border-gray6 border-gray7 focus:outline-none 2xl:px-5 px-3" placeholder="Subject" />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-max 2xl:mt-[50px] lg:mt-10 sm:mt-8 mt-5">
                    <p className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold dark:text-white text-black">Your Message</p>
                    <textarea name="message" className="!bg-transparent border-[1.5px] dark:!border-gray6 !border-gray7 dark:placeholder:text-gray6 placeholder:text-gray2 rounded-xl italic w-full h-full focus:outline-none text-gray1 2xl:px-5 px-3 bg-gray4 min-h-[100px] pt-3" placeholder="Write your message..."></textarea>
                  </div>
                </div>
                <div className="flex justify-center items-center !items-start !justify-start">
                  <button type="submit" className="relative overflow-hidden group rounded-xl sm:text-base text-sm lg:text-lg 2xl:text-xl font-bold w-max h-max mx-auto p-[2px] bg-buttontextGradient md:min-w-0 min-w-full 2xl:mt-24 lg:mt-14 md:mt-10 mt-5">
                    <div className="rounded-[10px] w-full flex items-center justify-center bg-lightBg dark:bg-darkBg !bg-white dark:!bg-darkBg">
                      <div className="flex z-[3] relative !text-transparent group-hover:!text-white group-hover:!bg-white !bg-clip-text bg-buttontextGradient py-2 sm:py-[11px] px-5 sm:px-[25px]">Submit</div>
                    </div>
                    <div className="absolute z-[1] left-0 top-0 content-[' '] h-full bg-darkBg transition-all duration-300 bg-buttontextGradient group-hover:w-full w-0"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
