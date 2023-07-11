import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/images/loginLogo.svg";
import logoWhite from "../../../public/images/logoWhite.png";
import logotwo from "../../../public/images/logo.png";
import BlueButtons from "@/components/Buttons/BlueButtons";
import AuthInput from "@/components/Inputs/AuthInput";
import Router from "next/router";
import Checkbox from "@/components/Checkbox/Checkbox";
import { server } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  // console.log(server, "server");
  const [loader, setLoader] = useState(false);

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [gdcNo, setGdcNo] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    setLoader(true);
    const finalData = {
      email,
      password,
      firstName,
      lastName,
      displayName,
      gdcNo,
      buildingName,
      streetName,
      city,
      postCode,
    };

    // return;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(finalData, "final data");

    axios
      .post(`${server}/api/signup/`, finalData, options)
      .then((res) => {
        console.log(res, "job post response..");
        // return;
        if (res.status == 201) {
          setLoader(false);
          toast.success("Signup Successfully", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          Router.replace("/dentist/view-profile");
        } else if (res.status == 400) {
          setLoader(false);
          toast.error(res.errors[0], {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        setLoader(false);
        if (error?.response?.data?.errors[0]) {
          toast.error(error?.response?.data?.errors[0], {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          setLoader(false);
          toast.error(error?.response?.data?.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handlePrivacyChange = () => {
    setPrivacyAccepted(!privacyAccepted);
  };

  return (
    <div className="lg:w-full h-full flex flex-col lg:flex-row bg-[#F9FBFC] max-h-[100vh] 4xl:min-h-[100vh] ">
      <div className="lg:w-[40%] lg:py-[0px] py-[30px]  bg-gradient-radial from-[#0372E2] to-[#0B5FB4] justify-center flex items-center text-center">
        <Image src={logo} alt="logo" className="mx-auto hidden lg:block" />

        <Image src={logoWhite} className="mx-auto lg:hidden" />
      </div>
      <div className="lg:w-[60%] flex flex-col justify-between rounded-[7px] overflow-y-scroll">
        <div className="flex flex-col items-center justify-center m-5 4xl:h-full">
          <div className="w-[100%] m-auto bg-transparent flex flex-col justify-around">
            <Image
              className="mx-auto hidden lg:block lg:mt-[20px]"
              src={logotwo}
            />

            <h2 className="my-8 text-center font-semibold text-[32px] md:text-4xl text-custom-black">
              Sign Up
            </h2>
            <form
              onSubmit={(e) => {
                // e.preventDefault();
                handleRegistration(e);
                // Router.replace("/dentist/view-profile");
              }}
            >
              <div className="w-full flex flex-wrap gap-x-2 lg:gap-x-7 gap-y-2 items-center justify-center">
                <AuthInput
                  placeholder={"First Name"}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <AuthInput
                  placeholder={"Last Name"}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <AuthInput
                  placeholder={"Email Address"}
                  className={"w-[92.5%] lg:w-[45%]"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <AuthInput
                  placeholder={"Display Name"}
                  className={"w-[92.5%] lg:w-[45%]"}
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
                <AuthInput
                  placeholder={"Password"}
                  type={"password"}
                  // className={"!w-[45%]"}
                  containerClassName={"!w-[45%]"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <AuthInput
                  placeholder={"GDC Number"}
                  value={gdcNo}
                  onChange={(e) => setGdcNo(e.target.value)}
                />
                <AuthInput
                  placeholder={"Practice Building number/ Name"}
                  value={buildingName}
                  onChange={(e) => setBuildingName(e.target.value)}
                />
                <AuthInput
                  placeholder={"Practice Street Name"}
                  value={streetName}
                  onChange={(e) => setStreetName(e.target.value)}
                />
                <AuthInput
                  placeholder={"Practice City"}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <AuthInput
                  placeholder={"Practice Post Code"}
                  value={postCode}
                  onChange={(e) => setPostCode(e.target.value)}
                />
              </div>

              <div className="flex flex-col mx-[20px] my-[40px]">
                <Checkbox
                  label=" I agree to the website terms & conditions
                  "
                  checked={termsAccepted}
                  onChange={handleTermsChange}
                />
                <Checkbox
                  label="I have valid consent from my patients to republish/use/share photographs uploaded to Dentfolio"
                  checked={privacyAccepted}
                  onChange={handlePrivacyChange}
                />
              </div>

              <div className="mt-5 flex flex-col items-center justify-center">
                <BlueButtons
                  loading={loader}
                  buttonText="Submit"
                  className="px-[50px] cursor-pointer"
                />

                <div className="py-4 px-6 text-center">
                  <p className="text-sm text-[#858585]">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="text-custom-blue underline"
                      onClick={() => Router.push("/dentist/login")}
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
