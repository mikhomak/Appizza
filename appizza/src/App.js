import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import PizzaBuilder from './components/pizzaBuilder/PizzaBuilder';

function App() {
    return (
        <div className="App">
            <Layout>
              <PizzaBuilder/>
            </Layout>
        </div>
    );
}

export default App;
