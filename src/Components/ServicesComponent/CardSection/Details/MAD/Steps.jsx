import React from 'react';

// Import icons
import meetIcon from '../../../../../assets/asset/meet.svg';
import documentIcon from '../../../../../assets/asset/document.svg';
import pathIcon from '../../../../../assets/asset/path.svg';
import productIcon from '../../../../../assets/asset/product.svg';
import serviceIcon3 from '../../../../../assets/asset/serviceIcon3.svg';
import serviceIcon4 from '../../../../../assets/asset/serviceIcon4.svg';
import howWorkIcon3 from '../../../../../assets/asset/howWorkIcon3.svg';
import howWorkIcon2 from '../../../../../assets/asset/howWorkIcon2.svg';
import howWorkIcon from '../../../../../assets/asset/howWorkIcon.svg';
import roadmapIcon from '../../../../../assets/asset/roadmap.svg';
import scrumIcon from '../../../../../assets/asset/scrum.svg';

const Steps = () => {
    return (
        <div className="container md:mb-[50px]">
            <div className="max-w-[1200px] mr-auto flex flex-col 2xl:gap-[50px] gap-3 sm:gap-5 md:gap-[30px]">
                
                {/* Step 1 */}
                <div className="flex 2xl:gap-5 gap-3 items-start">
                    <div className="rounded-[14px] mt-1 text-white max-h-[60px] min-h-[40px] min-w-[40px] xl:min-w-[50px] xl:min-h-[50px] 2xl:min-w-[60px] 2xl:min-h-[60px] flex items-center justify-center bg-buttontextGradient">
                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                            </span>
                            <img alt="Conceptualization" src={meetIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Conceptualization</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Identify the app's purpose and goals. Conduct market research. Define core features.</p>
                    </div>
                </div>
                <hr className="border-t border-gray-200/50 dark:border-white/10" />

                {/* Step 2 */}
                <div className="flex 2xl:gap-5 gap-3 items-start">
                    <div className="rounded-[14px] mt-1 text-white max-h-[60px] min-h-[40px] min-w-[40px] xl:min-w-[50px] xl:min-h-[50px] 2xl:min-w-[60px] 2xl:min-h-[60px] flex items-center justify-center bg-buttontextGradient">
                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                            </span>
                            <img alt="Planning and Design" src={documentIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Planning and Design</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Create a project plan and timeline. Develop wireframes and prototypes. Design UI/UX elements.</p>
                    </div>
                </div>
                <hr className="border-t border-gray-200/50 dark:border-white/10" />

                {/* Step 3 */}
                <div className="flex 2xl:gap-5 gap-3 items-start">
                    <div className="rounded-[14px] mt-1 text-white max-h-[60px] min-h-[40px] min-w-[40px] xl:min-w-[50px] xl:min-h-[50px] 2xl:min-w-[60px] 2xl:min-h-[60px] flex items-center justify-center bg-buttontextGradient">
                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                            </span>
                            <img alt="App Architecture" src={pathIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">App Architecture</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Choose the technology stack and platform. Define the app's architecture and data flow. Plan third-party integrations.</p>
                    </div>
                </div>
                <hr className="border-t border-gray-200/50 dark:border-white/10" />

                {/* Step 4 */}
                <div className="flex 2xl:gap-5 gap-3 items-start">
                    <div className="rounded-[14px] mt-1 text-white max-h-[60px] min-h-[40px] min-w-[40px] xl:min-w-[50px] xl:min-h-[50px] 2xl:min-w-[60px] 2xl:min-h-[60px] flex items-center justify-center bg-buttontextGradient">
                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                            </span>
                            <img alt="Front-End Development" src={productIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Front-End Development</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Implement the app's UI using a programming language. Ensure responsiveness and usability. Integrate APIs.</p>
                    </div>
                </div>
                <hr className="border-t border-gray-200/50 dark:border-white/10" />

                {/* Step 5 */}
                <div className="flex 2xl:gap-5 gap-3 items-start">
                    <div className="rounded-[14px] mt-1 text-white max-h-[60px] min-h-[40px] min-w-[40px] xl:min-w-[50px] xl:min-h-[50px] 2xl:min-w-[60px] 2xl:min-h-[60px] flex items-center justify-center bg-buttontextGradient">
                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                            </span>
                            <img alt="Back-End Development" src={serviceIcon3} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Back-End Development</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Build server-side components and infrastructure. Set up databases. Integrate external services.</p>
                    </div>
                </div>
                <hr className="border-t border-gray-200/50 dark:border-white/10" />

                {/* Step 6 */}
                <div className="flex 2xl:gap-5 gap-3 items-start">
                    <div className="rounded-[14px] mt-1 text-white max-h-[60px] min-h-[40px] min-w-[40px] xl:min-w-[50px] xl:min-h-[50px] 2xl:min-w-[60px] 2xl:min-h-[60px] flex items-center justify-center bg-buttontextGradient">
                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                            </span>
                            <img alt="Integration and Testing" src={serviceIcon4} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Integration and Testing</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Integrate front-end and back-end components. Conduct comprehensive testing. Fix issues and bugs.</p>
                    </div>
                </div>
                <hr className="border-t border-gray-200/50 dark:border-white/10" />

                {/* Step 7 */}
                <div className="flex 2xl:gap-5 gap-3 items-start">
                    <div className="rounded-[14px] mt-1 text-white max-h-[60px] min-h-[40px] min-w-[40px] xl:min-w-[50px] xl:min-h-[50px] 2xl:min-w-[60px] 2xl:min-h-[60px] flex items-center justify-center bg-buttontextGradient">
                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                            </span>
                            <img alt="Deployment to App Stores" src={howWorkIcon3} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Deployment to App Stores</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Prepare an app for submission. Follow app store guidelines. Create descriptions and promotional materials.</p>
                    </div>
                </div>
                <hr className="border-t border-gray-200/50 dark:border-white/10" />

                {/* Step 8 */}
                <div className="flex 2xl:gap-5 gap-3 items-start">
                    <div className="rounded-[14px] mt-1 text-white max-h-[60px] min-h-[40px] min-w-[40px] xl:min-w-[50px] xl:min-h-[50px] 2xl:min-w-[60px] 2xl:min-h-[60px] flex items-center justify-center bg-buttontextGradient">
                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                            </span>
                            <img alt="User Acceptance Testing (UAT)" src={howWorkIcon2} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">User Acceptance Testing (UAT)</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Release app to limited user groups. Gather feedback. Refine based on user input.</p>
                    </div>
                </div>
                <hr className="border-t border-gray-200/50 dark:border-white/10" />

                {/* Step 9 */}
                <div className="flex 2xl:gap-5 gap-3 items-start">
                    <div className="rounded-[14px] mt-1 text-white max-h-[60px] min-h-[40px] min-w-[40px] xl:min-w-[50px] xl:min-h-[50px] 2xl:min-w-[60px] 2xl:min-h-[60px] flex items-center justify-center bg-buttontextGradient">
                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                            </span>
                            <img alt="Silent and Force Updates" src={howWorkIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Silent and Force Updates</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Implement silent updates to deliver updates seamlessly without user interaction. Implement force updates to ensure users are using the latest version and benefit from security enhancements and bug fixes.</p>
                    </div>
                </div>
                <hr className="border-t border-gray-200/50 dark:border-white/10" />

                {/* Step 10 */}
                <div className="flex 2xl:gap-5 gap-3 items-start">
                    <div className="rounded-[14px] mt-1 text-white max-h-[60px] min-h-[40px] min-w-[40px] xl:min-w-[50px] xl:min-h-[50px] 2xl:min-w-[60px] 2xl:min-h-[60px] flex items-center justify-center bg-buttontextGradient">
                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                            </span>
                            <img alt="Launch and Marketing" src={roadmapIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Launch and Marketing</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Develop a marketing strategy. Create landing pages and screenshots. Execute the launch plan.</p>
                    </div>
                </div>
                <hr className="border-t border-gray-200/50 dark:border-white/10" />

                {/* Step 11 */}
                <div className="flex 2xl:gap-5 gap-3 items-start">
                    <div className="rounded-[14px] mt-1 text-white max-h-[60px] min-h-[40px] min-w-[40px] xl:min-w-[50px] xl:min-h-[50px] 2xl:min-w-[60px] 2xl:min-h-[60px] flex items-center justify-center bg-buttontextGradient">
                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
                            </span>
                            <img alt="Maintenance and Updates" src={scrumIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Maintenance and Updates</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Monitor performance and user feedback. Provide regular updates and bug fixes. Analyze user behavior and market trends. Send silent and force updates when necessary.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Steps;
