const Input = (input)=>{
    const {label, type, name, id, placeholder, src, alt} = input
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="w-full flex flex-row p-3 gap-5 border-solid border-gray-300 bg-gray-50 border-1 rounded-lg w-2xl">
        <img className="pl-1" src={src} alt={alt} />
        <input type={type} name={name} id={id} placeholder={placeholder}  className="border-none outline-none  h-full w-full"/>
      </div>
    </div>
  );
}

export default Input;
