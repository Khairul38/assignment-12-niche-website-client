import React from 'react';
import about from '../../Images/Alex Barnder.jpg'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const AboutUs = () => {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="row align-items-center my-5 g-3 container mx-auto">
                    <div className="col-lg-6">
                        <h5>Our Sales agent</h5>
                        <h1 className=" fw-bold">ALEX  <span className="text-color">BARNDER</span></h1>
                        <p>We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid" src={about} alt="" />
                    </div>
                </div>
                <div className="text-center my-5">
                    <h1 className="fw-bold">OUR <span className="text-color">FACILITIES</span></h1>
                    <p>Reasons to shop with us</p>
                </div>
                <div className="container my-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0534/9362/9111/files/about4.jpg" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item rounded">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <strong>24/7 FRIENDLY SUPPORT</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Our support team always ready for you to 7 days a week
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border-top rounded">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <strong>7 DAYS EASY RETURN</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Product any fault within 7 days for an immediately exchange.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border-top rounded">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            <strong>QUALITY GUARANTEED</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            If your product aren't perfect, return them for a full refund
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border-top rounded">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">
                                            <strong>FREE SHIPPING & RETURN</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Free worldwide shipping on all area order above $100
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border-top rounded">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive" aria-expanded="false"
                                            aria-controls="collapseFive">
                                            <strong>CARL ZEISS LENSES</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We think about the convenience of your choice.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border-top rounded">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix" aria-expanded="false"
                                            aria-controls="collapseSix">
                                            <strong>AFFORDABLE PRICE</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We are one of the world's largest sellers offering deep discounts on all products.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-lg-flex align-items-center my-5">
                    <div className="m-5">
                        <h5>Our Web Designer</h5>
                        <h1 className=" fw-bold">ANGELIKA  <span className="text-color">HESS</span></h1>
                        <p>Our audience (AKA you) is wonderfully unique. And we do everything we can to help you find your fit, offering our Ciloe Brands in more than 30 sizes – and we're committed to providing all sizes at the same price – so you can be confident we’ve got the perfect thing for you. We’re also proud to partner with GLAAD, one of the biggest voices in LGBTQ activism, on a gender-neutral collection to unite in accelerating acceptance.</p>
                    </div>
                    <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0534/9362/9111/files/about2.jpg" alt="" />
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AboutUs;