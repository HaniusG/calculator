const NumButton = ({ value, buttonClassName }) => {
    return (
        <button className={`numButton ${buttonClassName}`} >{value}</button>
    )
}

export default NumButton;