import DashboardFooter from "@/components/DashboardFooter/DashboardFooter";
import EditCaseCard from "@/components/EditCaseCard/EditCaseCard";
import React from "react";

const EditCasePage = () => {
  const caseTypes = [
    {
      img_url: "/images/case2.png",
      name: "Composite Bonding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue, sapien non efficitur sollicitudin, ex risus semper diam, sed ornare libero urna ac leo sit amet consectetur adipiscing elit Curabitur congue sapien non efficitur sollicitudin.",
      type: ["Aligners", "Bridges", "Implants", "Root Canal Treatment"],
    },
    {
      img_url: "/images/case1.png",
      name: " Bonding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue, sapien non efficitur sollicitudin, ex risus semper diam, sed ornare libero urna ac leo sit amet consectetur adipiscing elit Curabitur congue sapien non efficitur sollicitudin.",
      type: ["Aligners", "Root Canal Treatment", "Bridges", "Implants"],
    },
  ];

  return (
    <div className="bg-custom-dashboard-bg items-center justify-center ">
      <div className=" my-8 mx-auto w-[90%]">
        <h1 className="text-[32px] font-semibold">Edit Case</h1>

        <p className="mt-2 text-[16px] font-light mb-5">Update Information</p>
      </div>
      <div className="py-5 px-5 flex w-[90%] bg-white rounded-[7px] flex-col items-center justify-center mx-auto">
        {caseTypes.map((item, index) => (
          <EditCaseCard
            id={index}
            name={item.name}
            description={item.description}
            img_url={item.img_url}
          />
        ))}
      </div>
      {/* <DashboardFooter /> */}
    </div>
  );
};

export default EditCasePage;
