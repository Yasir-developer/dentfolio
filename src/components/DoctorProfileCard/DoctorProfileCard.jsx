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
    <div>
      {doctorArray.map((item, index) => {
        return (
          <div
            className="flex flex-row py-8 border-b border-[#70707030] "
            key={doctorArray.id}
          >
            <div>
              <Image
                src={item.img_url}
                width={173}
                height={173}
                className="rounded-[86.5px]"
              />
            </div>

            <div className="mx-7">
              <h2 className="text-custom-blue font-bold">{item.name}</h2>
              <div className="flex flex-row py-2">
                <Image src={location} alt="logo" />
                <h2 className="px-1 text-[14px] font-extralight">
                  {item.country}
                </h2>
              </div>

              <p className="px-1 text-[18px] font-normal w-[90%] ">
                {item.description}
              </p>

              <button className="bg-custom-blue font-semibold  text-[16px] py-3 px-[60px] mt-10  w-139 text-sm text-white rounded-[7px]">
                Contact Me
              </button>

              <button className="bg-transparent border border-[#252525] font-semibold  text-[16px] py-3 px-[60px] mt-10  w-139 text-sm text-[#252525] rounded-[7px] ml-8">
                View Profile
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorProfileCard;
