import React from "react"

class PizzaForm extends React.Component {

  state = {
    id: '',
    topping: '',
    size: ''
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentPizza.id !== prevProps.currentPizza.id) {
      this.setState({
        id: this.props.currentPizza.id,
        topping: this.props.currentPizza.topping,
        size: this.props.currentPizza.size,
        vegetarian: this.props.currentPizza.vegetarian
      })
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    const id = this.state.id
    const topping = this.state.topping
    const size = this.state.size

    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        topping: topping,
        size: size
      })
    })
      .then(resp => resp.json())
      .then(() => {
        this.props.rerender()
      })
      .then(() => this.setState({
        id: '',
        topping: '',
        size: ''
      }))
  }

  render() {
    
    console.log(this.state)
  
    return(
        <div className="form-row">
          <div className="col-5">
              <input onChange={this.handleChange} name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={
                  this.state.topping
                }/>
          </div>
          <div className="col">
            <select onChange={this.handleChange} value={this.state.size} name="size" className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={this.handleChange} name="vegetarian" value={true} checked={this.state.vegetarian ? true : false}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={this.handleChange} name="vegetarian" value={false} checked={this.state.vegetarian ? false : true }/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>

    )
  }
}

export default PizzaForm
