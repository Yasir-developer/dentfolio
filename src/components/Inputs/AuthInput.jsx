import React, { useState } from "react";
// import from 'react';
import { FaEye } from "react-icons/fa";

import { HiEye, HiEyeOff } from "react-icons/hi";
const AuthInput = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  className,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    // <div className="relative">
    <>
      {type !== "password" ? (
        <>
          <input
            type={showPassword ? "text" : type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...rest}
            className={`focus:outline-none border w-[45%] bg-white border-custom-grey rounded-[7px] p-3 text-lg placeholder-slate-400 text-[16px] font-light mb-5 ${className}`}
          />

          {/* <button
          type="button"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <HiEyeOff className="text-gray-400" />
          ) : (
            <HiEye className="text-gray-400" />
          )}
        </button> */}
        </>
      ) : (
        <div className="relative flex items-center bg-white border border-custom-grey rounded-[7px] p-3 w-[45%] text-lg placeholder-slate-400 text-[16px] font-light mb-5">
          <>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className={`focus:outline-none text-[16px] w-[80%] lg:w-[100%] font-light ${className}`}
            />
            <FaEye
              style={{
                color: "#9F9F9F",
                width: "17px",
                height: "17px",
              }}
            />
          </>
        </div>
      )}
    </>
  );
};

export default AuthInput;
