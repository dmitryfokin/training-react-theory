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
    pageTitle: 'React',
    showCars: true,
  }

  changeTitleHandler = pageTitle => this.setState({pageTitle})

  toggleShowCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName = (name, id) => {
    const cars = [...this.state.cars]
    cars[id].name = name
    this.setState({cars})

  }

  deleteCarHandler = (id) => {
    console.log(id)
    const cars = this.state.cars.concat()
    cars.splice(id, 1)
    this.setState({cars})
  }

  render() {
    const divStyle = {
      'textAlign': 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
            onDelete={this.deleteCarHandler.bind(this, index)}
          />
        )
      })
    }

    return (
      <div className="App" style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleShowCarsHandler}>Toggle cars</button>

        {cars}

      </div>
    )
  }
}

export default App;
