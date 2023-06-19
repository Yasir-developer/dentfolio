import Image from "next/image";
import React from "react";
import logo from "../../../public/images/loginLogo.svg";
import { FaEye } from "react-icons/fa";
const login = () => {
  return (
    <div className="w-full flex h-[100vh]">
      <div className="w-[40%] bg-gradient-radial from-[#0372E2] to-[#0B5FB4] justify-center flex items-center text-center">
        <Image src={logo} alt="logo" />
      </div>
      <div className="w-[80%] ">
        <div className="mx-[50px] my-[50px] flex flex-col items-center bg-[#F9FBFC] h-[90vh]">
          <div className="my-[50px] w-full">
            <img
              className=" flex justify-center mx-auto"
              src={"/images/logo.png"}
              alt=""
            />

            <h2 className="my-10 text-center font-semibold text-[32px] text-custom-black">
              Sign In
            </h2>
            <div className="w-full flex flex-col items-center">
              <input
                type="text"
                id="fullName"
                placeholder="Email"
                className="focus:outline-none border bg-[#F9FBFC]  border-custom-grey rounded-[7px]  w-[50%] p-3 text-[16px] placeholder:text-slate-400 placeholder-[#9F9F9F] font-extralight mb-5"
              />

              <div className=" relative flex items-center bg-[#F9FBFC] border border-custom-grey rounded-[7px] p-3  w-[50%] text-[16px] placeholder:text-slate-400 placeholder-[#9F9F9F] font-extralight mb-5">
                <input
                  type="text"
                  id="fullName"
                  placeholder="Password"
                  className="w-full text-[16px] placeholder:text-slate-400 bg-[#F9FBFC]  placeholder-[#9F9F9F] font-extralight focus:outline-none"
                />
                <FaEye
                  style={{
                    color: "#9F9F9F",
                    width: "17px",
                    height: "17px",
                    // display:
                  }}
                />
              </div>
              <div className="flex justify-end  w-full mr-[400px]">
                <p className="text-right">Forgot Password</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
