import React, {Component} from 'react';
import PizzaContainer from '../../components/pizzaContainer/PizzaContainer';
import Aux from '../../hoc/Aux';


const maxIngredients = {
    tomato: 4,
    pineapple: 5,
    mushroom: 4,
    spinach: 3
};


const canBePut = (ingredient, amount) => {
    return maxIngredients[ingredient] >= amount;
};

const isNotEmpty = amount => amount >= 0;

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
        const oldIngredient = this.state.ingredients[ingredient];
        const newIngredients = {
            ...this.state.ingredients
        };
        if (canBePut(ingredient, oldIngredient + 1)) {
            newIngredients[ingredient] = oldIngredient + 1;
            this.setState({ingredients: newIngredients});
        }
    };

    removeIngredientHandler = (ingredient) => {
        const oldIngredient = this.state.ingredients[ingredient];
        const newIngredients = {
            ...this.state.ingredients
        };
        if (isNotEmpty( oldIngredient - 1)) {
            newIngredients[ingredient] = oldIngredient - 1;
            this.setState({ingredients: newIngredients});
        }

    };


    render() {
        return (
            <Aux>
                <PizzaContainer
                    ingredients={this.state.ingredients}
                    controls={this.state.controls}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                />
            </Aux>
        );
    }
}

export default PizzaBuilder;