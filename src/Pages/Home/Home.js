import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts/useProducts';
import './Home.css';
import ReviewItem from '../Item/ReviewItem';
import ProductItem from '../Item/ProductItem';
import useReviews from '../../Hooks/useReviews/useReviews';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const { products } = useProducts();
    const newProducts = products.slice(0, 6)
    const { reviews } = useReviews();

    return (
        <div>
            <Header></Header>
            <div className="banner text-center text-white banner-size">
                <h1>DISCOVER</h1>
                <h5>THE WORLD YOU HAVE NEVER SEEN</h5>
            </div>
            <div className="container">
                <div className="my-5 text-center">
                    <h1 className="fw-bold">MOST POPULAR <span className="text-color">PRODUCTS</span> </h1>
                    <h5>Select Your Best Product For Your Travel</h5>
                </div>
                <div className="container">
                    <Row xs={1} md={3} className="g-5 mb-5 p-4">
                        {
                            newProducts.map(product => <ProductItem key={product._id} product={product}></ProductItem>)
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
                    <h1 className="fw-bold">CHOOSE THE <span className="text-color">REVIEW</span></h1>
                    <h5>Just Right For Your Vacation</h5>
                </div>
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            reviews.map(review => <ReviewItem key={review._id} review={review}></ReviewItem>)
                        }
                    </Row>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;