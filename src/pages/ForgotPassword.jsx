// import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../assets/icons/coffee.svg";
import leftImage from "../assets/images/forgot-password-img.svg";

const ForgotPasswordPage = () => {
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
            <h1 className="text-xl text-[#8E6447]">Fill out the form correctly</h1>
            <p>We will send new password to your email</p>
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
              
              <Button
                type="submit"
                text="Submit"
                onClick={() => {
                  
                }}
              ></Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
