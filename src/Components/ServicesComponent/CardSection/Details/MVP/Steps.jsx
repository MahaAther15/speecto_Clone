import React from 'react';

// Import icons
import meetIcon from '../../../../../assets/asset/meet.svg';
import documentIcon from '../../../../../assets/asset/document.svg';
import codeIcon from '../../../../../assets/asset/code.svg';
import howWorkIcon from '../../../../../assets/asset/howWorkIcon.svg';
import serviceIcon2 from '../../../../../assets/asset/serviceIcon2.svg';
import scrumIcon from '../../../../../assets/asset/scrum.svg';
import howWorkIcon1 from '../../../../../assets/asset/howWorkIcon1.svg';
import howWorkIcon2 from '../../../../../assets/asset/howWorkIcon2.svg';
import howWorkIcon3 from '../../../../../assets/asset/howWorkIcon3.svg';
import routeIcon from '../../../../../assets/asset/route.svg';
import serviceIcon5 from '../../../../../assets/asset/serviceIcon5.svg';

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
                            <img alt="Ideation and Conceptualization" src={meetIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Ideation and Conceptualization</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Identify the problem or need. Brainstorm and generate ideas. Define core features for the minimum viable solution.</p>
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
                            <img alt="Market Research and Analysis" src={documentIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Market Research and Analysis</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Conduct market research. Understand target audience and competition. Analyze existing solutions for unique selling points.</p>
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
                            <img alt="User Experience (UX) Design" src={codeIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">User Experience (UX) Design</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Develop wireframes and prototypes. Design intuitive and user-friendly interactions. Focus on the core user journey and key functionalities.</p>
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
                            <img alt="Technical Feasibility Assessment" src={howWorkIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Technical Feasibility Assessment</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Evaluate technical requirements and feasibility. Assess technology stack and infrastructure. Consider scalability and integration needs.</p>
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
                            <img alt="Feature Prioritization and Scope Definition" src={serviceIcon2} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Feature Prioritization and Scope Definition</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Prioritize features based on user needs and market demand. Define a minimum set of features. Allocate resources and manage the timeline.</p>
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
                            <img alt="Agile Development Iterations" src={scrumIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Agile Development Iterations</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Adopt an agile approach. Break development into smaller sprints. Develop and test iterations. Enable flexibility and quick feedback loops.</p>
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
                            <img alt="Minimal Viable Design and Branding" src={howWorkIcon1} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Minimal Viable Design and Branding</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Create simple and effective design. Establish visual identity. Focus on essential elements for usability and user experience.</p>
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
                            <img alt="Development and Testing" src={howWorkIcon2} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Development and Testing</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Implement core features using the chosen technology stack. Conduct rigorous testing. Address bugs and issues for quality improvement.</p>
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
                            <img alt="User Feedback and Iterative Refinement" src={howWorkIcon3} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">User Feedback and Iterative Refinement</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Release to the limited user group. Gather feedback and insights. Iterate and refine based on user input and market validation.</p>
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
                            <img alt="Launch and Market Validation" src={routeIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Launch and Market Validation</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Prepare for a wider launch. Develop a marketing strategy. Monitor user adoption and engagement. Refine based on feedback and market response.</p>
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
                            <img alt="Continuous Development and Scaling" src={serviceIcon5} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Continuous Development and Scaling</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Gather insights from user feedback and market trends. Continuously improve and expand based on user needs and business goals. Scale with new features over time.</p>
                    </div>
                </div>
                <hr className="border-t border-gray-200/50 dark:border-white/10" />

                {/* Summary Info */}
                <div className="flex 2xl:gap-5 gap-3 items-start">
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Please note that the MVP development process is flexible and can be tailored based on specific project requirements and constraints. The focus is on delivering a minimally viable solution while continuously refining and scaling based on user feedback and market dynamics.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Steps;
