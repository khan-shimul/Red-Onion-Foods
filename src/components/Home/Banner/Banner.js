import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="top-banner d-flex justify-content-center align-items-center">
            <div>
                <h2 className="banner-title mb-3">Best food waiting for your belly!</h2>
                <div className="d-flex justify-content-center">
                    <InputGroup className="mb-3 w-75">
                        <FormControl
                            placeholder="Search food items"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <button className="btn-sign-up">Search</button>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default Banner;