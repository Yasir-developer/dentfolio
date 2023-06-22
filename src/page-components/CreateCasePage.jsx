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
        <div className="py-5 px-5 flex w-[100%] bg-white rounded-[7px] flex-col items-center justify-center mx-auto">
          <div className="w-full flex flex-wrap gap-x-2 lg:gap-x-7 gap-y-1 items-center justify-center">
            <AuthInput placeholder={"First Name"} />
            <AuthInput placeholder={"User Name"} />

            <AuthInput
              placeholder={"First Name"}
              className={"w-[92.5%] lg:w-[45%]"}
            />

            <AuthInput
              placeholder={"Last Name"}
              className={"w-[92.5%] lg:w-[45%]"}
            />

            <AuthInput
              placeholder={"Email Address"}
              className={"w-[92.5%] lg:w-[45%]"}
            />
            <AuthInput placeholder={"Phone"} />
            <AuthInput placeholder={"Display Name"} />

            <AuthInput placeholder={"GDC Number"} />
            <AuthInput placeholder={"Practice Building number/ Name"} />
            <AuthInput placeholder={"Practice Street Name"} />
            <AuthInput placeholder={"Practice City"} />
            <AuthInput placeholder={"Practice Post Code"} />
            {/* <div className="flex w-[90%] justify-between"> */}
            {/* <div className="flex "> */}
            <div className="w-[45%] flex mb-[72px]  justify-start items-start">
              <button className="py-2 px-8 bg-[#D4D4D4] rounded-[7px] h-12">
                <p className="text-left text-[16px] font-semibold">
                  Upload Profile Photo
                </p>
              </button>
            </div>
            {/* </div> */}
            <AuthInput
              placeholder={"Bio"}
              className={"h-[100px] align-text-top"}
            />
            <div className="w-[45%] flex mb-[72px]  justify-start items-start">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCasePage;
