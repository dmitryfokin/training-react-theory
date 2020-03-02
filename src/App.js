import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <h1>Hi!</h1>
  //   </div>
  // );

  return React.createElement(
    'div',
    {
      className: 'App'
    },
    React.createElement('' +
      'h1',
      null,
      '!Hi!')
  )
}

export default App;
