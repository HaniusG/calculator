import { Component } from "react";
import "./screen.css"
class Screen extends Component {
    render() {
        const {info, output=""} = this.props;
        return (
            <div className="screen">
                    <input type="text" placeholder="0" className="info" value={info}></input>
                <span className="output">{output}</span>
            </div>
        )
    }
}

export default Screen;