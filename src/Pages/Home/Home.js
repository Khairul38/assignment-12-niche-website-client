import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices/useServices';
import './Home.css';
import DestinationItem from '../Item/DestinationItem';
import ServiceItem from '../Item/ServiceItem';
import useDestinations from '../../Hooks/useDestinations/useDestinations';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const { services } = useServices();
    const { destinations } = useDestinations();
    const newDestinations = destinations.slice(0, 6)

    return (
        <div>
            <Header></Header>
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
                            newDestinations.map(destination => <DestinationItem key={destination._id} destination={destination}></DestinationItem>)
                        }
                    </Row>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;