import { Component } from "react";

class ActionButton extends Component {
    render() {
        const { buttonClassName, value, onClick} = this.props;
        return (
            <button className={`actionButton ${buttonClassName}`} onClick={onClick}>{value}</button>
        )
    }
}

export default ActionButton;