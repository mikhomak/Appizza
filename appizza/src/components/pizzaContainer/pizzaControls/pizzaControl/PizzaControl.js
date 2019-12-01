import React from 'react';
import classes from './PizzaControl.module.css';
import PizzaIngredient from '../../pizza/pizzaTypes/pizzaIngredient/PizzaIngredient';
import Aux from '../../../../hoc/Aux';
import * as constants from '../../../../constants/constants';

const pizzaControl = (props) => {

    let removeDisable = props.buttonState === constants.buttonMin;
    let addDisable = props.buttonState === constants.buttonMax;

    return (
        <Aux>
            <PizzaIngredient type={props.type}/>
            <div className={classes.ButtonContainer}>
                <button onClick={()=>props.removeIngredient(props.type)} className={classes.button} disabled={removeDisable}>-</button>
                <button onClick={()=>props.addIngredient(props.type)} className={classes.button} disabled={addDisable}>+</button>
            </div>
        </Aux>
    );
};

export default pizzaControl;