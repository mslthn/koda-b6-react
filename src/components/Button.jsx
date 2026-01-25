const Button = (props) => {
    const {type, text, onClick} = props
    return (
        <button className="w-full mt-5 bg-orange-400 p-3 rounded-lg" 
            type={type} onClick={onClick}>{text}</button>
    )
}

export default Button