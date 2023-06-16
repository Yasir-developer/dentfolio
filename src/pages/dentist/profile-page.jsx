import DoctorBasicDetail from "@/components/DoctorBasicDetail/DoctorBasicDetail";
import PreviousCases from "@/components/PreviousCases/PreviousCases";
import TreatmentProvide from "@/components/TreatmentProvide/TreatmentProvide";
import React from "react";

const profilepage = () => {
  return (
    <div>
      <DoctorBasicDetail to />
      <TreatmentProvide />
      <PreviousCases />
    </div>
  );
};

export default profilepage;
