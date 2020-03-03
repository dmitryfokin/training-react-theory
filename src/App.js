import React, {Component} from 'react';
import './App.css';

import Car from "./Car/Car";

class App extends Component {
  state = {
    cars: [
      {id: 1, name: 'UAZ', year: 2015},
      {id: 2, name: 'Audi', year: 2016},
      {id: 3, name: 'Mazda', year: 2010},
    ],
    pageTitle: 'React'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({pageTitle: newTitle})
  }

  handleInput = event => {
    this.changeTitleHandler(event.target.value)
  }

  render() {
    const divStyle = {
      'textAlign': 'center'
    }

    const cars = this.state.cars

    return (
      <div className="App" style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <input type="text" onChange={this.handleInput.bind(this)}/>

        <br/>
        <button onClick={this.changeTitleHandler.bind(this, ' -- React -- ')}>Change title</button>

        {this.state.cars.map(car => {
          return (
            <Car
              key={car.id}
              name={car.name}
              year={car.year}
              onChangeTitle={() => {
                this.changeTitleHandler(car.name)
              }}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
