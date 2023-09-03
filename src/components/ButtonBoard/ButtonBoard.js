import { Component } from "react";
import ActionButton from "./Buttons/ActionButton";
import FuncButton from "./Buttons/FuncButton";
import NumButton from "./Buttons/NumButton";
import "./button-board.css"

class ButtonBoard extends Component {
    onEqualClick = () =>{
        document.querySelector('.output').innerText = eval(document.querySelector('.info').value)
    }

    onReset = () =>{
        document.querySelector('.info').value = "";
    }

    onDelete = () =>{
            document.querySelector('.info').value=document.querySelector('.info').value.slice(0,-1);
      
    
    }


    render() {
        return (
            <div className="buttonBoard">
                <ActionButton value="C" onClick={this.onReset}/>
                <ActionButton value="<" onClick={this.onDelete}/>
                <FuncButton value="/" />
                <FuncButton value="*" />
                <NumButton value="7" />
                <NumButton value="8" />
                <NumButton value="9" />
                <FuncButton value="-" />
                <NumButton value="4" />
                <NumButton value="5" />
                <NumButton value="6" />
                <FuncButton value="+" />
                <NumButton value="1" />
                <NumButton value="2" />
                <NumButton value="3" />
                <ActionButton buttonClassName="equals" value="=" onClick={this.onEqualClick}/>
                <NumButton buttonClassName="zero" value="0" />
                <NumButton value="." />

            </div>


        )
    }
}


export default ButtonBoard;