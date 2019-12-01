import React from 'react';
import PizzaIngredient from './pizzaIngredient/PizzaIngredient';

const positions = {
    tomato: [
        {posX: 60, posY: 65},
        {posX: 25, posY: 12},
        {posX: 68, posY: 13},
        {posX: 3, posY: 44}
    ],
    mushroom: [
        {posX: 35, posY: 70},
        {posX: 75, posY: 34},
        {posX: 32, posY: 35},
        {posX: 50, posY: 20}
    ],
    spinach: [
        {posX: 32, posY: 50},
        {posX: 78, posY: 53},
        {posX: 20, posY: 5}
    ],
    pineapple: [
        {posX: 15, posY: 60},
        {posX: 65, posY: 45},
        {posX: 45, posY: 80},
        {posX: 32, posY: 7},
        {posX: 5, posY: 22}
    ]
};

const pizzaTypes = (props) => {

    let posX, posY;
    posX = positions[props.type][props.position].posX + '%';
    posY = positions[props.type][props.position].posY + '%';
    const style = {
        top: posX.toString(),
        left: posY.toString(),
        position: "absolute"
    };
    return <div style={style}><PizzaIngredient type={props.type}/></div>

};

export default pizzaTypes;