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
      <div
        className="dentistPlanBannerContainer lg:bg-custom-grey-medium relative"
        // style={{
        //   backgroundImage: `url(/images/female.png)`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        // }}
      >
        <div>
          <img
            src={"/images/female.png"}
            style={{
              objectFit: "contain",
              objectPosition: "80 100",
              backgroundRepeat: "no-repeat",
              // height: "300px",
            }}
            className="lg:hidden block"
          />
          {/* <Image
            src={"/images/female.png"}
            width={500}
            height={800}
            // layout="fill"
            // objectFit="cov"
            // sizes="100vw"
            // style={{
            //   resize: "contain",
            // }}
            className="ml-auto mr-0 md:hidden block "
          /> */}
        </div>
        <div className="dentistPlanBannerInnerContainer sizingStyles flex items-center justify-between absolute lg:relative top-0 h-full pl-1">
          <div className="w-[100%] lg:w-[55%] lg:py-[100px]  dentistPlanContentContainer">
            <h1 className="leading-[1.3] lg:text-4xl text-[14px] font-bold mb-4 text-black lg:w-full mt-[30px] lg:mt-[0px] w-[70%]">
              JOIN THE HUNDREDS OF OTHER DENTFOLIO MEMBERS GROWING THEIR{" "}
              <span className="lg:text-4xl text-[14px] font-bold font-poppins text-custom-blue">
                PRIVATE PATIENT LISTS
              </span>
            </h1>
            <p className="mb-4 text-black font-normal lg:text-[18px] text-[12px] w-[70%]">
              Start your free 1-month trial today. Cancel anytime
            </p>
            <BlueButtons
              buttonText="Start my Free Month"
              className={"text-[12px] mb-[30px] lg:mb-0"}
              // className="lg:!px-8  mx-auto"
              // btnStyle={ margin: "20px" }
            />
          </div>
          <div className="w-[45%] dentistPlanImageContainer hidden lg:block">
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
