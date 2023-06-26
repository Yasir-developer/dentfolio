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
            <h1 className="text-[32px] font-semibold">Add Case</h1>

            <p className="mt-2 text-[16px] font-light mb-5">
              Upload a treatment case that you've done to show off your skills
              to potential patients.
            </p>
          </div>
          {/* <div>
            <BlueButtons buttonText={"Add Case"} className={"px-[50px]"} />
          </div> */}
        </div>
        <form>
          <div className="py-5 px-5 flex w-[100%] bg-white rounded-[7px] flex-col items-start justify-center mx-auto">
            <div className="w-full flex flex-wrap gap-x-2 lg:gap-x-7 gap-y-1 items-center justify-center">
              <AuthInput
                placeholder={"Case Title"}
                className={"w-full lg:!w-[90%]"}
              />
              <textarea
                placeholder="Case Description"
                className="w-full lg:w-[90%] border bg-white border-custom-grey rounded-[7px] p-3 focus:outline-none"
                rows={4}
              ></textarea>
            </div>
            <div className="flex flex-row lg:pl-16 pt-5 items-center">
              <p className="text-[18px] font-semibold">Case Visibility:</p>
              <div className="px-5">
                <label className="text-[16px] font-normal">
                  <input
                    type="radio"
                    value="Male"
                    className="ml-[15px] mr-[5px]"
                    // checked={this.state.selectedOption === "Male"}
                    // onChange={this.onValueChange}
                  />
                  Public
                </label>
              </div>
              <div className="radio">
                <label className="text-[16px] font-normal">
                  <input
                    type="radio"
                    value="Female"
                    className="ml-[15px] mr-[5px]"

                    // checked={this.state.selectedOption === "Female"}
                    // onChange={this.onValueChange}
                  />
                  Private
                </label>
              </div>
            </div>

            <div className="lg:ml-16 mt-10">
              <p className="text-[18px] font-semibold">Upload Photos:</p>
              <button className="py-2 px-8 bg-[#D4D4D4] rounded-[7px] h-12 mt-5">
                <p className="text-left text-[16px] font-semibold">
                  Select Images
                </p>
              </button>
            </div>

            <BlueButtons
              buttonText={"Save"}
              className={
                "py-2 px-[60px] bg-[#D4D4D4] rounded-[7px] h-12 mt-10 lg:ml-16 "
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCasePage;
