import React, {Component} from 'react';
import PizzaContainer from '../../components/pizzaContainer/PizzaContainer';
import Aux from '../../hoc/Aux';

class PizzaBuilder extends Component {

    state = {
        ingredients:[1,2,3,4],
        ingredients1: {
            tomato: 0,
            pineapple: 0,
            mushroom: 0,
            spinach: 0
        }
    };

    render() {
        return (<Aux>
            <PizzaContainer ingredients={this.state.ingredients}/>
        </Aux>);
    }
}

export default PizzaBuilder;