const ActionButton = ({ value, buttonClassName }) => {
    return (
        <button className={`actionButton ${buttonClassName}`} >{value}</button>
    )
}

export default ActionButton;