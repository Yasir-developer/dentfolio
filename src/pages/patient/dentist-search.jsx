import BecomeMember from "@/components/BecomeMember/BecomeMember";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import SearchBanner from "@/components/SearchBanner/SearchBanner";
import React from "react";

const DentistSearch = () => {
  return (
    <div className="h-[100vh]">
      <SearchBanner />
      <HowItWorks />
      <BecomeMember />
    </div>
  );
};

export default DentistSearch;
