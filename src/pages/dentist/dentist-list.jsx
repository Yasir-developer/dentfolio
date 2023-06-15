import DoctorProfileCard from "@/components/DoctorProfileCard/DoctorProfileCard";
import React from "react";
import { FaFilter } from "react-icons/fa";

const dentistlist = () => {
  return (
    <div className="bg-blue sizingStyles mt-8">
      <h1 className="text-4xl font-bold mb-4 text-custom-black">
        TOP{" "}
        <span className="text-4xl font-poppins text-custom-blue">
          CERTIFIED
        </span>{" "}
        DENTIST IN{" "}
        <span className="text-4xl font-poppins text-custom-blue">
          {" "}
          MANCHESTER
        </span>
      </h1>

      <h3 className="text-[26px] font-[500]">
        25 Dentist available in Manchester
      </h3>
      <div className="w-[65%]">
        <p className="mt-8 text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          congue, sapien non efficitur sollicitudin, ex risus semper diam, sed
          ornare libero urna ac leo.
        </p>
      </div>
      <div className="bg-white rounded-[7px] w-[35%]">
        <div className="flex items-center py-[30px] w-full">
          <div className="border border-gray-300 w-full flex items-center rounded-[5px] pr-[15px]">
            <img
              src="/images/icon-01.png"
              alt="Location Icon"
              className="w-6 h-6 ml-2"
            />

            {/* <BiCurrentLocation size={24} color="#000" /> */}

            <input
              type="text"
              placeholder="Location"
              className="flex-grow py-2 px-4 focus:outline-none w-4/5"
            />
            <FaFilter size={16} color="#000" />
          </div>
        </div>
      </div>

      <DoctorProfileCard />
      <div className="flex justify-center my-[80px]">
        <button className="bg-custom-blue font-semibold text-[16px] py-3 px-[60px] mt-10  w-139 text-sm text-white rounded-[7px] ">
          Load More{" "}
        </button>
      </div>
    </div>
  );
};

export default dentistlist;
