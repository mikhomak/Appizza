import React from 'react';
import classes from './PizzaIngredient.module.css';

const pizzaIngredient = (props) => {
    let ingredient = <div/>;
    switch (props.type) {
        case('tomato'):
            ingredient = <div className={classes.Tomato}/>;
            break;
        case('mushroom'):
            ingredient = <div className={classes.Mushroom}/>;
            break;
        case('spinach'):
            ingredient = <div className={classes.Spinach}/>;
            break;
        case('pineapple'):
            ingredient = <div className={classes.Pineapple}/>;
            break;
        default:
            ingredient = <div/>;
            break;
    }
    return ingredient;
};

export default pizzaIngredient;