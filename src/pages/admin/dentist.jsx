import AdminTabs from "@/components/AdminTabs/AdminTabs";
import OverviewPage from "@/page-components/OverviewPage";
import React from "react";

const dentist = () => {
  return (
    <div>
      <div className="dentistBodyStyles">
        <AdminTabs>
          <OverviewPage />
        </AdminTabs>
      </div>
    </div>
  );
};

export default dentist;
