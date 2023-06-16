import Image from "next/image";
import React from "react";
import footer from "../../../public/images/footerLogo.png";
import facebook from "../../../public/images/facebook.svg";
import instagram from "../../../public/images/instagram.svg";
import linkedin from "../../../public/images/linkedin.svg";
import twitter from "../../../public/images/twitter.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { SiFacebook, SiTwitter, SiInstagram, SiLinkedin } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";

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
                  // borderRadius: "15px",
                }}
              />{" "}
            </div>
            {/* FontAwesome */}
            <div className="border border-white rounded-[20px] p-[5px]">
              <SiTwitter
                style={{
                  color: "#fff",
                  width: "12px",
                  height: "12px",
                  // borderRadius: "15px",
                }}
              />{" "}
            </div>
            {/* Simple Icons */}
            <div className="border border-white rounded-[20px] p-[5px]">
              <SiInstagram
                style={{
                  color: "#fff",
                  width: "12px",
                  height: "12px",
                  // borderRadius: "15px",
                }}
              />{" "}
            </div>
            {/* FontAwesome */}
            {/* <SiLinkedin
              style={{
                color: "#fff",
              }}
              
            />{" "} */}
            <div className="border border-white rounded-[20px] p-[5px]">
              <RiLinkedinFill
                style={{
                  color: "#fff",
                  width: "12px",
                  height: "12px",
                  // borderRadius: "15px",
                }}
              />
            </div>
            {/* Simple Icons */}
            {/* <FaFacebook className="border border-white rounded bg-transparent" />
            <FaTwitter />
            <FaInstagram />
            
            {/* <Image src={facebook} />
            <Image src={twitter} />

            <Image src={instagram} />

            <Image src={linkedin} /> */}
          </div>
        </div>
      </div>
      {/* < */}
      {/* <div className='order bw-[200px] justify-center'></div> */}
    </footer>
  );
};

export default Footer;
