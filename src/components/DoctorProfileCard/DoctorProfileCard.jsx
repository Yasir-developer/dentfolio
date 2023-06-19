import Image from "next/image";
import React from "react";
import location from "../../../public/images/location.svg";

const DoctorProfileCard = () => {
  const doctorArray = [
    {
      id: 1,
      name: "Dr. Dylan Taylor",
      country: "Manchester",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue, sapien non efficitur sollicitudin, ex risus semper diam, sed ornare libero urna ac leo sit amet, consectetur adipiscing elit. Curabitur congue, sapien non efficitur sollicitudin, ex risus semper diam, se",
      img_url: "/images/profile1.png",
    },

    {
      id: 2,
      name: "Dr.Vincent Sullivan",
      country: "Manchester",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue, sapien non efficitur sollicitudin, ex risus semper diam, sed ornare libero urna ac leo sit amet, consectetur adipiscing elit. Curabitur congue, sapien non efficitur sollicitudin, ex risus semper diam, se",
      img_url: "/images/profile2.png",
    },

    {
      id: 3,
      name: "Dr.Joan Jackson ",
      country: "Manchester",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue, sapien non efficitur sollicitudin, ex risus semper diam, sed ornare libero urna ac leo sit amet, consectetur adipiscing elit. Curabitur congue, sapien non efficitur sollicitudin, ex risus semper diam, se",
      img_url: "/images/profile3.png",
    },
    {
      id: 4,
      name: "Dr. Dylan Taylor",
      country: "Manchester",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue, sapien non efficitur sollicitudin, ex risus semper diam, sed ornare libero urna ac leo sit amet, consectetur adipiscing elit. Curabitur congue, sapien non efficitur sollicitudin, ex risus semper diam, se",
      img_url: "/images/profile4.png",
    },
    {
      id: 5,
      name: "Dr. Dylan Taylor",
      country: "Manchester",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue, sapien non efficitur sollicitudin, ex risus semper diam, sed ornare libero urna ac leo sit amet, consectetur adipiscing elit. Curabitur congue, sapien non efficitur sollicitudin, ex risus semper diam, se",
      img_url: "/images/profile6.png",
    },
  ];
  return (
    // <div>
    //   {doctorArray.map((item, index) => {
    //     return (
    //       <div
    //         className="flex flex-row py-8 border-b border-[#70707030] "
    //         key={doctorArray.id}
    //       >
    //         <div>
    //           <Image
    //             src={item.img_url}
    //             width={173}
    //             height={173}
    //             className="rounded-[86.5px]"
    //           />
    //         </div>

    //         <div className="mx-7">
    //           <h2 className="text-custom-blue font-bold">{item.name}</h2>
    //           <div className="flex flex-row py-2">
    //             <Image src={location} alt="logo" />
    //             <h2 className="px-1 text-[14px] font-extralight">
    //               {item.country}
    //             </h2>
    //           </div>

    //           <p className="px-1 text-[18px] font-normal w-[90%] ">
    //             {item.description}
    //           </p>

    //           <button className="bg-custom-blue font-semibold  text-[16px] py-3 px-[60px] mt-10  w-139 text-sm text-white rounded-[7px]">
    //             Contact Me
    //           </button>

    //           <button className="bg-transparent border border-[#252525] font-semibold  text-[16px] py-3 px-[60px] mt-10  w-139 text-sm text-[#252525] rounded-[7px] ml-8">
    //             View Profile
    //           </button>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>

    // <div>
    //   {doctorArray.map((item, index) => {
    //     return (
    //       <div
    //         className="flex flex-col sm:flex-row py-8 border-b border-[#70707030] "
    //         key={item.id}
    //       >
    //         <div className="mb-4 sm:mb-0 sm:mr-7 flex-shrink-0 flex flex-row items-center ">
    //           <Image
    //             src={item.img_url}
    //             width={173}
    //             height={173}
    //             className="rounded-[86.5px]"
    //           />
    //           <div className="sm:ml-7">
    //             <div className="flex flex-col sm:flex-row items-center">
    //               <div className="flex items-center">
    //                 <h2 className="text-custom-blue font-bold text-xl sm:text-2xl">
    //                   {item.name}
    //                 </h2>
    //                 <div className="pl-2">
    //                   <Image src={location} alt="logo" />
    //                   <h2 className="px-1 text-xs sm:text-sm font-extralight">
    //                     {item.country}
    //                   </h2>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex flex-col sm:flex-row sm:items-center flex-grow">
    //           <div className="mt-4 sm:mt-0">
    //             <p className="px-1 text-base sm:text-lg font-normal">
    //               {item.description}
    //             </p>

    //             <div className="flex flex-wrap mt-4">
    //               <button className="bg-custom-blue font-semibold text-base sm:text-lg py-3 px-4 sm:px-[60px] mt-2 sm:mt-0 mr-2 sm:mr-4 text-white rounded-[7px]">
    //                 Contact Me
    //               </button>

    //               <button className="bg-transparent border border-[#252525] font-semibold text-base sm:text-lg py-3 px-4 sm:px-[60px] mt-2 sm:mt-0 text-[#252525] rounded-[7px]">
    //                 View Profile
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>

    <div>
      {doctorArray.map((item, index) => {
        return (
          <div
            className="flex flex-col py-8 border-b border-[#70707030] "
            key={item.id}
          >
            <div className="mb-4 sm:mb-0 sm:mr-7 flex-shrink-0 flex flex-row items-center">
              <Image
                src={item.img_url}
                // width={163}
                // height={163}
                width="0"
                height="0"
                sizes="100vw"
                className=" w-[115px] h-[115px] lg:w-[173px] lg:h-[173px] lg:rounded-[86.5px] rounded-[57.5px] "
                // className="rounded-[86.5px] sm:w-[115px] sm:h-[115px]"
              />

              <div className="sm:ml-7">
                <div className="flex flex-col  items-start p-[20px]">
                  <h2 className="text-custom-blue font-semibold text-[18px] lg:text-[21px]">
                    {item.name}
                  </h2>
                  <div className="flex mt-3">
                    <Image src={location} alt="logo" />
                    <h2 className="px-1 text-xs sm:text-sm font-extralight">
                      {item.country}
                    </h2>
                  </div>
                  <p className="px-1 text-base sm:text-lg font-normal hidden lg:block lg:my-5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
            <p className="px-1 text-base sm:text-lg font-normal lg:hidden">
              {item.description}
            </p>

            {/* <div className="flex flex-col sm:flex-row sm:items-center flex-grow">
              <div className="mt-4 sm:mt-0"> */}

            <div className="flex  mt-4 lg:w-[85%] w-[100%] justify-between lg:justify-center">
              <button className="bg-custom-blue lg:font-semibold font-medium text-base sm:text-lg w-[50%] lg:w-auto  text-[14px] py-3 px-[30px] sm:px-[60px] mt-2 sm:mt-0 mr-2 sm:mr-4 text-white rounded-[7px]">
                Contact Me
              </button>

              <button className="bg-transparent border border-[#252525] lg:font-semibold font-medium text-base w-[50%] lg:w-auto sm:text-lg py-3 px-[30px] sm:px-[60px] mt-2 sm:mt-0 text-[#252525] rounded-[7px]">
                View Profile
              </button>
            </div>
            {/* </div>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default DoctorProfileCard;
