import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageProductItem = (props) => {
    const { _id, img, name, description, price } = props.service;
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
                            {/* <HashLink smooth to={`/booking/${_id}#`}>
                                <button type="button" className="btn btn-outline-primary btn-sm">Book Now</button>
                            </HashLink> */}
                            <button onClick={() => props.handleDeleteProduct(_id)} type="button" className="btn btn-outline-primary btn-sm">Delete</button>
                            <h4><span className="text-color">${price}</span></h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ManageProductItem;