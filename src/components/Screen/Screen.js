import { Component } from "react";
import "./screen.css"
class Screen extends Component {
    render() {
        return (
            <div className="screen">
                    <input type="text" placeholder="0" className="info"></input>
                <span className="output">0</span>
            </div>
        )
    }
}

export default Screen;