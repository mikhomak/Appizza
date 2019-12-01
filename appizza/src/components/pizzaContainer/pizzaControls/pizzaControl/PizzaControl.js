import React from 'react';
import classes from './PizzaControl.module.css';
import PizzaIngredient from '../../pizza/pizzaTypes/pizzaIngredient/PizzaIngredient';
import Aux from '../../../../hoc/Aux';

const pizzaControl = (props) => {
    return (
        <Aux>
            <PizzaIngredient type={props.type}/>
            <div className={classes.ButtonContainer}>
                <button onClick={()=>props.removeIngredient(props.type)} className={classes.button}>-</button>
                <button onClick={()=>props.addIngredient(props.type)} className={classes.button}>+</button>
            </div>
        </Aux>
    );
};

export default pizzaControl;