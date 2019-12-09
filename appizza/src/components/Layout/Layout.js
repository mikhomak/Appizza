import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div style={{margin: '10px'}}> Pizza Builder</div>
        <main className={classes.Layout}>
            {props.children}
        </main>
    </Aux>
);

export default layout;