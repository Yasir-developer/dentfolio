import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/images/loginLogo.svg";
import logoWhite from "../../../public/images/logoWhite.png";
import logotwo from "../../../public/images/logo.png";
import BlueButtons from "@/components/Buttons/BlueButtons";
import AuthInput from "@/components/Inputs/AuthInput";
import { FaCheck } from "react-icons/fa";
import Router from "next/router";

const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [termChecked, setTermChecked] = useState(false);

  return (
    <div
      className="lg:w-full h-full flex flex-col lg:flex-row bg-[#F9FBFC] max-h-[100vh] 4xl:min-h-[100vh] "
      // style={{ direction: "rtl", overflow: "auto" }}
    >
      <div className="lg:w-[40%] lg:py-[0px] py-[30px]  bg-gradient-radial from-[#0372E2] to-[#0B5FB4] justify-center flex items-center text-center">
        <Image src={logo} alt="logo" className="mx-auto hidden lg:block" />

        <Image src={logoWhite} className="mx-auto lg:hidden" />
        {/* <Image src={logo} alt="logo" className="hidden" /> */}
      </div>
      <div
        className="lg:w-[60%] flex flex-col justify-between rounded-[7px] overflow-y-scroll"
        // style={{ direction: "ltr" }}
      >
        <div
          className="flex flex-col items-center bg-white justify-center m-5 4xl:h-full"
          // style={{
          //   transform: "scaleX(-1)", //Flips the child back to normal
          // }}
        >
          <div className="w-[100%] m-auto bg-transparent flex flex-col justify-around">
            <Image
              className="mx-auto hidden lg:block lg:mt-[20px]"
              src={logotwo}
            />

            <h2 className="my-8 text-center font-semibold text-[32px] md:text-4xl text-custom-black">
              Sign Up
            </h2>
            <form>
              <div className="w-full flex flex-wrap gap-x-2 lg:gap-x-7 gap-y-2 items-center justify-center">
                <AuthInput placeholder={"First Name"} />
                <AuthInput placeholder={"Last Name"} />

                <AuthInput
                  placeholder={"Email Address"}
                  className={"w-[92.5%] lg:w-[45%]"}
                />

                <AuthInput
                  placeholder={"Display Name"}
                  className={"w-[92.5%] lg:w-[45%]"}
                />
                <AuthInput
                  placeholder={"Password"}
                  type={"password"}
                  // className={"!w-[45%]"}
                  containerClassName={"!w-[45%]"}
                />
                <AuthInput placeholder={"GDC Number"} />
                <AuthInput placeholder={"Practice Building number/ Name"} />
                <AuthInput placeholder={"Practice Street Name"} />
                <AuthInput placeholder={"Practice City"} />
                <AuthInput placeholder={"Practice Post Code"} />

                {/* <input
                type="text"
                id="fullName"
                placeholder="Email Address"
                className="focus:outline-none border bg-[#F9FBFC] border-custom-grey rounded-[7px] w-full p-3 text-lg placeholder-slate-400 text-[16px] font-light mb-5"
              />

              <div className="relative flex items-center bg-[#F9FBFC] border border-custom-grey rounded-[7px] p-3 w-full text-lg placeholder-slate-400 text-[16px] font-light mb-5">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full text-lg bg-[#F9FBFC] placeholder-[#9F9F9F] font-light focus:outline-none"
                />
                <FaEye
                  style={{
                    color: "#9F9F9F",
                    width: "17px",
                    height: "17px",
                  }}
                />
              </div> */}
              </div>

              <div className="flex flex-col mx-[20px] my-[40px]">
                <div className="flex flex-row pb-[30px]">
                  <input
                    type="checkbox"
                    id="checkboxId"
                    checked={isChecked}
                    onChange={(e) => setTermChecked(e.target.checked)}
                    className="hidden"
                  />
                  <label
                    htmlFor="checkboxId"
                    className="flex items-center cursor-pointer rounded-full bg-custom-blue text-white w-6 h-6 p-1"
                  >
                    {isChecked && <FaCheck className="w-4 h-4" />}
                  </label>
                  <span className="ml-2  text-[14px] lg:text-[16px] font-light">
                    I agree to the website terms & conditions
                  </span>
                </div>

                <div className="flex flex-row">
                  <input
                    type="checkbox"
                    id="checkboxId"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="hidden"
                  />
                  <label
                    htmlFor="checkboxId"
                    className={`flex items-center cursor-pointer rounded-full bg-custom-blue text-white w-6 h-6 ${
                      !isChecked ? "p-3" : "p-1"
                    }`}
                  >
                    {isChecked && <FaCheck className="w-4 h-4" />}
                  </label>
                  <span className="ml-2 text-[14px] lg:text-[16px] font-light">
                    I have valid consent from my patients to republish/use/share
                    photographs uploaded to Dentfolio{" "}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex flex-col items-center justify-center">
                <BlueButtons buttonText="Submit" className="px-[50px]" />

                <div className="py-4 px-6 text-center">
                  <p className="text-sm text-[#858585]">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="text-custom-blue underline"
                      onClick={() => Router.push("/dentist/login")}
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
