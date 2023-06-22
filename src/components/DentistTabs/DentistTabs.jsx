"use client";
import Image from "next/image";
import { useState } from "react";
import logoWhite from "../../../public/images/logoWhite.png";
import { FaIdCard, FaUser, FaFileAlt, FaEdit, FaCog } from "react-icons/fa";
// import Router, { useRouter } from "next/router";
import { useRouter } from "next/navigation";

import Link from "next/link";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import EditCasePage from "@/page-components/EditCasePage";
import DashboardFooter from "../DashboardFooter/DashboardFooter";
import ViewProfilePage from "@/page-components/ViewProfilePage";
import CreateCasePage from "@/page-components/CreateCasePage";
import BlueButtons from "../Buttons/BlueButtons";
import SettingsPage from "@/page-components/SettingsPage";
const DentistTabs = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("editCase");
  const [toggleMenu, setToggleMenu] = useState(false);
  let menuClasses = 'bg-gradient-radial from-[#0372E2] to-[#0B5FB4] hidden w-0 lg:block lg:w-[18%] relative'
  const menuHandler = () => {
    setToggleMenu(!toggleMenu)
  }
  // const handleTabClick = (event, path) => {
  //   console.log(path, "path >>>>>>>>>>>>>>");
  //   event.preventDefault();

  //   router.push(path);
  // };

  return (
    <div className="flex flex-wrap h-full">
      {/* Menu Panel */}
      <DashboardHeader menuToggler={menuHandler}/>
      <div
        className="bodyContainer flex w-full"
        style={{
          height: "calc(100% - 100px)",
        }}
      >
        <div className={`${toggleMenu ? 'bg-gradient-radial from-[#0372E2] to-[#0B5FB4]  h-full w-[60%] lg:block lg:w-[18%] absolute' : 'bg-gradient-radial from-[#0372E2] to-[#0B5FB4] hidden w-0 lg:block lg:w-[18%] relative'}`}>
          <nav className="p-2 ">
            <ul>
              <li
                className={`py-2 cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold my-3 w-[70%] ${
                  activeTab !== "editProfile" && "text-white"
                } ${
                  activeTab === "editProfile" &&
                  "bg-white text-custom-blue rounded-[5px] w-[150px]"
                }`}
                onClick={(e) => {
                  setActiveTab("editProfile");

                  // handleTabClick(e, "/dentist/view-profile");
                }}
              >
                <FaIdCard className="w-4 h-4 mx-2" />
                Edit My Profile
              </li>
              <li
                className={`py-3 cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold my-3 w-[70%] ${
                  activeTab !== "viewProfile" && "text-white"
                } ${
                  activeTab === "viewProfile" &&
                  "bg-white text-custom-blue rounded-[5px] w-[150px]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("viewProfile");

                  // handleTabClick(e, "/dentist/view-profile");
                }}
              >
                <FaUser className="w-4 h-4 mx-2" />
                View My Profile
              </li>
              <li
                className={` cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold my-3 w-[70%]  ${
                  activeTab !== "createCase" &&
                  "text-white text-[16px] font-semibold py-3"
                } ${
                  activeTab === "createCase" &&
                  "bg-white text-custom-blue rounded-[5px]  py-3"
                }`}
                onClick={(e) => {
                  // handleTabClick(e, "/dentist/create-case");
                  setActiveTab("createCase");
                }}
              >
                <FaFileAlt className="w-4 h-4 mx-2" />
                {/* <FaUser className="w-4 h-4 mx-2" /> */}
                Create Case
              </li>
              <li
                className={`cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold my-3 w-[70%] ${
                  activeTab !== "editCase" &&
                  "text-white text-[16px] font-semibold w-[60%] py-3"
                } ${
                  activeTab === "editCase" &&
                  "bg-white text-custom-blue rounded-[5px] py-3"
                }`}
                onClick={(e) => {
                  // handleTabClick(e, "/dentist/edit-case");
                  setActiveTab("editCase");
                }}
              >
                <FaEdit className="w-4 h-4 mx-2" />
                Edit Case
              </li>
              <li
                className={`py-3 cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold w-[70%] ${
                  activeTab !== "settings" && "text-white"
                } ${
                  activeTab === "settings" &&
                  "bg-white text-custom-blue rounded-[5px] w-[150px] py-3"
                }`}
                onClick={(e) => setActiveTab("settings")}
              >
                <FaCog className="w-4 h-4 mx-2" />
                Settings
              </li>
            </ul>
          </nav>
          <BlueButtons
            className={
              "bg-white absolute bottom-[100px] left-[40px] !text-custom-blue px-[50px] text-[16px] font-medium"
            }
            buttonText={"Sign Out"}
          />
        </div>
        <div className="bg-gray-100 lg:w-[85%] w-full flex flex-col justify-between">
          <div className="contentContainer overflow-y-scroll h-full">
            {activeTab === "editCase" && (
              <EditCasePage />
              // <Link href="/dentist/edit-case" passHref />
            )}
            {activeTab === "createCase" && <CreateCasePage />}
            {activeTab === "editProfile" && <ViewProfilePage />}
            {
              activeTab === "viewProfile" &&
                router.push("/patient/profile-page")
              // <ViewProfilePage />
              // <Link href="/dentist/view-profile" passHref />
            }
            {activeTab === "settings" && <SettingsPage />}
          </div>
          <div className="footerContainer">
            <DashboardFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

// export async function getStaticProps({ params }) {
//   const props = await getData(params);

//   // key is needed here
//   props.key = data.id;

//   return {
//     props: props,
//   };
// }

export default DentistTabs;
