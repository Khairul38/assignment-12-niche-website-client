import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Avatar, Rating } from '@mui/material';

const ReviewItem = (props) => {
    const { name, email, description, rating, img } = props.review;
    return (
        <div>
            <Col className="shadow-lg">
                <Card className="hover-card p-3">
                    <Row className=" align-items-center">
                        <Col xs={4}>
                            <Avatar
                                alt={name}
                                src={img}
                                sx={{ width: 95, height: 95 }}
                            />
                        </Col>
                        <Col xs={8}>
                            <Card.Title className="text-color">{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                        </Col>
                    </Row>
                    <Card.Body className="text-center mt-3">
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Rating name="read-only" value={Number(rating)} readOnly size="large" />
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ReviewItem;