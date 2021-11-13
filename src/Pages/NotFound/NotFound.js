import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './NotFound.css'

const NotFound = () => {
    return (
        <>
            <Header></Header>
            <div className="text-center notFound">
                <h1><span className="text-color">404</span> Page Not Found</h1>
                <p>The requested page could not be found but may be available again in the future</p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default NotFound;