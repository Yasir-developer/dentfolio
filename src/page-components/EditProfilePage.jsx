import BlueButtons from "@/components/Buttons/BlueButtons";
import AuthInput from "@/components/Inputs/AuthInput";
import Router from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

const EditProfilePage = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Add event listener to handle clicks outside the dropdown
    const handleOutsideClick = (event) => {
      console.log(event, "event");
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = () => {
    setIsOpen(false);
    // Perform any other actions when an option is selected
  };
  const treatmentType = [
    {
      type: "Aligners",
    },
    {
      type: "Aligners",
    },
    {
      type: "Aligners",
    },
  ];
  return (
    <div className="items-center justify-center ">
      <div className=" my-8 mx-auto w-[90%]">
        <div
          className="flex flex-row justify-between items-center mx-[25px] lg:mx-[70px]"
          //   style={{ margin: "10px" }}
        >
          <div className="flex flex-col">
            <h1 className="text-[32px] font-semibold">Profile</h1>

            <p className="mt-2 text-[16px] font-light mb-5">
              Personal Information
            </p>
          </div>
          <div>
            <BlueButtons
              buttonText={"Add Case"}
              className={"lg:px-[50px]"}
              onClick={() => Router.push("/dentist/create-case?tab=create")}
            />
          </div>
        </div>
        <div className="py-5 px-5 flex w-[100%] rounded-[7px] flex-col items-start justify-center mx-auto">
          <div className="w-full flex flex-wrap gap-x-2 lg:gap-x-7 gap-y-1 items-center justify-center">
            {/* <AuthInput placeholder={"First Name"} className={"order-1"} /> */}
            <div className="relative flex items-center border bg-custom-dashboard-bg border-custom-grey rounded-[7px] p-3 w-[45%] placeholder-slate-400 text-[16px] font-light mb-5">
              <input
                type="text"
                className="focus:outline-none w-[80%] lg:w-[100%] font-normal lg:text-[16px] text-[14px] bg-custom-dashboard-bg"
                placeholder="Dr"
              />
              <div className="absolute top-0 right-0 mt-3 mr-2">
                <div className="flex" ref={dropdownRef}>
                  <div
                    className="flex items-center justify-center h-full px-2rounded-l-md cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <HiChevronDown
                      className={`transform  h-5 w-5 text-[#919191] ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <div className="bg-custom-dashboard-bg border border-gray-300 rounded-r-md shadow-md">
                      {/* Dropdown items */}
                      <ul className="py-2">
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={handleOptionSelect}
                        >
                          Option 1
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={handleOptionSelect}
                        >
                          Option 2
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={handleOptionSelect}
                        >
                          Option 3
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <AuthInput placeholder={"User Name"} className={"order-2"} />

            <AuthInput placeholder={"First Name"} className={"order-3"} />

            <AuthInput placeholder={"Last Name"} className={"order-4"} />

            <AuthInput
              placeholder={"Email Address"}
              className={"w-[92.5%] lg:w-[45%] order-5"}
            />
            <AuthInput
              placeholder={"Phone"}
              className={"w-[92.5%] lg:w-[45%] order-6"}
            />
            <AuthInput placeholder={"Display Name"} className={"order-7"} />

            <AuthInput placeholder={"GDC Number"} className={"order-8"} />
            <AuthInput
              placeholder={"Practice Building number/ Name"}
              className={"order-9"}
            />
            <AuthInput
              placeholder={"Practice Street Name"}
              className={"order-10"}
            />
            <AuthInput placeholder={"Practice City"} className={"order-11"} />
            <AuthInput
              placeholder={"Practice Post Code"}
              className={"order-12"}
            />
            {/* <div className="flex w-[90%] justify-between"> */}
            {/* <div className="flex "> */}
            <div className="lg:w-[45%] flex mt-5 lg:mt-0 mb-[72px]  justify-start items-start lg:order-[13] order-[14]">
              <button className="py-2 px-8 bg-[#D4D4D4] rounded-[7px] h-12">
                <p className="text-left text-[16px] font-semibold">
                  Upload Profile Photo
                </p>
              </button>
            </div>
            {/* </div> */}
            <textarea
              placeholder="Bio"
              className="w-[92.5%] lg:text-[16px] text-[14px] lg:w-[45%] border bg-custom-dashboard-bg border-custom-grey rounded-[7px] p-3 focus:outline-none lg:order-[14] order-[13]"
              rows={3}
            ></textarea>
            {/* <AuthInput
              placeholder={"Bio"}
              className={"h-[100px] align-text-top"}
            /> */}
          </div>
          <div className="lg:w-[45%] flex flex-col lg:mx-[50px] mt-[-33px] justify-start items-start">
            <p className="text-[18px] font-semibold">Treatment Type:</p>
            <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 lg:gap-x-5 mt-3">
              {treatmentType.map((data, dataIndex) => (
                <div
                  className="bg-custom-blue-light flex items-center justify-center h-10 px-5 rounded-[7px] grid-cols-2"
                  key={dataIndex}
                >
                  <p className="text-center text-custom-black text-[14px] font-semibold">
                    {data.type}
                  </p>
                  <FaTrash className="w-5 h-5 pl-[10px]" />
                </div>
              ))}
              <div className="flex items-center justify-center h-10 px-3 py-3 rounded-[7px] bg-[#EBFAF8]">
                <p className="text-center text-custom-black text-[14px] font-semibold">
                  Add More
                </p>
                <FaPlus className="w-5 h-5 pl-[10px] " />
              </div>
            </div>
          </div>
          <div>
            <BlueButtons
              buttonText={"Save"}
              className={"mt-6 lg:ml-[50px] lg:px-[50px]"}
              //   onClick={() => Router.push("/dentist/create-case?tab=create")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
