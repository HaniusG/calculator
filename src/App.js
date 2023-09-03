import { Component } from 'react';
import './App.css';
import ButtonBoard from './components/ButtonBoard/ButtonBoard';
import Screen from './components/Screen/Screen';

class App extends Component {
  render() {
    return (
      <div className='calculator'>
        <Screen />
        <ButtonBoard />
      </div>

    );
  }
}

export default App;
