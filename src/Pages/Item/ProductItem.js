import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './ProductItem.css'

const ProductItem = (props) => {
    const { _id, img, name, description, price } = props.product;
    return (
        <div>
            <Col className="shadow-lg text-center">
                <Card className="hover-card">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-color">{name}</Card.Title>
                        <div>
                            <p>{description}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <HashLink smooth to={`/order/${_id}#`}>
                                <button type="button" className="btn btn-outline-primary btn-sm">Buy Now</button>
                            </HashLink>
                            <h4><span className="text-color">${price}</span></h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ProductItem;