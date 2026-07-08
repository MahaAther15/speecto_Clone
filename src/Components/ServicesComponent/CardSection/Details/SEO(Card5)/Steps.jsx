import React from 'react';

// Import icons
import analysisIcon from '../../../../../assets/asset/analysis.svg';
import apiIcon from '../../../../../assets/asset/api.svg';
import codeIcon from '../../../../../assets/asset/code.svg';
import routeIcon from '../../../../../assets/asset/route.svg';
import scrumIcon from '../../../../../assets/asset/scrum.svg';
import serviceIcon6 from '../../../../../assets/asset/serviceIcon6.svg';
import serviceIcon3 from '../../../../../assets/asset/serviceIcon3.svg';
import serviceIcon2 from '../../../../../assets/asset/serviceIcon2.svg';
import serviceIcon4 from '../../../../../assets/asset/serviceIcon4.svg';
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
                            <img alt="Keyword Research" src={analysisIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Keyword Research</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Identify relevant keywords. Analyze search volume, competition, and user intent. Select target keywords based on relevance, volume, and competitiveness.</p>
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
                            <img alt="On-Page Optimization" src={apiIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">On-Page Optimization</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Optimize meta tags, content, and headings. Incorporate target keywords naturally. Improve website structure and readability.</p>
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
                            <img alt="Technical SEO" src={codeIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Technical SEO</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Optimize website structure and performance. Implement schema markup. Address technical issues for better crawlability and indexing.</p>
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
                            <img alt="Content Creation" src={routeIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Content Creation</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Create high-quality, informative content. Optimize for target keywords and user intent. Include internal and external links for context and value.</p>
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
                            <img alt="Link Building" src={scrumIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Link Building</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Identify authoritative websites. Seek guest posting and partnership opportunities. Earn natural, quality backlinks for increased visibility.</p>
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
                            <img alt="Local SEO" src={serviceIcon6} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Local SEO</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Optimize for local searches. Target location-specific keywords. Claim and optimize Google My Business listing. Earn positive reviews and citations.</p>
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
                            <img alt="Monitoring and Analysis" src={serviceIcon3} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Monitoring and Analysis</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Track keyword rankings, organic traffic, and conversions. Analyze user behavior and engagement. Make data-driven decisions for optimization.</p>
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
                            <img alt="Continuous Optimization" src={serviceIcon2} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Continuous Optimization</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Stay updated with SEO trends and best practices. Optimize on-page elements, content, and backlink profile. Adapt strategies based on data and market trends.</p>
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
                            <img alt="Mobile SEO Optimization" src={serviceIcon4} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Mobile SEO Optimization</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Optimize for mobile devices and user experience. Ensure responsive design and fast loading. Implement mobile-focused features.</p>
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
                            <img alt="SEO Reporting" src={serviceIcon5} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">SEO Reporting</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Prepare regular reports. Track SEO progress and performance. Provide insights and recommendations. Communicate results to stakeholders.</p>
                    </div>
                </div>
                <hr className="border-t border-gray-200/50 dark:border-white/10" />

                {/* Summary Info */}
                <div className="flex 2xl:gap-5 gap-3 items-start">
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Note that this is a condensed outline, and each step in the SEO process can involve more detailed strategies and tactics depending on the specific requirements and goals of the SEO campaign.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Steps;
