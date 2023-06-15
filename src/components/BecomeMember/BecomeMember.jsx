import Image from "next/image";
import React from "react";
import doctor from "../../../public/images/doctor.png";

// import Become from "../../../public/images/member.png";

const BecomeMember = () => {
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: `url(/images/member.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="sizingStyles pt-[30px] pr-[100px] pb-[0px] pl-[100px] flex justify-between items-center">
          <div className="w-[50%]">
            <h3 className="text-[18px] font-medium text-white">
              ARE YOU A DENTIST?
            </h3>
            <h1 className="flex items-center text-white font-poppins font-bold text-[41px]">
              BECOME A MEMBER NOW
            </h1>
            <h3 className="text-[18px] font-medium text-white mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              congue, sapien non efficitur sollicitudin, ex risus semper diam,
              sed ornare.
            </h3>

            <button className="bg-transparent border font-semibold border-white text-white py-2 px-[60px] mt-10 rounded w-139 text-sm">
              Find Out More{" "}
            </button>
          </div>
          <div className="w-[50%]">
            <Image src={doctor} />
          </div>
        </div>

        {/* <Image src={Become} className='w-full'/> */}
        {/* <div style={{ position: 'absolute', top: '30%', left: '10%',  }}>
        <h3 className='text-[18px] font-medium'>ARE YOU A DENTIST?</h3>
        <h1>BECOME A MEMBER NOW</h1>
      </div> */}

        {/* <h1>jxjkasxajx</h1> */}
      </div>
    </div>
  );
};

export default BecomeMember;
