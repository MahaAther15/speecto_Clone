import React from 'react';
import { Link } from 'react-router-dom';

// Import icons from assets
import serviceIcon1 from '../../../assets/asset/serviceIcon1.svg';
import serviceIcon2 from '../../../assets/asset/serviceIcon2.svg';
import serviceIcon3 from '../../../assets/asset/serviceIcon3.svg';
import serviceIcon4 from '../../../assets/asset/serviceIcon4.svg';
import serviceIcon5 from '../../../assets/asset/serviceIcon5.svg';
import serviceIcon6 from '../../../assets/asset/serviceIcon6.svg';
import ScreenLinearIcon from '../../../assets/asset/ScreenLinearIcon.svg';
import RobotLinearIcon from '../../../assets/asset/RobotLinearIcon.svg';
import ProductWhiteIcon from '../../../assets/asset/ProductWhiteIcon.svg';
import ProductLinearIcon from '../../../assets/asset/ProductLinearIcon.svg';
import checkLinearIcon from '../../../assets/asset/checkLinearIcon.svg';
import CodeLinearSvg from '../../../assets/asset/CodeLinearSvg.svg';

const servicesData = [
    {
        id: 1,
        title: "Product/SAAS Development",
        description: "Unveiling software needs, capturing stakeholder expectations, and defining actionable requirements for successful development.",
        normalIcon: serviceIcon2,
        hoverIcon: ScreenLinearIcon,
        link: "/services/product-saas-development"
    },
    {
        id: 2,
        title: "Web App Development",
        description: "Accelerating development processes through automated tools, streamlined workflows, and efficient code generation.",
        normalIcon: serviceIcon6,
        hoverIcon: RobotLinearIcon,
        link: "/services/web-app-development"
    },
    {
        id: 3,
        title: "SEO Optimised Web Application",
        description: "Crafting intuitive, user-centric interfaces that elevate user experiences and enhance digital interactions.",
        normalIcon: ProductWhiteIcon,
        hoverIcon: serviceIcon1,
        link: "/services/seo-optimised-web-application"
    },
    {
        id: 4,
        title: "Mobile App Development",
        description: "Delivering high-quality software solutions to production, ensuring seamless deployment and optimal performance for end-users.",
        normalIcon: serviceIcon5,
        hoverIcon: ProductLinearIcon,
        link: "/services/mobile-app-development"
    },
    {
        id: 5,
        title: "SEO",
        description: "Ensuring software quality through comprehensive testing, meticulous bug identification, and continuous optimization.",
        normalIcon: serviceIcon4,
        hoverIcon: checkLinearIcon,
        link: "/services/seo"
    },
    {
        id: 6,
        title: "MVP Development",
        description: "Building innovative and reliable software solutions with cutting-edge technologies and for seamless development experiences",
        normalIcon: serviceIcon3,
        hoverIcon: CodeLinearSvg,
        link: "/services/mvp-development"
    }
];

const Card = () => {
    return (
        <div className="container grid justify-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
                <Link key={service.id} to={service.link} className="block h-full">
                    <div className="p-5 rounded-[30px] h-full m-auto bg-white dark:bg-[#081533] shadow-serviceCardShadow dark:shadow-white/10 hover:shadow-none hover:bg-gradient-to-r hover:from-[#005DFC] hover:to-[#00c6ff] transition-all duration-300 group cursor-pointer flex flex-col justify-between gap-2">
                        <div>
                            <div className="flex items-center gap-3 2xl:gap-5">
                                <div className="relative overflow-hidden bg-primary2 flex items-center justify-center min-h-[40px] min-w-[40px] xl:min-w-[50px] xl:min-h-[50px] 2xl:min-w-[60px] 2xl:min-h-[60px] group-hover:bg-white rounded-[12px]">
                                    <div className="max-w-[20px] z-[11] relative">
                                        <img
                                            alt=""
                                            src={service.normalIcon}
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            className="opacity-100 group-hover:opacity-0 transition-opacity duration-300 w-full object-cover"
                                            loading="lazy"
                                            style={{ color: 'transparent' }}
                                        />
                                        <img
                                            alt=""
                                            src={service.hoverIcon}
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full object-cover"
                                            loading="lazy"
                                            style={{ color: 'transparent' }}
                                        />
                                    </div>
                                </div>
                                <h3 className="font-Nunito 2xl:text-2xl lg:text-xl text-lg font-medium group-hover:text-white">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="font-Nunito 2xl:text-xl xl:text-lg text-base font-medium !leading-[20px] 2xl:!leading-[30px] my-3 2xl:my-5 text-gray5 group-hover:text-white">
                                {service.description}
                            </p>
                        </div>
                        <div className="bg-primary2/10 relative text-primary2 group-hover:bg-white p-2 md:p-3 rounded-[12px] max-w-max transition-all duration-300">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Card;