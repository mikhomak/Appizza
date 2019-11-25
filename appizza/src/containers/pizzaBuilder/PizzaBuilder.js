import React, {Component} from 'react';
import PizzaContainer from '../../components/pizza/PizzaContainer';
import Aux from '../../hoc/Aux';

class PizzaBuilder extends Component {

    state = {
        ingredients:[1,2,3,4]
    }

    render() {
        return (<Aux>
            <PizzaContainer ingredients={this.state.ingredients}/>
        </Aux>);
    }
}

export default PizzaBuilder;