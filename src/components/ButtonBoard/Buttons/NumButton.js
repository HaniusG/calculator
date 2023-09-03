import { Component } from "react";

class NumButton extends Component {
    onNumClick = () => {
            document.querySelector('.info').value += this.props.value;
    };
    render() {
        const { buttonClassName, value } = this.props;
        return (
            <button className={`numButton ${buttonClassName}`} onClick={this.onNumClick}>{value}</button>
        )
    }
}

export default NumButton;