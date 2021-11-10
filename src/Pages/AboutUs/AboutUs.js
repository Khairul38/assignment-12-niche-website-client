import React from 'react';
import about from '../../Images/img-about.jpg'

const AboutUs = () => {
    return (
        <div className="container">
            <div className="row align-items-center my-5 g-3 container mx-auto">
                <div className="col-lg-6">
                    <h1 className=" fw-bold">IT’S A BIG WORLD OUT THERE
                        GO <span className="text-color">EXPLORE</span></h1>
                    <p>Wherever you want to go and whatever you want to do, makes it easy and supports you with 24/7 customer support. 28 million reported accommodation listings, including over 6.2 million homes, apartments, and other unique places to stay</p>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid" src="https://templatekit.jegtheme.com/travenu/wp-content/uploads/sites/22/2020/12/exotic-tropical-scenery-beach-landscape-1024x768.jpg" alt="" />
                </div>
            </div>
            <div className="text-center my-5">
                <h1 className="fw-bold">Our <span className="text-color">Facilities</span></h1>
                <p>What Other Sais About Traveloky.</p>
            </div>
            <div className="container my-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <img className="img-fluid" src="https://intravel.sdemo.site/wp-content/uploads/2016/09/about-us-bg.jpg" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item rounded">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>2000+ Our worldwide guide</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Travel information to inspire global travellers. From cities to airports, cruise ports to ski and beach resorts, attractions to events.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border-top rounded">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <strong>100% Trusted travel agency</strong>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Traveloky is a trusted and reliable tour and travel agency among all the leading and updated tour.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border-top rounded">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <strong>10+ Year of travel experience</strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        These inspiring travel experience stories about life-changing trips show just how meaningful a journey.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border-top rounded">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                        <strong>90% Of our traveller happy</strong>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        All of our people ar happy with our services. We provide best customer experience and they are happy.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border-top rounded">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false"
                                        aria-controls="collapseFive">
                                        <strong>Handpicked Hotels</strong>
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Hand Picked Hotels is a collection of very individual country house hotels located throughout the UK and Channel Islands.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border-top rounded">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false"
                                        aria-controls="collapseSix">
                                        <strong>Affordable Price</strong>
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        We are one of the world's largest travel sellers offering deep discounts on tours and cruises.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-lg-flex align-items-center my-5">
                <img className="img-fluid" src={about} alt="" />
                <div className="m-5">
                    <h1 className=" fw-bold">WE ARE <span className="text-color">TRAVELOKY</span></h1>
                    <br />
                    <h5>Founded in 1996 in Amsterdam, traveloky has grown from a small Dutch start-up to one of the world’s leading digital travel companies. Part of Traveloky Holdings Inc. (NASDAQ: BKNG), Traveloky’s mission is to make it easier for everyone to experience the world.</h5>
                    <p>By investing in technology that takes the friction out of travel, Traveloky seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay – from homes to hotels, and much more.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;