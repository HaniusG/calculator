import Button from "./Button/Button";
import "./button-board.css"

const ButtonBoard = () => {
    return (
        <div className="buttonBoard">
            <Button value="C" />
            <Button value="<" />
            <Button value="/" />
            <Button value="x" />
            <Button value="7" />
            <Button value="8" />
            <Button value="9" />
            <Button value="-" />
            <Button value="4" />
            <Button value="5" />
            <Button value="6" />
            <Button value="+" />
            <Button value="1" />
            <Button value="2" />
            <Button value="3" />
            <Button buttonClassName="equals" value="=" />
            <Button buttonClassName="zero" value="0" />
            <Button value="." />

        </div>


    )

}


export default ButtonBoard;