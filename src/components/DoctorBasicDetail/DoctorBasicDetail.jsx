import React, { useState } from "react";
import profile from "../../../public/images/profile1.png";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import checkCircle from "../../../public/images/check-circle2.svg";

import map from "../../../public/images/map.png";
const DoctorBasicDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const thankYouModal = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900 ">
        <div className="bg-white p-6 rounded-[7px] shadow-lg w-[60%] relative max-w-[900px]">
          <button
            className="absolute right-[20px] top-[20px]  "
            onClick={() => setShowThankYouModal(false)}
          >
            <FaTimes className="text-[#616161] w-[18px] h-[18px]" />
          </button>
          <div className="flex items-center justify-center mt-[50px] ">
            <Image src={checkCircle} alt="logo" />
          </div>
          <h1 className="text-custom-black text-center text-[34px] font-semibold mt-2">
            THANK YOU
          </h1>

          <p className="text-custom-black text-center text-[16px] font-semibold mt-2 mb-[50px]">
            Your message has been successfully sent to the dentist. They will
            contact you shortly via email or phone.
          </p>

          {/* Form fields and buttons */}
        </div>
      </div>
    );
  };

  const conversationModal = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900 ">
        <div className="bg-white p-6 rounded-[7px] shadow-lg w-[60%] relative">
          <div className="mx-5">
            <button
              className="absolute right-[20px] top-[20px]  "
              onClick={() => setShowModal(false)}
            >
              <FaTimes className="text-[#616161] w-[18px] h-[18px]" />
            </button>
            <div className="py-5 flex flex-row items-center ">
              <div className="items-center pb-2">
                <Image src={profile} width={67} height={66} />
              </div>
              <div className="mx-5">
                <h2 className="text-custom-blue font-semibold text-[21px]">
                  Dylan Taylor
                </h2>
                <div className="flex flex-col">
                  <h3 className="text-custom-black text-[15px]">
                    Orthodontist
                  </h3>
                </div>
              </div>
            </div>
            <form>
              <div className="mb-4 gap-x-2 flex ">
                <input
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  className="inputStyles"
                />
                <input
                  type="tel"
                  id="phone"
                  className="inputStyles"
                  placeholder="Phone Number"
                />
                <input
                  type="email"
                  id="email"
                  className="inputStyles"
                  placeholder="Email Address"
                />
              </div>

              <textarea
                id="conversation"
                placeholder="Start a conversation"
                className="inputStyles w-full"
                rows="5"
              ></textarea>

              <button
                type="submit"
                className="bg-custom-blue hover:bg-blue-600 text-white font-poppins font-medium py-2 mt-5 mb-7 px-[45px] rounded lg:justify-end text-sm"
                onClick={() => {
                  setShowModal(false);
                  setShowThankYouModal(true);
                }}
              >
                Send
              </button>
            </form>
          </div>
          {/* Form fields and buttons */}
        </div>
      </div>
    );
  };
  return (
    <div className="sizingStyles flex flex-row justify-between">
      {showModal && conversationModal()}
      {showThankYouModal && thankYouModal()}
      <div className="w-[60%]">
        <div className=" px-8 py-10 flex flex-row items-center ">
          <div className="w-[205px] h-[205px] rounded-[102.5px]">
            <Image
              src={profile}
              width={205}
              height={205}
              className="rounded-[102.5px]"
            />
          </div>
          <div className="mx-8">
            <h2 className="text-custom-blue font-semibold text-[33px]">
              Dr. Dylan Taylor
            </h2>
            <div className="flex flex-col">
              <h3 className="text-custom-black text-[22px]">Orthodontist</h3>

              <h2 className="text-[#5D5D5D] text-[16px] font-normal">
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

          <button
            className="bg-custom-blue font-semibold text-[16px] py-3 px-[60px] mt-[35px] w-139 text-sm text-white rounded-[7px]"
            onClick={() => setShowModal(true)}
          >
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
