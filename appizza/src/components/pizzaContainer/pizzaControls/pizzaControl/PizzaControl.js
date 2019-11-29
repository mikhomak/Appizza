import React from 'react';
import classes from './PizzaControl.module.css';

const pizzaControl = (props) => {
    let type = props.type;
    type =  type.charAt(0).toUpperCase() + type.slice(1);
    switch(prop.type){
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