import React, { useState } from "react";
import logoWhite from "../../../public/images/logoWhite.png";
import Image from "next/image";
import { FaAngleDown, FaRegBell, FaBars } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import Router from "next/router";
// import Dropdown from "react-bootstrap/Dropdown";

const DashboardHeader = ({ menuToggler }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="h-[80px] border-b border-[#c8bfc3] w-full flex ">
      <div className="hidden bg-gradient-radial from-[#0372E2] to-[#0B5FB4] w-[18%] lg:flex items-center justify-center">
        <Image src={logoWhite} className="mx-auto max-w-[173px]" />

        {/* <h1 className="text-lg font-bold">Dashboard</h1> */}
      </div>

      <div className="w-full lg:w-[85%] flex px-5 lg:px-0 justify-between lg:justify-end blueGradient lg:bg-none">
        <div className="lg:hidden barsIcon flex items-center justify-center mr-3">
          <FaBars onClick={menuToggler} className="text-white" />
        </div>
        <div className="lg:hidden mobileLogo flex items-center">
          <Image src={logoWhite} className="mx-auto max-w-[173px]" />
        </div>
        <div className="flex">
          {/* <div className="flex items-center justify-center mr-3">
            <FaRegBell className="lg:w-[36px] lg:h-[36px]" />
          </div> */}
          <div className="lg:border-l border-l-[#c8bfc3] flex">
            <div className="flex flex-row items-center justify-center lg:pr-[80px] lg:pl-[30px] ">
              <Image
                src={"/images/profileImg.png"}
                alt="logo"
                width={51}
                height={51}
                sizes="100vw"
                className="rounded-[25.5px]"
              />

              <h2 className="hidden lg:block text-custom-blue text-[16px] font-semibold px-2">
                Dylan Taylor
              </h2>
              {/* className="hidden md:block" */}
              <div className="flex hidden md:block" style={{ zIndex: 1 }}>
                <div
                  className="flex items-center justify-center px-2rounded-l-md cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <HiChevronDown
                    className={`transform  h-5 w-5 text-[#919191] ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {isDropdownOpen && (
                  <div className="bg-white border border-gray-300 rounded-r-md shadow-md mt-[80px]">
                    {/* Dropdown items */}
                    <ul className="py-2">
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          Router.push("/dentist/settings?tab=settings")
                        }
                      >
                        Settings
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => Router.push("/dentist/dentist-plan")}
                      >
                        Sign Out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle>
                  <FaAngleDown
                    style={{
                      color: "#919191",
                      width: "20px",
                      height: "20px",
                    }}
                    className="hidden lg:block"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
