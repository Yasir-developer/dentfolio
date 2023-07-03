"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaIdCard, FaUser, FaFileAlt, FaEdit, FaCog } from "react-icons/fa";
// import Router, { useRouter } from "next/router";
// import { useRouter } from "next/";

import DashboardHeader from "../DashboardHeader/DashboardHeader";
import EditCasePage from "@/page-components/EditCasePage";
import DashboardFooter from "../DashboardFooter/DashboardFooter";
import ViewProfilePage from "@/page-components/ViewProfilePage";
import CreateCasePage from "@/page-components/CreateCasePage";
import BlueButtons from "../Buttons/BlueButtons";
import SettingsPage from "@/page-components/SettingsPage";
import Link from "next/link";
import { useRouter } from "next/router";
import EditProfilePage from "@/page-components/EditProfilePage";
// import EditProfilePage from "@/page-components/editProfilePage";
const DentistTabs = (props) => {
  console.log(props, "props");
  const router = useRouter();
  console.log(router, "routrer.quey");
  const [activeTab, setActiveTab] = useState("editProfile");
  const [toggleMenu, setToggleMenu] = useState(false);

  // useEffect(() => {
  //   console.log(activeTab, "activeTab");
  //   // Update the activeTab state based on the current route
  //   const currentPath = router.asPath;
  //   if (currentPath === "/dentist/dashboard/view-profile") {
  //     setActiveTab("editProfile");
  //     // return <EditCasePage />;
  //   } else if (currentPath === "/dentist/dashboard/view-profile") {
  //     setActiveTab("viewProfile");
  //   } else if (currentPath === "/dentist/dashboard/create-case") {
  //     setActiveTab("createCase");
  //   } else if (currentPath === "/dentist/dashboard/edit-case") {
  //     setActiveTab("editCase");
  //   } else if (currentPath === "/dentist/settings") {
  //     setActiveTab("settings");
  //   }
  // }, [router.asPath]);
  let menuClasses =
    "bg-gradient-radial from-[#0372E2] to-[#0B5FB4] hidden w-0 lg:block lg:w-[18%] relative";
  const menuHandler = () => {
    setToggleMenu(!toggleMenu);
  };
  // const handleTabClick = (event, path) => {
  //   console.log(path, "path >>>>>>>>>>>>>>");
  //   event.preventDefault();

  //   router.push(path);
  // };

  return (
    <div className="flex flex-wrap h-full">
      {/* Menu Panel */}
      <DashboardHeader menuToggler={menuHandler} />
      <div
        className="bodyContainer flex w-full"
        style={{
          height: "calc(100% - 80px)",
        }}
      >
        <div
          className={`${
            toggleMenu
              ? "bg-gradient-radial from-[#0372E2] to-[#0B5FB4]  h-full w-[60%] lg:block lg:w-[18%] absolute z-[999]"
              : "bg-gradient-radial from-[#0372E2] to-[#0B5FB4] hidden w-0 lg:block lg:w-[18%] z-[999]"
          }`}
        >
          <nav className="p-2 ">
            <ul>
              <Link
                href={{
                  pathname: "/dentist/view-profile",
                  query: { tab: "view" },
                }}
                passHref
              >
                <li
                  className={`py-3 cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold my-3 w-[80%] ${
                    router?.query?.tab !== "view" && "text-white"
                  } ${
                    router?.query?.tab === "view" &&
                    "bg-white text-custom-blue rounded-[5px] w-[150px]"
                  }`}
                  onClick={(e) => {
                    // e.preventDefault();
                    // router.push("/patient/view-profile");

                    setActiveTab("viewProfile");

                    // handleTabClick(e, "/dentist/view-profile");
                  }}
                >
                  <FaUser className="w-4 h-4 mx-2" />
                  View My Profile
                </li>
              </Link>

              <Link
                href={{
                  pathname: "/dentist/edit-profile",
                  query: { tab: "edit-profile" },
                }}
                passHref
              >
                <li
                  className={`py-2 cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold my-3 w-[70%] ${
                    router?.query?.tab !== "edit-profile" && "text-white"
                  } ${
                    router?.query?.tab === "edit-profile" &&
                    "bg-white text-custom-blue rounded-[5px] w-[150px]"
                  }`}
                  onClick={(e) => {
                    // e.preventDefault();
                    setActiveTab("editProfile");
                    // router.push("/dentist/dashboard/view-profile");
                    // handleTabClick(e, "/dentist/view-profile");
                  }}
                >
                  <FaIdCard className="w-4 h-4 mx-2" />
                  Edit My Profile
                </li>
              </Link>

              <Link
                href={{
                  pathname: "/dentist/create-case",
                  query: { tab: "create" },
                }}
                passHref
              >
                <li
                  className={` cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold my-3 w-[70%]  ${
                    router?.query?.tab !== "create" &&
                    "text-white text-[16px] font-semibold py-3"
                  } ${
                    router?.query?.tab === "create" &&
                    "bg-white text-custom-blue rounded-[5px]  py-3"
                  }`}
                  onClick={(e) => {
                    // handleTabClick(e, "/dentist/create-case");
                    setActiveTab("createCase");
                    // router.push("/dentist/create-case");
                  }}
                >
                  <FaFileAlt className="w-4 h-4 mx-2" />
                  {/* <FaUser className="w-4 h-4 mx-2" /> */}
                  Create Case
                </li>
              </Link>

              <Link
                href={{
                  pathname: "/dentist/edit-case",
                  query: { tab: "edit" },
                }}
              >
                <li
                  className={`cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold my-3 w-[70%] ${
                    router?.query?.tab !== "edit" &&
                    "text-white text-[16px] font-semibold w-[60%] py-3"
                  } ${
                    router?.query?.tab === "edit" &&
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
              </Link>

              <Link
                href={{
                  pathname: "/dentist/settings",
                  query: { tab: "settings" },
                }}
              >
                <li
                  className={`py-3 cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold w-[70%] ${
                    router?.query?.tab !== "settings" && "text-white"
                  } ${
                    router?.query?.tab === "settings" &&
                    "bg-white text-custom-blue rounded-[5px] w-[150px] py-3"
                  }`}
                  onClick={(e) => setActiveTab("settings")}
                >
                  <FaCog className="w-4 h-4 mx-2" />
                  Settings
                </li>
              </Link>
            </ul>
          </nav>
          <BlueButtons
            className={
              "bg-white fixed my-[40px] mx-[20px] !text-custom-blue px-[50px] text-[16px] font-medium"
            }
            buttonText={"Sign Out"}
            onClick={() => router.push("/dentist/dentist-plan")}
          />
        </div>
        <div className="bg-gray-100 lg:w-[85%] w-full flex flex-col justify-between">
          <div className="contentContainer overflow-y-scroll h-full">
            {router?.query?.tab === "edit-profile" && <EditProfilePage />}

            {router?.query?.tab === "view" && <ViewProfilePage />}
            {router?.query?.tab === "create" && <CreateCasePage />}
            {router?.query?.tab === "edit" && <EditCasePage />}
            {/* {router?.query?.tab === "edit-profile" && <EditProfilePage />} */}

            {/* {activeTab === "editProfile" && <ViewProfilePage />} */}
            {/* {router?.query?.tab === "view" && <ViewProfilePage />} */}
            {router?.query?.tab === "settings" && <SettingsPage />}
          </div>
          <div className="footerContainer">
            <DashboardFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  console.log(params, "paramsss");
  const props = await getData(params);
  console.log(props, "props====");
  // key is needed here
  props.key = data.id;
  console.log(props.key, "props.key");
  return {
    props: props,
  };
}

export default DentistTabs;
