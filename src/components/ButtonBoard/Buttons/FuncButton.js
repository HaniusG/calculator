import { Component } from "react";

class FuncButton extends Component {
    
    onFuncClick= () =>{  
        if(!(['/', '-', '+', '-', ''].includes(document.querySelector('.info').value.slice(-1)))){
            document.querySelector('.info').value += this.props.value;
        }
    } 
    render() {
      
        const { buttonClassName, value } = this.props;
        return (
            <button className={`funcButton ${buttonClassName}`} onClick={this.onFuncClick}>{value}</button>
        )
    }
}

export default FuncButton;