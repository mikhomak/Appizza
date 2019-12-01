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


    addIngredientHandler = (ingredient) => {
        console.log(ingredient);
        const oldIngredient = this.state.ingredients[ingredient];
        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[ingredient] = oldIngredient + 1;
        this.setState({ingredients:newIngredients});
    };

    render() {
        return (<Aux>
            <PizzaContainer
                ingredients={this.state.ingredients}
                controls={this.state.controls}
                addIngredient={this.addIngredientHandler}
            />
        </Aux>);
    }
}

export default PizzaBuilder;