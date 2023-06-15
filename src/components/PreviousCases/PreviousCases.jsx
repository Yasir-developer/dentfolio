import React from "react";
import caseOne from "../../../public/images/case2.png";
import Image from "next/image";

const PreviousCases = () => {
  return (
    <div className="sizingStyles">
      <h2 className="text-[32px] text-black text-center font-medium">
        <span className=" text-custom-blue">MY PREVIOUS </span>CASES
      </h2>

      {/* <div> */}
      <div className="border rounded-[7px] border-[#F6EBEB] border-b flex items-center ">
        <Image src={caseOne} alt="logo" />

        <h2 className="text-[32px] text-custom-blue text-center font-medium">
          Composite Bonding
        </h2>
      </div>
      {/* </div> */}
    </div>
  );
};

export default PreviousCases;
