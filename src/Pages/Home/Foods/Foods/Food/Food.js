import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Food.css';

const Food = ({ food }) => {
    const { name, img, price, description } = food;

    return (

        <Col>
            <Card className="food text-center p-2">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h5>${price}</h5>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Food;