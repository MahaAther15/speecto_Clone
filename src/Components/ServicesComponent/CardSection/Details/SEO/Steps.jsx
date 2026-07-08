import React from 'react';

// Import icons
import meetIcon from '../../../../../assets/asset/meet.svg';
import documentIcon from '../../../../../assets/asset/document.svg';
import howWorkIcon3 from '../../../../../assets/asset/howWorkIcon3.svg';
import howWorkIcon1 from '../../../../../assets/asset/howWorkIcon1.svg';
import howWorkIcon2 from '../../../../../assets/asset/howWorkIcon2.svg';
import howWorkIcon from '../../../../../assets/asset/howWorkIcon.svg';
import serviceIcon2 from '../../../../../assets/asset/serviceIcon2.svg';
import serviceIcon3 from '../../../../../assets/asset/serviceIcon3.svg';
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
                            <img alt="Initial Planning" src={meetIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Initial Planning</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Define target audience and conduct keyword research. Identify goals and objectives. Determine website structure and content hierarchy.</p>
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
                            <img alt="Next.js Setup and Configuration" src={documentIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Next.js Setup and Configuration</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Set up the Next.js project with the required tools and dependencies. Configure SEO-related settings, like meta tags and structured data. Implement server-side rendering (SSR) for SEO performance.</p>
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
                            <img alt="Content Strategy and Optimization" src={howWorkIcon3} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Content Strategy and Optimization</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Develop a content strategy based on keyword research. Optimize content by strategically incorporating keywords while maintaining natural readability.</p>
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
                            <img alt="URL Structure and Navigation" src={howWorkIcon1} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">URL Structure and Navigation</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Design SEO-friendly URL structure reflecting content hierarchy. Implement breadcrumb navigation. Ensure proper internal linking between pages.</p>
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
                            <img alt="Page Speed and Performance Optimization" src={howWorkIcon2} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Page Speed and Performance Optimization</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Optimize image sizes and formats for faster loading. Implement caching mechanisms. Minify and compress CSS/JS files for improved page load times.</p>
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
                            <img alt="Technical SEO Implementation" src={howWorkIcon} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Technical SEO Implementation</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Set up proper header tags. Implement XML sitemaps. Enable canonical tags to address duplicate content.</p>
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
                            <img alt="Mobile Responsiveness and Mobile-First Indexing" src={serviceIcon2} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Mobile Responsiveness and Mobile-First Indexing</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Create responsive web design for seamless user experience across devices. Optimize for mobile-first indexing and mobile usability.</p>
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
                            <img alt="On-Page SEO Optimization" src={serviceIcon3} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">On-Page SEO Optimization</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Optimize meta tags, headings, and on-page elements. Incorporate relevant keywords for improved relevance and visibility.</p>
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
                            <img alt="Monitoring and Analysis" src={serviceIcon4} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Monitoring and Analysis</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Set up website analytics. Monitor user behavior, organic traffic, and conversions. Analyze data for data-driven decision-making.</p>
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
                            <img alt="Ongoing SEO Maintenance" src={serviceIcon5} decoding="async" data-nimg="intrinsic" className="filter brightness-200 grayscale-100" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                        </span>
                    </div>
                    <div className="flex flex-col 2xl:gap-[10px]">
                        <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium">Ongoing SEO Maintenance</h3>
                        <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-gray5 sm:leading-none leading-[20px]">Stay updated with SEO best practices and algorithm changes. Regularly audit and optimize content, keywords, and technical aspects. Monitor competitors and adapt strategies.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Steps;
