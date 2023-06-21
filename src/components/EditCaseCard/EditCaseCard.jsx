import Image from "next/image";
import React from "react";
import BlueButtons from "../Buttons/BlueButtons";
import { FaEllipsisV } from "react-icons/fa";

const EditCaseCard = ({ img_url, name, description }) => {
  return (
    <div>
      <div className="mb-10">
        {/* <div> */}
        <div
          className="border rounded-[7px] border-[#F6EBEB] border-b flex flex-col-reverse lg:flex-row px-3 mt-7"
          //   key={index}
        >
          <Image
            src={img_url}
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full max-w-[300px] lg:w-auto lg:h-[170px] my-3"
          />

          <div className="flex flex-col lg:px-5 pt-5 pb-5 items-start">
            <h2 className="text-center lg:text-left text-[21px] text-custom-blue font-semibold my-2">
              {name}
            </h2>

            <p className="text-center lg:text-left text-[12px] lg:text-[16px] font-light">
              {description}
            </p>
            <div className="justify-start">
              <BlueButtons
                buttonText={"Edit"}
                className={"mx-auto my-2 px-10"}
              />
            </div>
          </div>
          <FaEllipsisV
            style={{
              margin: "3px",
              marginTop: "5px",
              color: "#000",
              width: "18px",
              height: "18px",
            }}
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default EditCaseCard;
