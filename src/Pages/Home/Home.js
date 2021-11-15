import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts/useProducts';
import './Home.css';
import { Box, CircularProgress } from '@mui/material';
import ReviewItem from '../Item/ReviewItem';
import ProductItem from '../Item/ProductItem';
import useReviews from '../../Hooks/useReviews/useReviews';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const { products, loading } = useProducts();
    const newProducts = products.slice(0, 6)
    const { reviews } = useReviews();

    if (loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', my: 50 }}>
            <CircularProgress size={150} sx={{ color: '#EC9C31' }} />
        </Box>
    }

    return (
        <div>
            <Header></Header>
            <div className="banner banner-size ps-5">
                <h1>AVIATOR <br /> VERRES ICEBERG <br /> GLASSES</h1>
                <h5>Looked up one of the more obscure latin world</h5>
            </div>
            <div className="container">
                <div className="my-5 text-center">
                    <h1 className="fw-bold">MOST POPULAR <span className="text-color">PRODUCTS</span> </h1>
                    <h5>SELECT THE BEST PRODUCT FOR YOU</h5>
                </div>
                {loading ? 
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
                        <CircularProgress sx={{ color: '#EC9C31'}} />
                    </Box>
                :<div className="container">
                    <Row xs={1} md={3} className="g-5 mb-5 p-4">
                        {
                            newProducts.map(product => <ProductItem key={product._id} product={product}></ProductItem>)
                        }
                    </Row>
                </div>}
            </div>
            <div className="my-5">
                <Carousel variant="dark">
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_oobliss_slide1-h1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className="fw-bold">
                            <h1>SEE THE WORLD
                                DIFFERENTLY</h1>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_oobliss_slide3-h1.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption className="fw-bold">
                            <h1>SEE THE WORLD
                                DIFFERENTLY</h1>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_oobliss_slide2-h1.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption className="fw-bold">
                            <h1>SEE THE WORLD
                                DIFFERENTLY</h1>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container">
                <div className="my-5 text-center">
                    <h1 className="fw-bold">CUSTOMER <span className="text-color">REVIEWS</span></h1>
                    <h5>YOUR FEEDBACK OUR INSPIRATION</h5>
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