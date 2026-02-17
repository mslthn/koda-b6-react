import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../assets/icons/coffee.svg";
import leftImage from "../assets/images/Rectangle-289.png";
import fbLogo from "../assets/icons/facebook.svg";
import googleLogo from "../assets/icons/google.svg";

const LoginPage = () => {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Login attempt:", data);

    const registeredUser = localStorage.getItem("registeredUser");

    if (registeredUser) {
      const userData = JSON.parse(registeredUser);

      if (userData.email === data.email) {
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
        localStorage.setItem("isAuthenticated", "true");

        alert("Login successful!");

        navigate("/");
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("No account found. Please register first.");
    }
  };

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
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div>
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  src="./src/assets/icons/Mail.svg"
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

              <div className="text-right">
                <Link to="/forgotPassword" className="text-orange-400 text-sm">
                  Forgot Password?
                </Link>
              </div>

              <Button type="submit" text="Login" />
            </form>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div>
              Don't Have An Account?{" "}
              <span className="text-orange-400">
                <Link to="/register">Register</Link>
              </span>
            </div>
            <div>Or</div>
            <div className="flex flex-row gap-10 w-full">
              <div className="border-solid border border-gray-300 p-2 rounded-lg w-1/2 flex justify-center items-center">
                <img src={fbLogo} alt="Facebook Logo" />
                Facebook
              </div>
              <div className="border-solid border border-gray-300 p-2 rounded-lg w-1/2 flex justify-center items-center">
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