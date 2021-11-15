import React from 'react';
import { Card, Col } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth/useAuth';

const ManageProductItem = (props) => {
    const { allContext } = useAuth();
    const { ColorButton } = allContext;
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
                            <ColorButton onClick={() => props.handleDeleteProduct(_id)} variant="contained" size="small">
                                Delete
                            </ColorButton>
                            <h4><span className="text-color">${price}</span></h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ManageProductItem;