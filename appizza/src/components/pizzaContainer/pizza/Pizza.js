import React from 'react';
import classes from './Pizza.module.css';
import Aux from '../../../hoc/Aux';

const pizza = (props) => {
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