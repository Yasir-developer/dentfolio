import React from "react";
import checkCircle from "../../../public/images/check-circle.svg";
import Image from "next/image";

const TreatmentProvide = () => {
  const treatmentArray = [
    {
      type: "Oral Examination",
    },
    {
      type: "Teeth Alignments",
    },
    {
      type: "Teeth Straightening",
    },
    {
      type: "Root Canal",
    },
  ];
  return (
    <div className="my-5 sizingStyles">
      <h2 className="text-[32px] text-black text-center font-medium">
        <span className=" text-custom-blue">TREATMENT</span> I PROVIDE
      </h2>
      <div className="flex mt-7 gap-x-5">
        {treatmentArray.map((item, index) => {
          return (
            <div
              className="w-[25%] bg-custom-blue-light flex flex-col items-center justify-center py-5 text-center rounded-[7px]"
              key={index}
            >
              <Image src={checkCircle} alt="logo" />

              <p className="text-custom-black text-[18px] font-semibold mt-3 mb-5">
                {item.type}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TreatmentProvide;
