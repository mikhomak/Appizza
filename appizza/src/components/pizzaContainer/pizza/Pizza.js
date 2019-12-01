import React from 'react';
import classes from './Pizza.module.css';
import Aux from '../../../hoc/Aux';
import PizzaTypes from './pizzaTypes/PizzaTypes';

const pizza = (props) => {

    /*let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <PizzaTypes key={igKey + i} type={igKey} position={i}/>;
                });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);*/


    return (
        <Aux>
            <div className={classes.Pizza}>
                <div className={classes.Crust}/>
                <div className={classes.Dough}/>
                <div className={classes.DoughTwo}/>
                <div className={classes.DoughThree}/>
                <div className={classes.DoughFour}/>
            </div>
        </Aux>

    );
};

export default pizza;