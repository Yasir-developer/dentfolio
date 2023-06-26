import DentistTabs from "@/components/DentistTabs/DentistTabs";
import DoctorBasicDetail from "@/components/DoctorBasicDetail/DoctorBasicDetail";
import PreviousCases from "@/components/PreviousCases/PreviousCases";
import TreatmentProvide from "@/components/TreatmentProvide/TreatmentProvide";
import React from "react";

const ViewProfilePage = () => {
  return (
    <div>
      {/* <DentistTabs> */}
      {/* <EditCasePage /> */}
      {/* <h1>Edit case</h1> */}

      <DoctorBasicDetail />
      <TreatmentProvide />
      <PreviousCases />
      {/* </DentistTabs> */}
    </div>
  );
};

export default ViewProfilePage;
