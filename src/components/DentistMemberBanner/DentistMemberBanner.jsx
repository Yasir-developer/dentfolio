import React from 'react'
import BlueButtons from '@/components/Buttons/BlueButtons'
import Image from "next/image";
import doctor from "../../../public/images/female-dentist.png";
const DentistMemberBanner = () => {
  return (
    <div className='dentistPlanBannerContainer bg-custom-grey-medium'>
        <div className="dentistPlanBannerInnerContainer sizingStyles flex items-center justify-between">
            <div className="w-[55%] py-[130px] dentistPlanContentContainer">
                <h1 className="leading-[1.3] text-3xl lg:text-4xl font-bold mb-4 text-black w-full mt-[20px] lg:mt-[0px]">JOIN THE HUNDREDS OF OTHER DENTFOLIO MEMBERS GROWING THEIR <span className="text-3xl lg:text-4xl font-bold font-poppins text-custom-blue">PRIVATE PATIENT LISTS</span></h1>
                <p className="mb-4 text-black font-normal lg:text-[18px] text-[13px]">Start your free 1-month trial today. Cancel anytime</p>
                <BlueButtons buttonText="Start my Free Month" className="!px-8"/>
            </div>
            <div className="w-[45%] dentistPlanImageContainer">
                <Image src={doctor} width={0} height={0} sizes='100vw' className='h-[614px] w-auto ml-auto mr-0'/>
            </div>
        </div>
    </div>
  )
}

export default DentistMemberBanner