import React from 'react';
import classes from './PizzaControl.module.css';

const pizzaControl = (props) => {
    switch(props.type){
        case('tomato'):
            break;
        case('mushroom'):
            break;
        case('spinach'):
            break;
        case('pineapple'):
            break;
        default:
            break;
    }
    return (
        <div className={classes}/>
    );
};

export default pizzaControl;