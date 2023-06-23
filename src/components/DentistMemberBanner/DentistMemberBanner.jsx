import React from "react";
import BlueButtons from "@/components/Buttons/BlueButtons";
import Image from "next/image";
import doctor from "../../../public/images/female-dentist.png";
import PrivatePatients from "@/page-components/PrivatePatients";
import { FaLongArrowAltDown, FaStethoscope } from "react-icons/fa";
import MonthlyPlan from "../MonthlyPlan/MonthlyPlan";
const DentistMemberBanner = () => {
  const stepImages = [
    "/image/doctor.png",
    "/image/doctor.png",
    "/image/doctor.png",
    "/image/doctor.png",
    "/image/doctor.png",
  ];
  return (
    <>
      <div className="dentistPlanBannerContainer bg-custom-grey-medium">
        <div className="dentistPlanBannerInnerContainer sizingStyles flex items-center justify-between">
          <div className="w-[55%] py-[130px] dentistPlanContentContainer">
            <h1 className="leading-[1.3] text-3xl lg:text-4xl font-bold mb-4 text-black w-full mt-[20px] lg:mt-[0px]">
              JOIN THE HUNDREDS OF OTHER DENTFOLIO MEMBERS GROWING THEIR{" "}
              <span className="text-3xl lg:text-4xl font-bold font-poppins text-custom-blue">
                PRIVATE PATIENT LISTS
              </span>
            </h1>
            <p className="mb-4 text-black font-normal lg:text-[18px] text-[13px]">
              Start your free 1-month trial today. Cancel anytime
            </p>
            <BlueButtons buttonText="Start my Free Month" className="!px-8" />
          </div>
          <div className="w-[45%] dentistPlanImageContainer">
            <Image
              src={doctor}
              width={0}
              height={0}
              sizes="100vw"
              className="h-[614px] w-auto ml-auto mr-0"
            />
          </div>
        </div>
      </div>

      <PrivatePatients />
      {/* <div className="flex flex-row justify-center items-center my-10">
        <div class="line"></div>
        <div class="stepIndicator">
          <div class="step">
            <div className="circleRadius">
              <div className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-center">
                  <div class="circle">
                    <FaStethoscope className="text-white" size={25} />
                  </div>
                  <div class="line"></div>
                </div>
                <FaLongArrowAltDown size={15} className="text-custom-blue " />

                <div className="bg-custom-blue w-[200%] py-3 items-center justify-center">
                  <p className="text-center text-white text-[18px] font-semibold">
                    1. CREATE YOUR ACCOUNT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <MonthlyPlan /> */}
    </>
  );
};

export default DentistMemberBanner;
