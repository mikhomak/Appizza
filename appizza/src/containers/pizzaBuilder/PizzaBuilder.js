import React, {Component} from 'react';
import PizzaContainer from '../../components/pizzaContainer/PizzaContainer';
import Aux from '../../hoc/Aux';
import * as constants from '../../constants/constants';

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
        controls: ['tomato', 'pineapple', 'mushroom', 'spinach'],
        buttonStates: {
            tomato: constants.buttonMin,
            pineapple: constants.buttonMin,
            mushroom: constants.buttonMin,
            spinach: constants.buttonMin
        }

    };


    addIngredientHandler = (ingredient) => {
        const oldIngredient = this.state.ingredients[ingredient];
        const newIngredients = {
            ...this.state.ingredients
        };
        const newButtonState = {
            ...this.state.buttonStates
        };
        let buttonState = constants.buttonMax;
        if (canBePut(ingredient, oldIngredient + 2)) {
            buttonState = constants.buttonNormal;
        }
        if (canBePut(ingredient, oldIngredient + 1)) {
            newIngredients[ingredient] = oldIngredient + 1;
            this.setState({ingredients: newIngredients});
        }
        newButtonState[ingredient] = buttonState;
        this.setState({buttonStates: newButtonState})
    };

    removeIngredientHandler = (ingredient) => {
        const oldIngredient = this.state.ingredients[ingredient];
        const newIngredients = {
            ...this.state.ingredients
        };
        const newButtonState = {
            ...this.state.buttonStates
        };
        let buttonState = constants.buttonMin;
        if (isNotEmpty(oldIngredient - 2)) {
            buttonState = constants.buttonNormal;
        }
        if (isNotEmpty(oldIngredient - 1)) {
            newIngredients[ingredient] = oldIngredient - 1;
            this.setState({ingredients: newIngredients});
        }
        newButtonState[ingredient] = buttonState;
        this.setState({buttonStates: newButtonState})
    };


    render() {
        return (
            <Aux>
                <PizzaContainer
                    ingredients={this.state.ingredients}
                    controls={this.state.controls}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    buttonStates={this.state.buttonStates}
                />
            </Aux>
        );
    }
}

export default PizzaBuilder;