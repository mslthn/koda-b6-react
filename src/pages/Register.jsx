import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../assets/icons/coffee.svg";
import leftImage from "../assets/images/Rectangle-289.png";
import fbLogo from "../assets/icons/facebook.svg";
import googleLogo from "../assets/icons/google.svg";

const RegisterPage = () => {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    fullname: yup.string()
      .min(3, "Full name must be at least 3 characters")
      .required("Full name is required"),
    email: yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least 1 lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
      .matches(/[0-9]/, "Password must contain at least 1 number")
      .matches(/[!@#$%^&*]/, "Password must contain at least 1 special character")
      .required("Password is required"),
    confirmPassword: yup.string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  }); 

  const onSubmit = (data) => {
    // console.log("Form:", data);

    const userData = {
      fullname: data.fullname,
      email: data.email,
    };

    localStorage.setItem("registeredUser", JSON.stringify(userData));
    alert("Registration successful! Please login.");

    navigate("/login");
  };

  return (
    <div className="flex flex-row gap-10">
      {/* <div className="flex justify-center items-center w-full h-full absolute">
        <div className='w-md h-36 z-5 absolute bg-[#6FC276] flex justify-center items-center rounded-xl text-xl'>
          Registration successful! Redirecting to Login page...
        </div>
      </div> */}
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
            <h1 className="text-xl text-[#8E6447]">Register</h1>
            <p>Fill out the form correctly</p>
          </div>
          <div className="flex flex-col gap-5">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div>
                <Input
                  label="Full Name"
                  name="fullname"
                  type="text"
                  id="fullname"
                  placeholder="Enter Your Full Name"
                  src="./src/assets/icons/Profile.svg"
                  alt="Profile Icon"
                  {...register("fullname")}
                />
                {errors.fullname && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullname.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  src="./src/assets/icons/mail.svg"
                  alt="Mail Icon"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                  src="./src/assets/icons/Password.svg"
                  alt="Lock Icon"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  id="password"
                  placeholder="Enter Your Password Again"
                  src="./src/assets/icons/Password.svg"
                  alt="Lock Icon"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <Button type="submit" text="Register" />
            </form>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div>
              Have An Account?
              <span className="text-orange-400">
                <Link to="/login">Login</Link>
              </span>
            </div>
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

export default RegisterPage;