import React from "react";
import profile from "../../../public/images/profile1.png";
import Image from "next/image";

import map from "../../../public/images/map.png";
const DoctorBasicDetail = () => {
  return (
    <div className="sizingStyles flex flex-row justify-between">
      <div className="w-[50%]">
        <div className=" px-8 py-10 flex flex-row items-center ">
          <div className="items-center">
            <Image src={profile} width={205} height={205} />
          </div>
          <div className="mx-8">
            <h2 className="text-custom-blue font-semibold text-[33px]">
              Dr. Dylan Taylor
            </h2>
            <div className="flex flex-col">
              <h3 className="text-custom-black text-[22px]">Orthodontist</h3>

              <h2 className="text-custom-black text-[16px] font-extralight">
                BDS | RDS | C.PAED
              </h2>
            </div>
          </div>
        </div>
        <div className="px-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            congue, sapien non efficitur sollicitudin, ex risus semper diam, sed
            ornare libero urna ac leo sit amet, consectetur adipiscing elit.
            Curabitur congue, sapien non efficitur sollicitudin, ex risus semper
            diam, sesectetur adipiscing elit.
          </p>

          <button className="bg-custom-blue font-semibold text-[16px] py-3 px-[60px] mt-[70px] w-139 text-sm text-white rounded-[7px]">
            Contact Me
          </button>
        </div>
      </div>

      <div className="py-10">
        <Image src={map} alt="logo" />
      </div>
    </div>
  );
};

export default DoctorBasicDetail;
