import { Component } from "react";

class NumButton extends Component {
    render() {
        const { buttonClassName, value, onClick } = this.props;
        return (
            <button className={`numButton ${buttonClassName}`} onClick={onClick}>{value}</button>
        )
    }
}

export default NumButton;