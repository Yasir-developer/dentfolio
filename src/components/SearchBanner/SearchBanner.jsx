import Image from "next/image";
import React from "react";
import { FaFilter } from "react-icons/fa";
import locationCross from "../../../public/images/location-crosshairs-solid.svg";
const SearchBanner = () => {
  return (
    <div className="bg-gradient-to-r from-custom-grey-dark to-custom-grey-light ">
      <div className="flex items-center sizingStyles">
        <div className="w-1/2">
          <div className="lg:p-4">
            <h1 className="text-5xl font-bold mb-4 text-black">
              FIND A PRIVATE DENTIST{" "}
              <span className="text-5xl font-bold font-poppins text-custom-blue">
                NEAR YOU
              </span>{" "}
            </h1>
            <p className="mb-4 w-3/5 text-black font-medium">
              Hundreds of dentists and practices around the UK showcase their
              portfolio work on Dentfolio - the home to the UK's best private
              dentists
            </p>
          </div>

          <div className="bg-white w-3/5 rounded-[7px] max-w-[1800px] mx-4	">
            <div className="flex items-center p-4 w-full">
              <div className="border border-gray-300 w-full flex items-center rounded-[5px]">
                {/* <img
                  src="/images/icon-01.png"
                  alt="Location Icon"
                  className="w-6 h-6 ml-2"
                /> */}
                <Image src={locationCross} width={20} />
                {/* <BiCurrentLocation size={24} color="#000" /> */}

                <input
                  type="text"
                  placeholder="Location"
                  className="flex-grow py-2 px-4 focus:outline-none w-4/5"
                />
                <FaFilter size={24} color="#000" />

                <button className="bg-custom-blue text-white px-4 py-2 rounded ml-2 focus:outline-none">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="/images/doctor-2.png"
            alt="Image"
            className="w-full max-w-[500px] mr-0 ml-auto"
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SearchBanner;
