import React from 'react';
import classes from './PizzaControl.module.css';
import PizzaIngredient from '../../pizza/pizzaTypes/pizzaIngredient/PizzaIngredient';
const pizzaControl = (props) => {
    return (
        <PizzaIngredient type={props.type}/>
    );
};

export default pizzaControl;