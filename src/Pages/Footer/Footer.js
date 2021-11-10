import React from 'react';
import './Footer.css';
import logo2 from '../../Images/logo-2.png'

const Footer = () => {
    return (
        <div className="bg-image text-center py-5 ">
            <div className="mb-4">
                <img width="" src={logo2} alt="" />
            </div>
            <div>
                <p className="text-white m-0">Copyright © 2021 All rights reserved TRAVELOKY.</p>
            </div>
        </div>
    );
};

export default Footer;