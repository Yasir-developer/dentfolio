import Image from "next/image";
import React from "react";
import logo from "../../../public/images/loginLogo.svg";
import logoWhite from "../../../public/images/logoWhite.png";

import { FaEye } from "react-icons/fa";
import BlueButtons from "@/components/Buttons/BlueButtons";
const login = () => {
  return (
    // <div className="w-full flex h-[100vh] bg-[#F9FBFC]">
    //   <div className="w-[40%] bg-gradient-radial from-[#0372E2] to-[#0B5FB4] justify-center flex items-center text-center">
    //     <Image src={logo} alt="logo" />
    //   </div>
    //   <div className="w-[80%] flex flex-col justify-around h-[90%] bg-white align-middle my-auto mx-[100px] rounded-[7px]">
    //     <div className="flex flex-col items-center  bg-white justify-center w-[100%] m-auto">
    //       <div className="w-[50%] m-auto bg-transparent">
    //         <img
    //           className=" flex justify-center mx-auto"
    //           src={"/images/logo.png"}
    //           alt=""
    //         />

    //         <h2 className="my-8 text-center font-medium text-[32px] text-custom-black">
    //           Sign In
    //         </h2>
    //         <div className="w-full flex flex-col items-center">
    //           <input
    //             type="text"
    //             id="fullName"
    //             placeholder="Email"
    //             className="focus:outline-none border bg-[#F9FBFC]  border-custom-grey rounded-[7px]  w-[100%] p-3 text-[16px] placeholder:text-slate-400 placeholder-[#9F9F9F] font-extralight mb-5"
    //           />

    //           <div className=" relative flex items-center bg-[#F9FBFC] border border-custom-grey rounded-[7px] p-3  w-[100%] text-[16px] placeholder:text-slate-400 placeholder-[#9F9F9F] font-extralight mb-5">
    //             <input
    //               type="text"
    //               id="fullName"
    //               placeholder="Password"
    //               className="w-full text-[16px] placeholder:text-slate-400 bg-[#F9FBFC]  placeholder-[#9F9F9F] font-extralight focus:outline-none"
    //             />
    //             <FaEye
    //               style={{
    //                 color: "#9F9F9F",
    //                 width: "17px",
    //                 height: "17px",
    //                 // display:
    //               }}
    //             />
    //           </div>
    //           <div className="flex justify-end  w-full">
    //             <p className="text-right text-[14px] fonts-medium">
    //               Forgot Password
    //             </p>
    //           </div>
    //           <div className="mt-5">
    //             <BlueButtons buttonText={"Login"} className={"px-[50px]"} />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="py-4 px-6 text-center">
    //       <p className="text-sm text-[#858585]">
    //         Don't have registration yet?{" "}
    //         <a href="#" className="text-blue-600 underline">
    //           Register now
    //         </a>
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div className="lg:w-full flex flex-col md:flex-row h-screen bg-[#F9FBFC]">
      <div className="lg:w-full lg:py-[0px] py-[30px] md:w-2/5 bg-gradient-radial from-[#0372E2] to-[#0B5FB4] justify-center flex items-center text-center">
        <Image src={logo} alt="logo" className="mx-auto hidden md:block" />

        <Image src={logoWhite} className="mx-auto lg:hidden" />
        {/* <Image src={logo} alt="logo" className="hidden" /> */}
      </div>
      <div className="lg:w-full md:w-3/5 flex flex-col justify-between h-[90%] bg-white my-[20px] lg:my-auto mx-[5%] md:mx-[100px] rounded-[7px]">
        <div className="flex flex-col items-center bg-white justify-center w-full">
          <div className=" w-[100%] lg:w-4/5 md:w-[50%] m-auto bg-transparent">
            <img
              className="mx-auto hidden md:block lg:mt-[20px]"
              src="/images/logo.png"
              alt=""
            />

            <h2 className="my-8 text-center font-semibold text-[32px] md:text-4xl text-custom-black">
              Sign In
            </h2>
            <div className="w-full flex flex-col items-center">
              <input
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
              </div>
              <div className="flex justify-end w-full">
                <p className="text-right text-sm font-medium">
                  Forgot Password
                </p>
              </div>
              <div className="mt-5">
                <BlueButtons buttonText="Login" className="px-[50px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 px-6 text-center">
          <p className="text-sm text-[#858585]">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 underline">
              Register now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
