import { Component } from 'react';
import './App.css';
import Screen from './components/Screen/Screen';
import NumButton from './components/Buttons/NumButton';
import ActionButton from './components/Buttons/ActionButton';
import FuncButton from './components/Buttons/FuncButton';


class App extends Component {
  state = {
    info: "",
    output: "0"
  }

  onNumClick = (e) => {
    this.setState({
      info: this.state.info+ e.target.innerText
    })
  }

  onFuncClick = (e) =>{
    if(!(['/', '-', '+', '-', '', '.'].includes(this.state.info.slice(-1)))){
      this.setState({
        info: this.state.info+ e.target.innerText
      })
  }
  }



  onEqualClick = () => {
    if(!(['/', '-', '+', '-', '', '.'].includes(this.state.info.slice(-1)))){
    this.setState({
      output: eval(this.state.info)
    })
  }
  }

  onReset = () => {
    this.setState({
      info: ""
    })
  }

  onDelete = () => {
    this.setState({
      info: this.state.info.slice(0, -1)
    })
  }
    render(){
      return (
        <div className='calculator'>
          <Screen info={this.state.info} output={this.state.output}/>


          <div className="buttonBoard">
            <ActionButton value="C" onClick={this.onReset} />
            <ActionButton value="<" onClick={this.onDelete} />
            <FuncButton value="/" onClick={this.onFuncClick}/>
            <FuncButton value="*" onClick={this.onFuncClick}/>
            <NumButton value="7" onClick={this.onNumClick}/>
            <NumButton value="8" onClick={this.onNumClick}/>
            <NumButton value="9" onClick={this.onNumClick}/>
            <FuncButton value="-" onClick={this.onNumClick}/>
            <NumButton value="4" onClick={this.onNumClick}/>
            <NumButton value="5" onClick={this.onNumClick}/>
            <NumButton value="6" onClick={this.onNumClick}/>
            <FuncButton value="+" onClick={this.onFuncClick}/>
            <NumButton value="1" onClick={this.onNumClick}/>
            <NumButton value="2" onClick={this.onNumClick}/>
            <NumButton value="3" onClick={this.onNumClick}/>
            <ActionButton buttonClassName="equals" value="=" onClick={this.onEqualClick} />
            <NumButton buttonClassName="zero" value="0" onClick={this.onNumClick}/>
            <NumButton value="." onClick={this.onFuncClick}/>

          </div>
        </div>

      );
    }
  }

export default App;
