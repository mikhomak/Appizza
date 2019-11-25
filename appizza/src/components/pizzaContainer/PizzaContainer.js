import React from 'react';
import PizzaControls from './pizzaControls/PizzaControls';
import Pizza from './pizza/Pizza';
import classes from './PizzaContainer.module.css';

const pizzaContainer = (props) => {

    const ingridentLength = Math.ceil(props.ingredients.length / 2);
    const firstControls = props.ingredients.slice(0, ingridentLength);
    const secondControls = props.ingredients.slice(ingridentLength, props.ingredients.length);

    return (
        <div className={classes.PizzaContainer}>
            <PizzaControls controls={firstControls}/>
            <Pizza/>
            <PizzaControls controls={secondControls}/>
        </div>
    );

};

export default pizzaContainer;