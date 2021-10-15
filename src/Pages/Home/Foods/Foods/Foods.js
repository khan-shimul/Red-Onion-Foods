import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Food from './Food/Food';
import './Foods.css'


const Foods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('./breakfast.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handleBreakfast = () => {

    }

    return (
        <div>
            <div className="d-flex justify-content-center my-4">
                <div>
                    <button onClick={handleBreakfast} className="foods-header">Breakfast</button>
                    <button className="foods-header">Launch</button>
                    <button className="foods-header">Dinner</button>
                </div>
            </div>

            <Container>
                <Row xs={1} sm={2} md={3} className="g-4">
                    {
                        foods.map(food => <Food
                            key={food.id}
                            food={food}
                        />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Foods;