import Image from "next/image";
import { useState } from "react";
import logoWhite from "../../../public/images/logoWhite.png";
import { FaIdCard, FaUser, FaFileAlt, FaEdit, FaCog } from "react-icons/fa";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import EditCasePage from "@/page-components/EditCasePage";
import DashboardFooter from "../DashboardFooter/DashboardFooter";
import ViewProfilePage from "@/page-components/ViewProfilePage";
import CreateCasePage from "@/page-components/CreateCasePage";
import BlueButtons from "../Buttons/BlueButtons";
const DentistTabs = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (event, path) => {
    console.log(path, "path >>>>>>>>>>>>>>");
    event.preventDefault();

    router.push(path);
  };

  return (
    <div className="flex flex-wrap h-full">
      {/* Menu Panel */}
      <DashboardHeader />
      <div
        className="bodyContainer flex w-full"
        style={{
          height: "calc(100% - 100px)",
        }}
      >
        <div className=" bg-gradient-radial from-[#0372E2] to-[#0B5FB4] w-[18%] relative">
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

                  handleTabClick(e, "/dentist/view-profile");
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
                  setActiveTab("viewProfile");

                  handleTabClick(e, "/dentist/view-profile");
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
                  handleTabClick(e, "/dentist/create-case");
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
                  handleTabClick(e, "/dentist/edit-case");
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
                onClick={(e) => handleTabClick(e, "settings")}
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
        <div className="bg-gray-100 w-[85%] flex flex-col justify-between">
          <div className="contentContainer overflow-y-scroll h-full">
            {activeTab === "editCase" && <EditCasePage />}
            {activeTab === "createCase" && <CreateCasePage />}
            {activeTab === "editProfile" && <ViewProfilePage />}
            {activeTab === "viewProfile" && <ViewProfilePage />}
            {activeTab === "settings" && <h2>Settings Content</h2>}
          </div>
          <div className="footerContainer">
            <DashboardFooter />
          </div>
        </div>
      </div>

      {/* Main Content */}

      {/* <div className="w-64 bg-gradient-radial from-[#0372E2] to-[#0B5FB4]">
        <div className="p-4">
          <Image src={logoWhite} className="mx-auto" />

        </div>
        <nav className="p-2">
          <ul>
            <li
              className={`py-2 px-4 cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold ${
                activeTab !== "editCase" && "text-white"
              } ${
                activeTab === "editCase" &&
                "bg-white text-custom-blue rounded-[5px] w-[150px]"
              }`}
              onClick={() => handleTabClick("editCase")}
            >
              <FaIdCard className="w-4 h-4 mx-2" />
              Edit Case
            </li>
            <li
              className={`py-2 px-4 cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold ${
                activeTab !== "createCase" && "text-white"
              } ${
                activeTab === "createCase" &&
                "bg-white text-custom-blue rounded-[5px] w-[150px]"
              }`}
              onClick={() => handleTabClick("createCase")}
            >
              <FaUser className="w-4 h-4 mx-2" />
              Create Case
            </li>
            <li
              className={`py-2 px-4 cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold ${
                activeTab !== "editProfile" && "text-white"
              } ${
                activeTab === "editProfile" &&
                "bg-white text-custom-blue rounded-[5px] w-[150px]"
              }`}
              onClick={() => handleTabClick("editProfile")}
            >
              <FaFileAlt className="w-4 h-4 mx-2" />
              Edit My Profile
            </li>
            <li
              className={`py-2 px-4 cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold ${
                activeTab !== "viewProfile" && "text-white"
              } ${
                activeTab === "viewProfile" &&
                "bg-white text-custom-blue rounded-[5px] w-[150px]"
              }`}
              onClick={() => handleTabClick("viewProfile")}
            >
              <FaEdit className="w-4 h-4 mx-2" />
              View My Profile
            </li>
            <li
              className={`py-2 px-4 cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold ${
                activeTab !== "settings" && "text-white"
              } ${
                activeTab === "settings" &&
                "bg-white text-custom-blue rounded-[5px] w-[150px]"
              }`}
              onClick={() => handleTabClick("settings")}
            >
              <FaCog className="w-4 h-4 mx-2" />
              Settings
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-grow bg-gray-100">
        {activeTab === "editCase" && <h2>Edit Case Content</h2>}
        {activeTab === "createCase" && <h2>Create Case Content</h2>}
        {activeTab === "editProfile" && <h2>Edit My Profile Content</h2>}
        {activeTab === "viewProfile" && <h2>View My Profile Content</h2>}
        {activeTab === "settings" && <h2>Settings Content</h2>}
      </div> */}
    </div>
  );
};

export default DentistTabs;
