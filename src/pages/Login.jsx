// import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../assets/icons/coffee.svg";
import leftImage from "../assets/images/login-barista.svg";
import fbLogo from "../assets/icons/facebook.svg"
import googleLogo from "../assets/icons/google.svg"

const LoginPage = () => {
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
            <h1 className="text-xl text-[#8E6447]">Login</h1>
            <p>Fill out the form correctly</p>
          </div>
          <div className="flex flex-col gap-5">
            <form className="flex flex-col gap-5">
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
              
              <div className="flex justify-end text-[#FF8906]"><Link to="/forgotPassword">Forgot Password?</Link></div>

              <Button
                type="submit"
                text="Login"
                onClick={() => {
                  
                }}
              ></Button>
            </form>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div>Not Have An Account? <span className="text-orange-400"><Link to="/register">Register</Link></span></div>
            <div>Or</div>
            <div className="flex flex-row gap-10 w-full">
              <div className="border-solid border-1 border-gray-300 p-2 rounded-lg w-1/2 flex justify-center items-center">
                <img src={fbLogo} alt="Facebook Logo" />
                Facebook
              </div>
              <div className="border-solid border-1 border-gray-300 p-2 rounded-lg w-1/2 flex justify-center items-center">
                <img src={googleLogo} alt="Google Logo" />
                Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
