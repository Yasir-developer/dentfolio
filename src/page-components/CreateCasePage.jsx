import BlueButtons from "@/components/Buttons/BlueButtons";
import AuthInput from "@/components/Inputs/AuthInput";
import React from "react";

const CreateCasePage = () => {
  return (
    <div className="items-center justify-center ">
      <div className=" my-8 mx-auto w-[90%]">
        <div
          className="flex flex-row justify-between"
          //   style={{ margin: "10px" }}
        >
          <div className="flex flex-col">
            <h1 className="text-[32px] font-semibold">Profile</h1>

            <p className="mt-2 text-[16px] font-light mb-5">
              Personal Information
            </p>
          </div>
          <div>
            <BlueButtons buttonText={"Add Case"} className={"px-[50px]"} />
          </div>
        </div>
        <div className="py-5 px-5 flex w-[100%] bg-white rounded-[7px] flex-col items-start justify-center mx-auto">
          <div className="w-full flex flex-wrap gap-x-2 lg:gap-x-7 gap-y-1 items-center justify-center">
            <AuthInput placeholder={"Case Title"} className={"w-[80%]"} />
            <AuthInput placeholder={"User Name"} />

            {/* <div className="w-[45%] flex mb-[72px]  justify-start items-start">
              <p className="text-[18px] font-semibold">Treatment Type:</p>
              <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 lg:gap-x-5 mt-3">
                {treatmentType.map((data, dataIndex) => (
                  <div
                    className="bg-custom-blue-light flex items-center justify-center h-8 px-3 rounded-[7px]"
                    key={dataIndex}
                  >
                    <p className="text-center text-custom-black text-[14px] font-semibold">
                      {data.type}
                    </p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCasePage;
