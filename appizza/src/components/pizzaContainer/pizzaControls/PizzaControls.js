import React from 'react';
import PizzaControl from './pizzaControl/PizzaControl';

const pizzaControls = (props) => {


    const controls = props.controls.map(control => <PizzaControl key={control} type={control}
                                                                 addIngredient={props.addIngredient}
                                                                 removeIngredient={props.removeIngredient}
                                                                 buttonState={props.buttonStates[control]}/>);

    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    };

    return (
        <div style={style}>
            {controls}
        </div>
    );
};

export default pizzaControls;