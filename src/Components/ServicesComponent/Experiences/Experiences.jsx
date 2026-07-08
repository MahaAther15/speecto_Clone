import React from 'react';

// Import local assets
import howWorkIcon from '../../../assets/asset/howWorkIcon.svg';
import howWorkIcon1 from '../../../assets/asset/howWorkIcon1.svg';
import howWorkIcon2 from '../../../assets/asset/howWorkIcon2.svg';
import howWorkIcon3 from '../../../assets/asset/howWorkIcon3.svg';
import howWeWork from '../../../assets/asset/howWeWork.webp';

const Experiences = () => {
    return (
        <div className="md:container __variable_b9c388">
            <style>{`
                .__variable_b9c388 {
                    --font-nunito: "__nunito_b9c388", "__nunito_Fallback_b9c388";
                }
            `}</style>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-0 gap-y-[40px] gap-x-[50px]">
                <div className="container md:max-w-none md:p-0 col-start-1 md:row-start-1 flex flex-col gap-[10px]">
                    <div className="flex text-primary2 items-center gap-[10px]">
                        <p className="text-sm font-medium font-Nunito  ">How Do We Do It.</p>
                        <div className="h-[1px] w-[40px] bg-primary2 content-['']"></div>
                    </div>
                    <h2 className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] text-xl font-bold font-Nunito">
                        Crafting Exceptional Digital Experiences: Our Process
                    </h2>
                    <p className="text-sm font-medium font-Nunito text-gray2">
                        We create exceptional digital experiences by understanding your business goals, user requirements, and product specifications. Our process involves selecting the best technology, creating user personas and journeys, developing information architecture and wireframes, and designing and launching your product.
                    </p>
                </div>
                <div className="flex flex-col gap-[30px] container md:max-w-none md:mt-[36px] md:p-0 md:col-start-1 md:row-start-2">
                    {/* Step 1: Strategy & Planning */}
                    <div className="flex gap-5">
                        <div className="relative flex items-center justify-center bg-buttontextGradient rounded-full min-w-[40px] min-h-[40px] md:min-w-[60px] max-h-[30px] md:max-h-[60px]">
                            <img 
                                alt="Strategy & Planning icon" 
                                src={howWorkIcon} 
                                width="30" 
                                height="30" 
                                decoding="async" 
                                data-nimg="1" 
                                className="w-[50%] object-cover" 
                                loading="lazy" 
                                style={{ color: "transparent" }} 
                            />
                            <div className="absolute w-full -z-10 h-full rounded-full bg-black/10 -top-[6px] -left-[6px]"></div>
                            <div className="absolute w-full -z-10 h-full rounded-full bg-black/10 -bottom-[6px] -right-[6px]"></div>
                        </div>
                        <div>
                            <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">
                                Strategy & Planning
                            </h3>
                            <p className="text-sm font-medium font-Nunito text-gray2 mt-[2px] sm:mt-[10px]">
                                We partner with our clients to understand their business goals and objectives, then create a customized strategy that aligns with their vision.
                            </p>
                        </div>
                    </div>

                    {/* Step 2: Design */}
                    <div className="flex gap-5">
                        <div className="relative flex items-center justify-center bg-buttontextGradient rounded-full min-w-[40px] min-h-[40px] md:min-w-[60px] max-h-[30px] md:max-h-[60px]">
                            <img 
                                alt="Design icon" 
                                src={howWorkIcon1} 
                                width="30" 
                                height="30" 
                                decoding="async" 
                                data-nimg="1" 
                                className="w-[50%] object-cover" 
                                loading="lazy" 
                                style={{ color: "transparent" }} 
                            />
                            <div className="absolute w-full -z-10 h-full rounded-full bg-black/10 -top-[6px] -left-[6px]"></div>
                            <div className="absolute w-full -z-10 h-full rounded-full bg-black/10 -bottom-[6px] -right-[6px]"></div>
                        </div>
                        <div>
                            <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">
                                Design
                            </h3>
                            <p className="text-sm font-medium font-Nunito text-gray2 mt-[2px] sm:mt-[10px]">
                                Our team uses the latest UI/UX practices to create stunning, user-friendly products that capture our clients' brands.
                            </p>
                        </div>
                    </div>

                    {/* Step 3: Development */}
                    <div className="flex gap-5">
                        <div className="relative flex items-center justify-center bg-buttontextGradient rounded-full min-w-[40px] min-h-[40px] md:min-w-[60px] max-h-[30px] md:max-h-[60px]">
                            <img 
                                alt="Development icon" 
                                src={howWorkIcon2} 
                                width="30" 
                                height="30" 
                                decoding="async" 
                                data-nimg="1" 
                                className="w-[50%] object-cover" 
                                loading="lazy" 
                                style={{ color: "transparent" }} 
                            />
                            <div className="absolute w-full -z-10 h-full rounded-full bg-black/10 -top-[6px] -left-[6px]"></div>
                            <div className="absolute w-full -z-10 h-full rounded-full bg-black/10 -bottom-[6px] -right-[6px]"></div>
                        </div>
                        <div>
                            <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">
                                Development
                            </h3>
                            <p className="text-sm font-medium font-Nunito text-gray2 mt-[2px] sm:mt-[10px]">
                                We develop the product with the latest technologies and frameworks to ensure the best performance and scalability.
                            </p>
                        </div>
                    </div>

                    {/* Step 4: Testing */}
                    <div className="flex gap-5">
                        <div className="relative flex items-center justify-center bg-buttontextGradient rounded-full min-w-[40px] min-h-[40px] md:min-w-[60px] max-h-[30px] md:max-h-[60px]">
                            <img 
                                alt="Testing icon" 
                                src={howWorkIcon3} 
                                width="30" 
                                height="30" 
                                decoding="async" 
                                data-nimg="1" 
                                className="w-[50%] object-cover" 
                                loading="lazy" 
                                style={{ color: "transparent" }} 
                            />
                            <div className="absolute w-full -z-10 h-full rounded-full bg-black/10 -top-[6px] -left-[6px]"></div>
                            <div className="absolute w-full -z-10 h-full rounded-full bg-black/10 -bottom-[6px] -right-[6px]"></div>
                        </div>
                        <div>
                            <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">
                                Testing
                            </h3>
                            <p className="text-sm font-medium font-Nunito text-gray2 mt-[2px] sm:mt-[10px]">
                                Our products undergo rigorous testing before launch to ensure they meet the highest standards of quality and functionality.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:col-start-2 md:mt-0 md:row-start-1 row-start-2 md:row-span-2 md:max-h-full max-h-[300px] flex">
                    <img 
                        alt="How we work process preview illustration" 
                        src={howWeWork} 
                        width="754" 
                        height="670" 
                        decoding="async" 
                        data-nimg="1" 
                        className="w-full object-cover" 
                        loading="lazy" 
                        style={{ color: "transparent" }} 
                    />
                </div>
            </div>
        </div>
    );
};

export default Experiences;