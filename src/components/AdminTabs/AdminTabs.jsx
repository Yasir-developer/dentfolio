// "use client";
import { useEffect, useState } from "react";
import {
  FaIdCard,
  FaUser,
  FaFileAlt,
  FaEdit,
  FaCog,
  FaFileInvoiceDollar,
  FaUserMd,
  FaMoneyBillWaveAlt,
} from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";

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
import Billing from "@/page-components/BillingPage";
import BillingHistory from "@/page-components/BillingHistory";
import OverviewPage from "@/page-components/OverviewPage";
import AdminDentistPage from "@/page-components/AdminDentistPage";
import RevenuePage from "@/page-components/RevenuePage";

const AdminTabs = (props) => {
  console.log(props, "props");
  const router = useRouter();
  console.log(router, "routrer.quey");
  const [activeTab, setActiveTab] = useState("editProfile");
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

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
                  pathname: "/admin/overview",
                  query: { tab: "overview" },
                }}
                passHref
              >
                <li
                  className={`py-3 cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold my-3 w-[80%] ${
                    router?.query?.tab !== "overview" && "text-white"
                  } ${
                    router?.query?.tab === "overview" &&
                    "bg-white text-custom-blue rounded-[5px] w-[150px]"
                  }`}
                  onClick={(e) => {
                    setActiveTab("viewProfile");
                  }}
                >
                  <BsGridFill
                    className={`w-4 h-4 mx-2 ${
                      router?.query?.tab === "overview" && "text-custom-blue "
                    }`}
                  />
                  Overview
                </li>
              </Link>

              <Link
                href={{
                  pathname: "/admin/dentist",
                  query: { tab: "dentist" },
                }}
                passHref
              >
                <li
                  className={`py-2 cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold my-3 w-[70%] ${
                    router?.query?.tab !== "dentist" && "text-white"
                  } ${
                    router?.query?.tab === "dentist" &&
                    "bg-white text-custom-blue rounded-[5px] w-[150px]"
                  }`}
                  onClick={(e) => {
                    setActiveTab("editProfile");
                  }}
                >
                  <FaUserMd className="w-4 h-4 mx-2" />
                  Dentist
                </li>
              </Link>

              <Link
                href={{
                  pathname: "/admin/revenue",
                  query: { tab: "revenue" },
                }}
                passHref
              >
                <li
                  className={` cursor-pointer flex flex-row items-center ml-2 text-[16px] font-semibold my-3 w-[70%]  ${
                    router?.query?.tab !== "revenue" &&
                    "text-white text-[16px] font-semibold py-3"
                  } ${
                    router?.query?.tab === "revenue" &&
                    "bg-white text-custom-blue rounded-[5px]  py-3"
                  }`}
                  onClick={(e) => {
                    setActiveTab("createCase");
                  }}
                >
                  <FaMoneyBillWaveAlt className="w-4 h-4 mx-2" />
                  Revenue
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
            {router?.query?.tab === "overview" && <OverviewPage />}

            {router?.query?.tab === "dentist" && <AdminDentistPage />}
            {router?.query?.tab === "revenue" && <RevenuePage />}
            {router?.query?.tab === "edit" && <EditCasePage />}

            {router?.query?.tab === "billing" && <Billing />}
            {router?.query?.tab === "bill" && <BillingHistory />}

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

export default AdminTabs;
