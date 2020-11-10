import React, { Component } from 'react';
import RollDice from './RollDice';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
         <RollDice />
        {/* <RollDice sides={'one', 'two'}/> */}
      </div>
    );
  }
}

export default App;