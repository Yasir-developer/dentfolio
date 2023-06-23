import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import BlueButtons from "../Buttons/BlueButtons";

const MonthlyPlan = () => {
  return (
    // <div className="flex">
    <div className="w-[45%]">
      <div className="bg-custom-blue w-full rounded-[7px] px-8 py-5">
        <h2 className="text-white text-[24px] font-semibold">
          DENTFOLIO MONTHLY PLAN
        </h2>
        <p className="text-white text-[20px] font-light">
          With 30-Day Free Trial
        </p>
      </div>
      <div className="bg-[#F5F5F5] w-full rounded-[7px] px-8 py-5">
        <div className="flex flex-row items-start my-2">
          <FaCheckCircle size={16} className="mt-1 w-4 h-4" />
          <p className="px-2 text-[15px] font-normal">
            After your free month, pay as little as £99 / month
          </p>
        </div>

        <div className="flex flex-row items-start my-2 py-2">
          <FaCheckCircle className="mt-1 w-4 h-4" />
          <p className="px-2 text-[15px]">
            Cancel anytime. We'll remind you 7 days before your trial ends.
          </p>
        </div>

        <BlueButtons
          buttonText={"Start my Free Month"}
          className={"my-5 text-[18px] font-medium"}
        />

        <div className="flex flex-row justify-between">
          <p className="text-[13px] font-light mt-5">
            sit amet, consectetur adipiscing elit
          </p>

          <h1 className="text-[41px] font-bold">
            £99 <span className="text-[13px] font-normal">/ month</span>
          </h1>
        </div>
      </div>
    </div>
    //   <div>sdadnajsn</div>
    // </div>
  );
};

export default MonthlyPlan;
