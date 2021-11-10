import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices/useServices';
import DestinationItem from '../Item/DestinationItem';
import ServiceItem from '../Item/ServiceItem';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
// import { faUsers, faUserGraduate, faHandshake, faSmile, faLuggageCart, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import useDestinations from '../../Hooks/useDestinations/useDestinations';

const Home = () => {
    const { services } = useServices();
    const { destinations } = useDestinations();
    const newDestinations = destinations.slice(0, 6)

    /* Icon */
    // const guide = <FontAwesomeIcon icon={faUsers} />
    // const expert = <FontAwesomeIcon icon={faUserGraduate} />
    // const trust = <FontAwesomeIcon icon={faHandshake} />
    // const happy = <FontAwesomeIcon icon={faSmile} />
    // const luggage = <FontAwesomeIcon icon={faLuggageCart} />
    // const saveMoney = <FontAwesomeIcon icon={faHandHoldingUsd} />
    return (
        <div>
            <div className="banner text-center text-white banner-size">
                <h1>DISCOVER</h1>
                <h5>THE WORLD YOU HAVE NEVER SEEN</h5>
            </div>
            <div className="container">
                <div className="my-5 text-center">
                    <h1 className="fw-bold">MOST POPULAR <span className="text-color">PACKAGES</span> </h1>
                    <h5>Select Your Best Package For Your Travel</h5>
                </div>
                <div className="container">
                    <Row xs={1} md={3} className="g-5 mb-5 p-4">
                        {
                            services.map(service => <ServiceItem key={service._id} service={service}></ServiceItem>)
                        }
                    </Row>
                </div>
            </div>
            {/* <div className="my-5 text-center">
                <h4 className="text-color">Why Traveloky</h4>
                <h1 className="fw-bold">Why You Are Travel With Traveloky</h1>

            </div>
            <div className=" container row row-cols-1 row-cols-lg-2 mx-auto">
                <div className="col text-lg-end align-item-center front-icon">
                    <span>{guide}</span>
                    <h3 className="mt-1">2000+ Our worldwide guide</h3>
                    <p>Travel information to inspire global travellers. From cities to airports, cruise ports to ski and beach resorts, attractions to events.</p>
                </div>
                <div className="col front-icon">
                    <span>{trust}</span>
                    <h3 className="mt-1">100% Trusted travel agency</h3>
                    <p>Traveloky is a trusted and reliable tour and travel agency among all the leading and updated tour.</p>
                </div>
                <div className="col text-lg-end front-icon">
                    <span>{expert}</span>
                    <h3 className="mt-1">10+ Year of travel experience</h3>
                    <p>These inspiring travel experience stories about life-changing trips show just how meaningful a journey.</p>
                </div>
                <div className="col front-icon">
                    <span>{happy}</span>
                    <h3 className="mt-1">90% Of our traveller happy</h3>
                    <p>All of our people ar happy with our services. We provide best customer experience and they are happy.</p>
                </div>
                <div className="col text-lg-end front-icon">
                    <span>{luggage}</span>
                    <h3 className="mt-1">Handpicked Hotels</h3>
                    <p>Hand Picked Hotels is a collection of very individual country house hotels located throughout the UK and Channel Islands.</p>
                </div>
                <div className="col front-icon">
                    <span>{saveMoney}</span>
                    <h3 className="mt-1">Affordable Price</h3>
                    <p>We are one of the world's largest travel sellers offering deep discounts on tours and cruises.</p>
                </div>
            </div> */}
            <div className="my-5">
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="https://demo.egenslab.com/html/tourx/assets/images/banners/banner-1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption className="fw-bold">
                            <h1>ADVENTURE IS OUT THERE</h1>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="https://demo.egenslab.com/html/tourx/assets/images/banners/banner-4.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption className="fw-bold">
                            <h1>BEST WAY TO FIND YOUR DREAM PLACE</h1>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="https://demo.egenslab.com/html/tourx/assets/images/banners/banner-3.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption className="fw-bold">
                            <h1>TIME TO TAKE ON THE TREK</h1>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container">
                <div className="my-5 text-center">
                    <h1 className="fw-bold">CHOOSE THE <span className="text-color">DESTINATION</span></h1>
                    <h5>Just Right For Your Vacation</h5>
                </div>
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            newDestinations.map(destination => <DestinationItem key={destination.key} destination={destination}></DestinationItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;