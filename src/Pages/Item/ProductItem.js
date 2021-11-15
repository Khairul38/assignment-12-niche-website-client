import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth/useAuth';
import './ProductItem.css'

const ProductItem = (props) => {
    const { _id, img, name, description, price } = props.product;
    const { allContext } = useAuth();
    const { ColorButton } = allContext;
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
                                <ColorButton size="small"
                                    variant="contained">BUY NOW</ColorButton>
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