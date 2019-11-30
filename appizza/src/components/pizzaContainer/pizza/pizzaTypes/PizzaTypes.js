import React from 'react';
import PizzaIngredient from './pizzaIngredient/PizzaIngredient';

const positions = {
    tomato: [
        {posX: -32, posY: 50},
        {posX: -32, posY: 50},
        {posX: -32, posY: 50},
        {posX: -32, posY: 50}
    ],
    mushroom: [
        {posX: -32, posY: 50},
        {posX: -32, posY: 50},
        {posX: -32, posY: 50},
        {posX: -32, posY: 50}
    ],
    spinach: [
        {posX: -32, posY: 50},
        {posX: -32, posY: 50},
        {posX: -32, posY: 50},
        {posX: -32, posY: 50}
    ],
    pineapple: [
        {posX: -32, posY: 50},
        {posX: -32, posY: 50},
        {posX: -32, posY: 50},
        {posX: -32, posY: 50}
    ]
};

const pizzaTypes = (props) => {

    let posX, posY;
    posX = positions[props.type][props.position].posX + '%';
    posY = positions[props.type][props.position].posY + '%';
    const style ={
        top: posX.toString(),
        left: posY.toString()
    };
    return <PizzaIngredient style={style}/>

};

export default pizzaTypes;