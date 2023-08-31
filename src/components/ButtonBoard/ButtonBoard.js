import ActionButton from "./Buttons/ActionButton";
import FuncButton from "./Buttons/FuncButton";
import NumButton from "./Buttons/NumButton";
import "./button-board.css"

const ButtonBoard = () => {
    return (
        <div className="buttonBoard">
            <ActionButton value="C" />
            <ActionButton value="<"/>
            <FuncButton value="/" />
            <FuncButton value="x" />
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
            <ActionButton buttonClassName="equals" value="=" />
            <NumButton buttonClassName="zero" value="0" />
            <NumButton value="." />

        </div>


    )

}


export default ButtonBoard;