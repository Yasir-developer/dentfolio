import BlueButtons from "@/components/Buttons/BlueButtons";
import AuthInput from "@/components/Inputs/AuthInput";
import Router from "next/router";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

const BillingPage = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="items-center justify-center ">
      <div className="flex lg:flex-row flex-col  justify-between lg:items-center my-8 mx-auto w-[90%]">
        <div className="flex flex-col">
          <h1 className="lg:text-[32px] text-[28px] lg:font-semibold font-medium">
            Billing Method
          </h1>

          <p className="mt-2 text-[16px] font-light mb-5">
            Update your billing details and address
          </p>
        </div>

        <div>
          <BlueButtons
            buttonText={"Billing History"}
            className={"lg:px-[70px] px-[30px] text-[14px]"}
            onClick={(e) => {
              // e.preventDefault();
              Router.push({
                pathname: "/dentist/billing-history",
                query: { tab: "bill" },
              });
            }}
          />
        </div>
      </div>

      <div className="py-5 flex w-[90%] rounded-[7px] flex-col justify-start mx-auto mb-8">
        <h2 className="font-medium text-[18px]">Card Details </h2>
        {/* <p className="font-medium text-[16px] my-3">New Password </p> */}
        <div className="mt-5 flex flex-col">
          <div className="flex flex-col lg:flex-row">
            <AuthInput
              placeholder={"Name on Card"}
              className={"!w-[100%] lg:!w-[25%] "}
            />
            {/* <div className="border border-custom-grey rounded-[7px] ml-3 h-[50px] items-center justify-center bg-custom-dashboard-bg"> */}
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Expiry"
              wrapperClassName="!w-[100%] lg:!w-[15%]"
              className="focus:outline-none border border-custom-grey rounded-[7px] p-3 ml-0 !w-[100%] lg:!w-[full] lg:ml-3 h-[50px] items-center justify-center bg-custom-dashboard-bg "
              //   selected={month}
              //   onChange={(date) => setMonth(date)}
              //   className={`form-control`}
              dateFormat="MM/yyyy"
              minDate={new Date()}
              showMonthYearPicker
              // showFullMonthYearPicker
              // showTwoColumnMonthYearPicker
              required
            />
            {/* </div> */}
          </div>

          <div className="flex flex-col lg:flex-row lg:mt-0 mt-5">
            <AuthInput
              placeholder={"Card Number"}
              className={"!w-[100%] lg:!w-[25%] "}
            />
            {/* <div className="border border-custom-grey rounded-[7px] ml-3 h-[50px] items-center justify-center bg-custom-dashboard-bg"> */}

            <input
              type={"password"}
              placeholder={"CVV"}
              // value={value}
              // onChange={onChange}

              maxLength={4}
              className={`focus:outline-none border border-custom-grey rounded-[7px] lg:p-3 p-3 !w-[100%] lg:!w-[15%]  bg-custom-dashboard-bg placeholder-slate-400 lg:text-[16px] text-[14px] font-normal mb-5 lg:ml-3 ml-0`}
            />

            {/* <AuthInput
              placeholder={"CVV"}
              className={"!w-[18.5%] ml-3"}
              type={"password"}
              maxLength={4}
            /> */}
            {/* </div> */}
          </div>
        </div>
        <BlueButtons buttonText={"Save"} className={"mr-auto"} />
      </div>

      {/* <DashboardFooter /> */}
    </div>
  );
};

export default BillingPage;
