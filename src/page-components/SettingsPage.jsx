import BlueButtons from "@/components/Buttons/BlueButtons";
import AuthInput from "@/components/Inputs/AuthInput";
import React from "react";
import { FaEye } from "react-icons/fa";

const SettingsPage = () => {
  return (
    <div className="items-center justify-center ">
      <div className=" my-8 mx-auto w-[90%]">
        <h1 className="text-[32px] font-semibold">Settings</h1>

        <p className="mt-2 text-[16px] font-light mb-5">Update Information</p>
      </div>

      <div className="py-5 px-5 flex w-[90%] bg-white rounded-[7px] flex-col justify-center mx-auto mb-8">
        <h2 className="font-medium text-[18px]">Reset Password </h2>
        {/* <p className="font-medium text-[16px] my-3">New Password </p> */}
        <div className="mt-5">
          <div className="relative flex items-center bg-white border border-custom-grey rounded-[7px] p-3 w-[20%] placeholder-slate-400 text-[16px] font-light mb-5">
            <>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className={`focus:outline-none text-[16px] w-[80%] lg:w-[100%] font-light`}
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
          {/* <p className="font-medium text-[16px] my-3">New Password </p> */}

          <div className="relative flex items-center bg-white border border-custom-grey rounded-[7px] p-3 w-[20%] placeholder-slate-400 text-[16px] font-light mb-5">
            <>
              <input
                type="password"
                id="password"
                placeholder="Confirm New Password"
                className={`focus:outline-none text-[16px] w-[80%] lg:w-[100%] font-light`}
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

          <BlueButtons buttonText={"Save"} />
        </div>
      </div>
      {/* <DashboardFooter /> */}
    </div>
  );
};

export default SettingsPage;
