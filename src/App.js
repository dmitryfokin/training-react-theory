import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    const divStyle = {
      'textAlign': 'center'
    }

    return (
      <div className="App" style={divStyle}>
        <h1 style={{color: 'blue', fontSize: '44px'}}>Hi!</h1>
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
