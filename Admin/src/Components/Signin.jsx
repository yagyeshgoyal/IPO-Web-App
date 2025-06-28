import React, { useState } from "react";
import { assest } from "../assets/assets";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      {/* Logo and Title */}
      <div className="flex items-center mb-8">
        {/* Logo: abstract icon with two purple bars */}
        <img src={assest.android} className="w-[30px]" />
        <h1 className="text-2xl font-extrabold text-gray-900 select-none">BLUESTOCK</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="john.doe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        {/* Password */}
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
        <div className="pt-1 pb-3 border p-4 rounded-md">
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

        {/* Keep me signed in */}
        <div>
          <label className="flex items-center space-x-2 select-none">
            <input
              type="checkbox"
              checked={keepSignedIn}
              onChange={() => setKeepSignedIn(!keepSignedIn)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">Keep me signed in</span>
          </label>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Login
        </button>

        {/* or sign in with */}
        <div className="my-4 relative text-center text-gray-400 text-sm select-none">
          <span className="bg-white px-2 relative z-10">or sign in with</span>
          <div className="absolute w-full border-t top-1/2 transform -translate-y-1/2 left-0"></div>
        </div>

        {/* Continue with Google */}
        <button
          type="button"
          className="w-full py-3 border border-gray-300 rounded-md shadow-sm flex justify-center items-center space-x-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => alert("Google sign in not implemented")}
        >
          {/* Google Icon */}
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
          
          <span>Continue with Google</span>
        </button>

        {/* Create account */}
        <p className="text-center text-indigo-600 mt-6 text-sm select-none">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:underline">
            Create an account
          </a>
        </p>
      </form>
    </div>
  );
}

