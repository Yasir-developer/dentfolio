import BecomeMember from "@/components/BecomeMember/BecomeMember";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import SearchBanner from "@/components/SearchBanner/SearchBanner";
import React from "react";

const DentistSearch = () => {
  return (
    <div>
      <SearchBanner />
      <HowItWorks />
      <BecomeMember />
    </div>
  );
};

export default DentistSearch;
