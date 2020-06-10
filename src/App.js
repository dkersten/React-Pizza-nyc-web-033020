import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    currentPizza: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(pizzas => this.setState({ pizzas }))
  }

  formValues = (pizza) => {
    this.setState({
      currentPizza: pizza
    })
  }

  rerenderPizzas = () => {
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(pizzas => this.setState({ pizzas }))
  }

  render() {
    
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          currentPizza={this.state.currentPizza} 
          rerender={this.rerenderPizzas}
        />
        <PizzaList 
          pizzas={this.state.pizzas}
          formValues={this.formValues}
        />
      </Fragment>
    );
  }
}

export default App;
