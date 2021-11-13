import React from 'react';
import './Footer.css';
import logo2 from '../../Images/logo-2.png'

const Footer = () => {
    return (
        <div className="bg-image text-center">
            <div className="mb-4">
                <img width="" src={logo2} alt="" />
            </div>
            <div>
                <p className="m-0">Copyright © 2021 All rights reserved OOBLISS.</p>
            </div>
        </div>
    );
};

export default Footer;