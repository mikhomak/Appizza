import React from 'react';
import classes from './PizzaIngredient.module.css';

const pizzaIngredient = (props) => {
    let ingredient = <div></div>;
    switch (props.type) {
        case('tomato'):
            ingredient = <div className={classes.Tomato}></div>
            break;
        case('mushroom'):
            ingredient = <div className={classes.Mushroom}></div>
            break;
        case('spinach'):
            ingredient = <div className={classes.Spinach}></div>
            break;
        case('pineapple'):
            ingredient = <div className={classes.Pineapple}></div>
            break;
        default:
            ingredient = <div></div>
            break;
    }
    return ingredient;
};

export default pizzaIngredient;