import DashboardTreatment from "@/components/DashboardTreatment/DashboardTreatment";
import DentistTabs from "@/components/DentistTabs/DentistTabs";
import DoctorBasicDetail from "@/components/DoctorBasicDetail/DoctorBasicDetail";
import PreviousCases from "@/components/PreviousCases/PreviousCases";
import TreatmentProvide from "@/components/TreatmentProvide/TreatmentProvide";
import React from "react";

const ViewProfilePage = () => {
  return (
    <div className="w-[80%] mx-auto">
      {/* <DentistTabs> */}
      {/* <EditCasePage /> */}
      {/* <h1>Edit case</h1> */}

      <DoctorBasicDetail />
      <DashboardTreatment />
      {/* <TreatmentProvide /> */}
      <PreviousCases />
      {/* <TreatmentProvide /> */}
      {/* <TreatmentProvide />
      <PreviousCases /> */}
      {/* </DentistTabs> */}
    </div>
  );
};

export default ViewProfilePage;
