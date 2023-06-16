import Image from "next/image";
import React from "react";
import footer from "../../../public/images/footerLogo.png";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

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
            <div className="border border-white rounded-[20px] p-[5px]">
              <FaFacebookF
                style={{
                  color: "#fff",
                  width: "12px",
                  height: "12px",
                }}
              />{" "}
            </div>
            <div className="border border-white rounded-[20px] p-[5px]">
              <FaTwitter
                style={{
                  color: "#fff",
                  width: "12px",
                  height: "12px",
                }}
              />{" "}
            </div>
            <div className="border border-white rounded-[20px] p-[5px]">
              <FaInstagram
                style={{
                  color: "#fff",
                  width: "12px",
                  height: "12px",
                }}
              />{" "}
            </div>

            <div className="border border-white rounded-[20px] p-[5px]">
              <FaLinkedin
                style={{
                  color: "#fff",
                  width: "12px",
                  height: "12px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* < */}
      {/* <div className='order bw-[200px] justify-center'></div> */}
    </footer>
  );
};

export default Footer;
