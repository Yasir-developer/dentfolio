import Image from "next/image";
import React from "react";
import upArrow from "../../../public/images/up.svg";
import downArrow from "../../../public/images/down.svg";
import dental from "../../../public/images/dental.png";
import satisfied from "../../../public/images/satisfied.png";
import cellular from "../../../public/images/cellular.png";

const HowItWorks = () => {
  return (
    <div className="mb-[100px] mt-[100px] sizingStyles">
      <div className="flex items-center  w-full justify-center">
        <h1 className="text-5xl font-bold mb-4 font-poppins text-black">
          HOW IT{" "}
          <span className="text-5xl font-bold font-poppins text-custom-blue">
            WORKS
          </span>{" "}
        </h1>
      </div>
      <div className="flex-row">
        <div className="flex items-center sizingStyles justify-center mt-[50px]">
          <div className="bg-[#EBFAF8] w-[346px] h-[263px] mx-5 px-5 font-poppins relative rounded-[7px]">
            {/* <div className="flex-row"> */}
            <div className="w-[70%]">
              <h1 className="font-bold text-[18px] mt-5 mb-2 text-custom-blue">
                FIND DENTISTS NEAR YOU
              </h1>
              <p className="text-[14px] ">
                Discover local dentists in your area and choose the perfect one
                for your dental needs.
              </p>

              <p className="text-[14px] my-5 underline decoration-solid text-custom-blue font-poppins font-semibold">
                Find Dentist
              </p>
            </div>

            <div className="absolute bottom-0 right-0">
              <Image src={satisfied} alt="logo" />
            </div>
          </div>
          <Image src={upArrow} alt="logo" />

          <div className="bg-[#F7CBBF] w-[346px] h-[263px] mx-5 px-5 font-poppins relative rounded-[7px]">
            <div className="w-[80%]">
              <h1 className="font-bold text-[18px] mt-5 mb-2 text-custom-blue">
                EXPLORE DENTAL WORK
              </h1>
              <p className=" text-[14px]">
                Discover impressive dental work through a collection of photos
                showcasing exceptional treatments.
              </p>

              <p className="text-[14px] my-5 underline decoration-solid text-custom-blue font-poppins font-semibold">
                Find Dentist
              </p>
            </div>

            <div className="absolute bottom-0 right-0">
              <Image src={dental} alt="logo" />
            </div>
          </div>
          <Image src={downArrow} alt="logo" />

          <div className="bg-[#DCE8FA] w-[346px] h-[263px] mx-5 px-5 font-poppins relative rounded-[7px]">
            <div className="w-[80%]">
              <h1 className="font-bold text-[18px] mt-5 mb-2 text-custom-blue">
                CONTACT YOUR DENTAL
              </h1>
              <p className=" text-[14px] font-extralight font-poppins">
                Contact Your Dental: Find a local dentist and schedule
                appointments easily with our convenient online platform
              </p>

              <p className="text-[14px] my-5 underline decoration-solid text-custom-blue font-poppins font-semibold">
                Find Dentist
              </p>
            </div>

            <div className="absolute bottom-0 right-0">
              <Image src={cellular} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
