import React from "react";
import logoWhite from "../../../public/images/logoWhite.png";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
const DashboardFooter = () => {
  return (
    <div className="h-[100px] w-full flex">
      <div className="w-full flex justify-between items-center">
        <p className="px-[60px] text-[14px]">
          © Copyright 2023 Dentfolio. All Rights Reserved.
        </p>
        <div className="flex  mr-[50px]">
          <p className="px-3 text-[14px]">Terms Of Services</p>
          <p className="text-[14px]">Privacy Policy</p>
        </div>

        {/* <div className="flex flex-row items-center justify-center px-5 ">
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
        </div> */}
      </div>
    </div>
  );
};

export default DashboardFooter;
