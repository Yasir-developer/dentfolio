import React from "react";
import DentistMemberBanner from "@/components/DentistMemberBanner/DentistMemberBanner";
import PatientMonthlyPlan from "@/page-components/PatientMonthlyPlan";

const dentistplan = () => {
  return (
    <div>
      <DentistMemberBanner />
      <PatientMonthlyPlan />
    </div>
  );
};

export default dentistplan;
