import { Component } from "react";

class FuncButton extends Component {
    
    render() {
      
        const { buttonClassName, value, onClick } = this.props;
        return (
            <button className={`funcButton ${buttonClassName}`} onClick={onClick}>{value}</button>
        )
    }
}

export default FuncButton;