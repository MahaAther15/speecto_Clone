import React from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
    return (
        <div className="container flex md:text-base text-sm items-center gap-[10px]">
            <Link className="text-gray5" title="link" to="/services">Our services</Link>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-gray5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
                <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <p className="font-bold !font-Nunito">SEO Optimised Web Application</p>
        </div>
    );
};

export default Detail;
