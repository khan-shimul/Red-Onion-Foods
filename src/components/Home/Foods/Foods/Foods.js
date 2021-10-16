import React from 'react';
import { Tabs, Tab, Nav, Container, Row } from 'react-bootstrap';
import useFoods from '../../../../hook/useFoods';
import Meal from '../Meal/Meal';
import './Foods.css';

const Foods = () => {
    const [foods] = useFoods();

    return (
        <section className="d-flex justify-content-center mt-4">
            <div>
                <Tabs variant="pills" defaultActiveKey="lunch">
                    {/* Breakfast Part */}
                    <Tab eventKey="breakfast" title="Breakfast" className="my-3 text-center">
                        <Container>
                            <Row xs={1} sm={2} md={3} className="g-4">
                                {
                                    foods?.slice(0, 6).map(food => <Meal
                                        key={food.id}
                                        food={food}
                                    ></Meal>)
                                }
                            </Row>
                        </Container>
                    </Tab>
                    {/* Lunch Part */}
                    <Tab eventKey="lunch" title="Lunch" className="my-3">
                        <Container>
                            <Row xs={1} sm={2} md={3} className="g-4">
                                {
                                    foods?.slice(6, 12).map(food => <Meal
                                        key={food.id}
                                        food={food}
                                    ></Meal>)
                                }
                            </Row>
                        </Container>
                    </Tab>
                    {/* Dinner Part */}
                    <Tab eventKey="dinner" title="Dinner" className="my-3">
                        <Container>
                            <Row xs={1} sm={2} md={3} className="g-4">
                                {
                                    foods?.slice(12, 18).map(food => <Meal
                                        key={food.id}
                                        food={food}
                                    ></Meal>)
                                }
                            </Row>
                        </Container>
                    </Tab>
                </Tabs>
            </div>
        </section>
    );
};

export default Foods;