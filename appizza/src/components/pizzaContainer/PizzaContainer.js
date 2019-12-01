import React from 'react';
import PizzaControls from './pizzaControls/PizzaControls';
import Pizza from './pizza/Pizza';
import classes from './PizzaContainer.module.css';

const pizzaContainer = (props) => {

    const ingredientLength = Math.ceil(props.controls.length / 2);
    const firstControls = props.controls.slice(0, ingredientLength);
    const secondControls = props.controls.slice(ingredientLength, props.controls.length);

    return (
        <div className={classes.PizzaContainer}>
            <PizzaControls controls={firstControls} addIngredient={props.addIngredient} removeIngredient={props.removeIngredient} buttonStates={props.buttonStates}/>
            <Pizza ingredients={props.ingredients}/>
            <PizzaControls controls={secondControls} addIngredient={props.addIngredient} removeIngredient={props.removeIngredient} buttonStates={props.buttonStates}/>
        </div>
    );

};

export default pizzaContainer;