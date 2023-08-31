import './App.css';
import ButtonBoard from './components/ButtonBoard/ButtonBoard';
import Screen from './components/Screen/Screen';

function App() {
  return (
    <div className='calculator'>
      <Screen/>
      <ButtonBoard/>
    </div>
    
  );
}

export default App;
