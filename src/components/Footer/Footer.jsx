import Image from "next/image";
import React from "react";
import footer from "../../../public/images/footerLogo.png";
import facebook from "../../../public/images/facebook.png";
import instagram from "../../../public/images/instagram.png";
import linkedin from "../../../public/images/linkedin.png";
import twitter from "../../../public/images/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-footer-blue">
      <div className="max-w-[1800px] px-[100px] mx-auto pb-[70px]">
        <div className="flex flex-col items-center justify-center pt-[70px]  ">
          <Image src={footer} />

          <hr className="justify-center items-center w-full border-[#70707030] my-10"></hr>
        </div>
        <div className="justify-between	flex flex-row">
          <p className="text-white font-normal">
            © Copyright 2023 Dentfolio. All Rights Reserved.
          </p>
          <div className="flex gap-2 pr-2">
            <p className="text-white">Follow us on:</p>
            <Image src={facebook} />
            <Image src={twitter} />

            <Image src={instagram} />

            <Image src={linkedin} />
          </div>
        </div>
      </div>
      {/* < */}
      {/* <div className='order bw-[200px] justify-center'></div> */}
    </footer>
  );
};

export default Footer;
