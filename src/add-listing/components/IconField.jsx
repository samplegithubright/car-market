import React from 'react';
import { FaCarSide, FaCircle, FaClipboardList, FaDollarSign, FaDoorClosed, FaGasPump, FaIdCard, FaIndustry, FaPalette, FaRoad, FaTag, FaTags, FaWrench } from "react-icons/fa6";
import { FaCalendarAlt, FaCogs, FaFileAlt, FaMoneyBillAlt, FaTachometerAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
const iconMap={
    FaClipboardList:<FaClipboardList />,
    FaTag:<FaTag/>,
    FaDollarSign:<FaDollarSign/>,
    FaMoneyBillAlt:<FaMoneyBillAlt/>,
    FaCar:<FaCar />,
    FaCheckCircle:<FaCheckCircle/>,
    FaIndustry:<FaIndustry/>,
    FaCarSide:<FaCarSide/>,
    FaCalenderAlt:<FaCalendarAlt/>,
    FaRoad:<FaRoad/>,
    FaCogs:<FaCogs/>,
    FaGasPump:<FaGasPump/>,
    FaTachometerAlt:<FaTachometerAlt/>,
    FaWrench:<FaWrench/>,
    FaCircle:<FaCircle/>,
    FaPalette:<FaPalette/>,
    FaDoorClosed:<FaDoorClosed/>,
    FaIdCard:<FaIdCard/>,
    FaTags:<FaTags/>,
    FaFileAlt:<FaFileAlt/>,
}


export default function IconField({icon}) {
  return (
    <div className='text-primary bg-blue-100 p-1.5 rounded-full'>
        {iconMap[icon]}
    </div>
  )
}
