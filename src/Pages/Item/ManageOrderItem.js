import React from 'react';
import { Card, Col } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth/useAuth';

const ManageOrderItem = (props) => {
    const { allContext } = useAuth();
    const { ColorButton } = allContext;
    const { img, name, price } = props.order.product;
    const { _id, email, address, phone, status, payment } = props.order;
    return (
        <div>
            <Col className="shadow-lg">
                <Card className="hover-card">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-color fw-bold">{name}</Card.Title>
                        <div className="mb-4">
                            <h6>Name: {props.order.name}</h6>
                            <h6>Email: {email}</h6>
                            <h6>Address: {address}</h6>
                            <h6>Contact: {phone}</h6>
                            <h6>Status: <span className="text-color">{status}</span></h6>
                            <h4><span className="text-color">${price}</span></h4>
                            {payment ? <h6 className="text-success">PAID</h6>
                                :
                                <h6 className="text-danger">NOT PAID</h6>}
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <ColorButton onClick={() => props.handleDeleteProduct(_id)} variant="contained" size="small">
                                Cancel
                            </ColorButton>
                            <ColorButton onClick={() => props.handleUpdateStatus(_id)} variant="contained" size="small">
                                Status Update
                            </ColorButton>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ManageOrderItem;