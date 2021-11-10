import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices/useServices';
import ServiceItem from '../Item/ServiceItem';
import './Services.css';

const Services = () => {
    const { services } = useServices();
    return (
        <div>
            <div className="banner-service banner-ps mb-5 text-center text-white">
                <h1>MOST POPULAR <span className="text-color fw-bold">PACKAGES</span></h1>
                <h5>Select Your Best Package For Your Travel</h5>
            </div>
            <div className="container">
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            services.map(service => <ServiceItem key={service._id} service={service}></ServiceItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Services;