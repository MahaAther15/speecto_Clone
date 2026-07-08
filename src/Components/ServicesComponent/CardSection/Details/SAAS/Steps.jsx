import React from 'react';

// Import icons
import meetIcon from '../../../../../assets/asset/meet.svg';
import analysisIcon from '../../../../../assets/asset/analysis.svg';
import documentIcon from '../../../../../assets/asset/document.svg';
import checkIcon from '../../../../../assets/asset/check.svg';
import wireframeIcon from '../../../../../assets/asset/wireframe.svg';
import roadmapIcon from '../../../../../assets/asset/roadmap.svg';
import scrumIcon from '../../../../../assets/asset/scrum.svg';
import serviceIcon from '../../../../../assets/asset/serviceIcon2.svg'; // fallback for serviceIcon.svg
import howWorkIcon from '../../../../../assets/asset/howWorkIcon.svg';
import howWorkIcon2 from '../../../../../assets/asset/howWorkIcon2.svg';
import howWorkIcon3 from '../../../../../assets/asset/howWorkIcon3.svg';

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
                            <img alt="" src={meetIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Ideation and Research</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Create a roadmap outlining features and functionality. Prioritize based on importance and feasibility. Develop user personas and flows. Determine the required technology stack.</p>
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
                            <img alt="" src={analysisIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Conceptualization and Planning</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">We analyze requirements and suggest trending ideas and features that can add value to products.</p>
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
                            <img alt="" src={documentIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Minimum Viable Product (MVP) Development</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Identify core features necessary to solve the problem. Build a scaled-down version to deliver value and validate the concept. Gather feedback and iterate based on user input.</p>
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
                            <img alt="" src={checkIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Design</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Develop wireframes or prototypes for UI/UX design. Test and refine the design based on user feedback.</p>
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
                            <img alt="" src={wireframeIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Development</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Break down the roadmap into tasks. Implement front-end and back-end functionalities. Conduct code reviews and testing. Integrate third-party services or APIs.</p>
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
                            <img alt="" src={roadmapIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Deployment</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Set up infrastructure, servers, and databases. Deploy to a staging environment. Conduct load testing. Set up monitoring and logging systems.</p>
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
                            <img alt="" src={scrumIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Beta Testing and Feedback</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Release the product to a limited user group for feedback. Collect and analyze usage data. Make iterative improvements based on feedback.</p>
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
                            <img alt="" src={serviceIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Launch and Marketing</h3>
                        .               <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Develop a marketing plan. Create a website, landing pages, and documentation. Implement onboarding and support processes. Launch the product and acquire customers.</p>
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
                            <img alt="" src={howWorkIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Ongoing Improvement</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Continuously gather user feedback. Release updates and new features based on needs and trends. Monitor and optimize performance. Provide timely support.</p>
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
                            <img alt="" src={howWorkIcon2} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Customer Success and Support</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Offer ongoing customer support. Troubleshoot issues promptly. Engage with customers for feedback and feature requests. Ensure customer satisfaction and retention.</p>
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
                            <img alt="" src={howWorkIcon3} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Scalability and Expansion</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Plan for scaling infrastructure. Monitor performance and optimize scalability. Explore opportunities for expansion. Stay competitive and adapt to customer needs.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Steps;