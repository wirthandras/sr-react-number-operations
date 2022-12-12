import logo from './logo.svg';
import './App.css';
import React from 'react';
import Color from 'react-native-colors'

class Calculator extends React.Component {

  calculate() {
    console.log("calculate");
  }

  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: Color.TEAL[133] }}>Hello, Calculator!</h1>
        <div>
          <input placeholder='4'></input>
          <input placeholder='23'></input>
          <input placeholder='+'></input>
          <button onClick={this.calculate()}>Calculate</button>
          <span>Display the result here</span>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Calculator />
      </header>
    </div>
  );
}

export default App;
