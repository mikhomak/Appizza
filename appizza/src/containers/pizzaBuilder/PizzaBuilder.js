import React, {Component} from 'react';
import PizzaContainer from '../../components/pizzaContainer/PizzaContainer';
import Aux from '../../hoc/Aux';

class PizzaBuilder extends Component {

    state = {
        ingredients: {
            tomato: 0,
            pineapple: 0,
            mushroom: 0,
            spinach: 0
        },
        controls: ['tomato', 'pineapple', 'mushroom', 'spinach']
    };

    render() {
        return (<Aux>
            <PizzaContainer ingredients={this.state.ingredients} controls={this.state.controls}/>
        </Aux>);
    }
}

export default PizzaBuilder;