import React from 'react';
import { Row } from 'react-bootstrap';
import useDestinations from '../../Hooks/useDestinations/useDestinations';
import DestinationItem from '../Item/DestinationItem';
import './Destinations.css'

const Destinations = () => {
    const { destinations } = useDestinations();
    return (
        <div>
            <div className="mb-5 text-center text-white banner-destination banner-ds">
                <h1>CHOOSE THE <span className="text-color">DESTINATION</span></h1>
                <h5>Just Right For Your Vacation</h5>
            </div>
            <div className="container">
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            destinations.map(destination => <DestinationItem key={destination.key} destination={destination}></DestinationItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Destinations;