import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Meal.css';

const Meal = ({ food }) => {
    const { img, name, description, price } = food;
    return (
        <Col>
            <Card className="food text-center p-2 border-0 meal">
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

export default Meal;