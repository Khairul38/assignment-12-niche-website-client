import React from 'react';
import { Row } from 'react-bootstrap';
import useReviews from '../../Hooks/useReviews/useReviews';
import ReviewItem from '../Item/ReviewItem';
import './Reviews.css'

const Reviews = () => {
    const { reviews } = useReviews();
    return (
        <div>
            <div className="mb-5 text-center text-white banner-review banner-ds">
                <h1>CHOOSE THE <span className="text-color">REVIEW</span></h1>
                <h5>Just Right For Your Vacation</h5>
            </div>
            <div className="container">
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            reviews.map(review => <ReviewItem key={review._id} review={review}></ReviewItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Reviews;