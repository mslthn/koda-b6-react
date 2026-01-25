// import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../assets/icons/coffee.svg";
import leftImage from "../assets/images/Rectangle-289.png";

// const el = document.getElementById("root")
// const root = createRoot(el)

const RegisterPage = () => {
  return (
    <div className="flex flex-row gap-10">
      <div className="w-1/3">
        <img src={leftImage} alt="latte" />
      </div>
      <div className="w-2/3">
        <div className="p-10 flex flex-col gap-5 w-3/4">
          <div className="flex flex-row">
            <img src={logo} alt="Logo" />
            <div className="font-sacramento">Coffee Shop</div>
          </div>
          <div>
            <h1>Register</h1>
            <p>Fill out the form correctly</p>
          </div>
          <div className="flex flex-col gap-5">
            <form className="flex flex-col gap-5">
              <Input
                label="Full Name"
                name="fullname"
                type="text"
                id="fullname"
                placeholder="Enter Your Full Name"
                src="./src/assets/icons/Profile.svg"
                alt="Profile Icon"
              >
              </Input>
              
              <Input
                label="Email"
                name="email"
                type="email"
                id="email"
                placeholder="Enter Your Email"
                src="./src/assets/icons/Mail.svg"
                alt="Mail Icon"
              ></Input>
              
              <Input
                label="Password"
                name="password"
                type="password"
                id="password"
                placeholder="Enter Your Password"
                src="./src/assets/icons/Password.svg"
                alt="Lock Icon"
              ></Input>
              
              <Input
                label="Confirm Password"
                name="confirmpass"
                type="password"
                id="confirmpass"
                placeholder="Enter Your Password Again"
                src="./src/assets/icons/Password.svg"
                alt="Lock Icon"
              ></Input>
              
              <Button
                type="submit"
                text="Register"
                onClick={() => {
                  
                }}
              ></Button>
            </form>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div>Have An Account? <span className="text-orange-400"><Link to="">Login</Link></span></div>
            <div>Or</div>
            <div className="flex flex-row gap-10 w-full">
              <div className="border-solid border-1 border-gray-300 p-2 rounded-lg w-1/2 text-center">
                Facebook
              </div>
              <div className="border-solid border-1 border-gray-300 p-2 rounded-lg w-1/2 text-center">
                Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// root.render(<RegisterPage/>)
export default RegisterPage;
