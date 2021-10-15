import React from 'react';
import './Foods.css'

const Foods = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div>
                <button className="foods-header">Breakfast</button>
                <button className="foods-header">Launch</button>
                <button className="foods-header">Dinner</button>
            </div>
        </div>
    );
};

export default Foods;