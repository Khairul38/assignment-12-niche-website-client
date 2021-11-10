import React from 'react';
import { Card, Col } from 'react-bootstrap';

const DestinationItem = (props) => {
    const { img, name } = props.destination;
    return (
        <div>
            <Col className="shadow-lg text-center">
                <Card className="hover-card">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-color">{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default DestinationItem;