import Image from "next/image";
import { useState } from "react";
import logoWhite from "../../../public/images/logoWhite.png";
import { FaIdCard, FaUser, FaFileAlt, FaEdit, FaCog } from "react-icons/fa";
import Router from "next/router";
import Link from "next/link";
import DentistTabs from "@/components/DentistTabs/DentistTabs";
import EditCasePage from "@/page-components/EditCasePage";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("editCase");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="h-full">
      {/* Menu Panel */}

      <DentistTabs>
        <EditCasePage />
        {/* <h1>Edit case</h1> */}
      </DentistTabs>

      {/* <hr className="w-full border-[#70707030] my-20" /> */}
    </div>
  );
};

export default Dashboard;
