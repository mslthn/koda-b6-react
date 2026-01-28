const Button = (props) => {
    const {type, text, onClick} = props
    return (
        <button className="w-full bg-orange-400 p-1 rounded-lg" 
            type={type} onClick={onClick}>{text}</button>
    )
}

export default Button