import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MyBookingItem = (props) => {
    const { img, name, price } = props.booking.package;
    const { _id, email, address, phone, status } = props.booking;
    return (
        <div>
            <Col className="shadow-lg">
                <Card className="hover-card">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-color fw-bold">{name}</Card.Title>
                        <div>
                            <h6>Name: {props.booking.name}</h6>
                            <h6>Email: {email}</h6>
                            <h6>Address: {address}</h6>
                            <h6>Contact: {phone}</h6>
                            <h6>Status: <span className="text-color">{status}</span></h6>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <button onClick={() => props.handleDeletePackage(_id)} type="button" className="btn btn-outline-primary btn-sm">Cancel</button>
                            <h4><span className="text-color">${price}</span>/Person</h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default MyBookingItem;