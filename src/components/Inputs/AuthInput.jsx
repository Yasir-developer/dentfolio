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
  containerClassName,
  btnStyle,
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
            style={btnStyle}
            // place
            className={`focus:outline-none border w-[45%] border-custom-grey rounded-[7px] p-3 bg-custom-dashboard-bg placeholder-slate-400 lg:text-[16px] text-[14px] font-normal mb-5 ${className}`}
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
        <div
          className={`relative flex items-center border border-custom-grey rounded-[7px] p-3 w-[100%] lg:w-full placeholder-slate-400 bg-custom-dashboard-bg font-light mb-5 ${containerClassName}`}
        >
          <>
            <input
              type="password"
              id="password"
              value={value}
              onChange={onChange}
              placeholder={placeholder ? placeholder : "Password"}
              className={`focus:outline-none w-[100%] lg:w-[100%] lg:text-[16px] text-[14px] font-light bg-custom-dashboard-bg ${className}`}
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
