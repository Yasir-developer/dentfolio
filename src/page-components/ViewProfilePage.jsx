import DashboardTreatment from "@/components/DashboardTreatment/DashboardTreatment";
import DentistTabs from "@/components/DentistTabs/DentistTabs";
import DoctorBasicDetail from "@/components/DoctorBasicDetail/DoctorBasicDetail";
import PreviousCases from "@/components/PreviousCases/PreviousCases";
import TreatmentProvide from "@/components/TreatmentProvide/TreatmentProvide";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../config";
import { useSelector } from "react-redux";

const ViewProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [treatment, setTreatment] = useState([]);
  const { user } = useSelector((state) => state.auth);
  console.log(user, "user");
  useEffect(() => {
    handleProfile();
  }, []);

  const handleProfile = () => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .get(`${server}/api/dentists/64ad86ecde62ef492e166fec`, {
        options,
      })
      .then((res) => {
        console.log(res?.data?.user?.treatment_type, "res");
        // setLoader(false);
        if (res.status == 200) {
          setProfile(res?.data?.user);
          setTreatment(res?.data?.user?.treatment_type);
        }
      })
      .catch((error) => {});
  };
  return (
    <div className="w-[80%] mx-auto">
      {/* <DentistTabs> */}
      {/* <EditCasePage /> */}
      {/* <h1>Edit case</h1> */}

      <DoctorBasicDetail data={profile} />
      <DashboardTreatment treatmentData={treatment} />
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
