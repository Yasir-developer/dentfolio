import React from "react";
import logoWhite from "../../../public/images/logoWhite.png";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
const DashboardHeader = () => {
  return (
    <div className="h-[100px] border-b border-[#c8bfc3] w-full flex ">
      <div className="p-4 bg-gradient-radial from-[#0372E2] to-[#0B5FB4] w-[18%]">
        <Image src={logoWhite} className="mx-auto" />

        {/* <h1 className="text-lg font-bold">Dashboard</h1> */}
      </div>
      <div className="w-[85%] flex justify-end ">
        <div className="border-l border-l-[#c8bfc3] flex">
          <div className="flex flex-row items-center justify-center px-5 ">
            <Image
              src={"/images/profileImg.png"}
              alt="logo"
              width={51}
              height={51}
              sizes="100vw"
              className="rounded-[25.5px]"
            />

            <h2 className="text-custom-blue text-[16px] font-semibold px-2">
              Dylan Taylor
            </h2>
            <FaAngleDown
              style={{
                color: "#919191",
                width: "20px",
                height: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
