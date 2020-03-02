import React, {Component} from 'react';
import './App.css';

import Car from "./Car/Car";

class App extends Component {
  render() {
    const divStyle = {
      'textAlign': 'center'
    }

    return (
      <div className="App" style={divStyle}>
        <h1>Hi!</h1>

        <Car name={'UAZ'} year={(2015)}/>
        <Car name="Audi" year={2016}/>
        <Car name={'Mazda'} year={(2010)}/>
      </div>
    );
  }

  // return React.createElement(
  //   'div',
  //   {
  //     className: 'App'
  //   },
  //   React.createElement('' +
  //     'h1',
  //     null,
  //     '!Hi!')
  // )
}

export default App;
