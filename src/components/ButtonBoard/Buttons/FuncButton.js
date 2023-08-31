const FuncButton = ({ value, buttonClassName }) => {
    return (
        <button className={`funcButton ${buttonClassName}`} >{value}</button>
    )
}

export default FuncButton;