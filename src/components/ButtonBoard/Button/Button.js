const Button = ({ value, buttonClassName }) => {
    return (
        <button className={`button ${buttonClassName}`} >{value}</button>
    )
}

export default Button;