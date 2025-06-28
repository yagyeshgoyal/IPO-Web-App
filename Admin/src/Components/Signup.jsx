import React, { useState } from "react";
import { assest } from "../assets/assets";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
    const [password, setPassword] = useState("");
      const [showPassword, setShowPassword] = useState(false);
      const [recaptchaChecked, setRecaptchaChecked] = useState(false);
    
      const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!recaptchaChecked) {
          alert("Please confirm you are not a robot");
          return;
        }
        // Implement login logic here
        alert(`Login with email: ${email}, keep signed in: ${keepSignedIn}`);
      };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className='flex items-center mb-4'>
        <img src={assest.android} className='w-[40px]' />
        <h1 className="text-2xl font-bold ">BLUESTOCK</h1>
      </div>
      <h2 className="text-xl mb-6 font-semibold">Create an account</h2>
      
      <form className="bg-white p-8 rounded shadow-md w-96">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="border border-gray-300 rounded w-full p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="hello@bluestock.in"
            className="border border-gray-300 rounded w-full p-2"
            required
          />
        </div>

        <div>
            <div className="flex justify-between items-center mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
            </label>
            <a
                href="#"
                className="text-xs text-indigo-600 hover:underline select-none"
                tabIndex={-1}
                onClick={(e) => e.preventDefault()}
            >
                Forgot Password?
            </a>
            </div>
            <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
            />
            <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-indigo-600 focus:outline-none"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
            >
                {showPassword ? (
                <AiOutlineEye />
                ) : (
                <AiOutlineEyeInvisible />
                )}
            </button>
            </div>
        </div>

        {/* reCAPTCHA */}
        <div className="pt-1 pb-3 border p-4 rounded-md my-4">
            <label className="flex items-center space-x-2 select-none justify-between">
            <div className="flex items-center space-x-2">
                <input
                type="checkbox"
                checked={recaptchaChecked}
                onChange={() => setRecaptchaChecked(!recaptchaChecked)}
                className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">I'm not a robot</span>
            </div>
            {/* Placeholding an empty box to simulate recaptcha */}
            <div className="ml-2 w-12 h-10  rounded bg-gray-100 flex items-center justify-center text-xs text-gray-400 select-none">
                <img src={assest.recaptcha}/>
            </div>
            </label>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Sign up
        </button>

        <div className="text-center mt-4">
          <span className="text-sm">or sign up with</span>
          <button 
            className=" flex justify-center gap-2 mt-2 w-full bg-white border border-gray-300 text-gray-700 font-semibold py-2 rounded hover:bg-gray-100"
          >
            <svg
            className="w-5 h-5"
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path fill="#4285F4" d="M533.5 278.4c0-17-1.5-33.3-4.4-49.2H272v93.3h146.6c-6.3 33.9-25.6 62.5-54.6 81.7v67h88.2c51.5-47.5 81.3-117.7 81.3-193.2z" />
            <path fill="#34A853" d="M272 544.3c73.6 0 135.4-24.4 180.6-66.3l-88.2-67c-24.6 16.5-56 26.4-92.4 26.4-71 0-131.2-47.8-152.8-112.2H29.6v70.6c45.8 90.5 139.8 148 242.4 148z" />
            <path fill="#FBBC05" d="M119.2 322.2c-10.2-30.5-10.2-63.4 0-93.9V157.7H29.6c-38.9 75.9-38.9 166.7 0 242.4l89.6-70.6z" />
            <path fill="#EA4335" d="M272 107.7c39.9 0 75.8 13.7 104 40.5l78.2-78.2C408.6 24.3 347.5 0 272 0 169.3 0 75.2 57.5 29.6 148l89.6 70.6c21.7-64.4 81.9-112.9 152.8-112.9z" />
          </svg>
            Continue with Google
          </button>
        </div>

        <div className="text-center mt-4">
          <span className="text-sm">Already have an account? </span>
          <a href="#" className="text-blue-600 hover:underline">Sign in here</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
