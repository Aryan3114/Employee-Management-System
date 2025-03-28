import React, { useState } from "react";
import { FaUserCircle, FaEnvelope, FaLock } from "react-icons/fa";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[url(src/utils/download.jpeg)] bg-contain ">
      <div className="bg-blue-200 p-8 rounded-2xl shadow-lg w-[380px]">
        <div className="flex justify-center mb-4">
          <FaUserCircle className="text-6xl text-blue-600" />
        </div>

      
        <form onSubmit={submitHandler} className="flex flex-col">
        
          <div className="relative mb-4">
            <FaEnvelope className="absolute left-4 top-3 text-gray-600" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-2 text-lg rounded-full bg-white shadow-md focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-500 text-black"
              placeholder="Type your username"
            />
          </div>

          <div className="relative mb-4">
            <FaLock className="absolute left-4 top-3 text-gray-600" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-2 text-lg rounded-full bg-white shadow-md focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-500 text-black"
              placeholder="Type your password"
            />
          </div>

        
          <p className="text-right text-sm text-gray-600 mb-4 cursor-pointer hover:underline">
            Forgot password?
          </p>

          <button className="w-full bg-blue-600 text-white text-lg font-semibold py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
            Login
          </button>
        </form>
      
        <p className="text-center text-gray-600 mt-4">Or Sign in Using</p>
        <div className="flex justify-center mt-3 space-x-4">
          <FaLinkedinIn className="text-blue-700 text-2xl cursor-pointer hover:scale-110 transition" />
          <FaGoogle className="text-red-600 text-2xl cursor-pointer hover:scale-110 transition" />
          <FaFacebookF className="text-blue-800 text-2xl cursor-pointer hover:scale-110 transition" />
        </div>
      </div>
    </div>
  );
};

export default Login;
