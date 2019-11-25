import React from 'react';
import PizzaControl from './pizzaControl/PizzaControl';

const pizzaControls = (props) => {
    const controls = props.controls.map(control =><PizzaControl/>);

    return (
        <div>
            {controls}
        </div>
    );
};

export default pizzaControls;