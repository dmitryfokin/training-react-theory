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
    showCars: false,
  }

  changeTitleHandler = pageTitle => this.setState({pageTitle})

  toggleShowCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  render() {
    const divStyle = {
      'textAlign': 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car) => {
        return (
          <Car
            key={car.id}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}
          />
        )
      })
    }

    return (
      <div className="App" style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleShowCarsHandler}>Toggle cars</button>

        {cars}

        {/*{this.state.showCars ?*/}
        {/*  this.state.cars.map((car) => {*/}
        {/*    return (*/}
        {/*      <Car*/}
        {/*        key={car.id}*/}
        {/*        name={car.name}*/}
        {/*        year={car.year}*/}
        {/*        onChangeTitle={() => this.changeTitleHandler(car.name)}*/}
        {/*      />*/}
        {/*    )*/}
        {/*  })*/}
        {/*  : null*/}
        {/*}*/}
      </div>
    )
  }
}

export default App;
