import React from "react";
import { Link, useLocation } from "react-router-dom";

// import icons from react-icons
import { IoHome } from "react-icons/io5";
import { FaFileSignature } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";
import { HiClipboardDocument } from "react-icons/hi2";
import { IoMdAnalytics } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";

export default function Sidebar() {

    // initialize the location
    const location = useLocation();
    const menuItems = [
        { path: "/", icon: <IoHome fontSize={20} />, label: "Main Dashboard" },
        { path: "/employee-management", icon: <FaFileSignature fontSize={20} />, label: "Employee Management" },
        { path: "/attendance-tracker", icon: <IoCalendar fontSize={20} />, label: "Attendance Tracker" },
        { path: "/leave-request", icon: <HiClipboardDocument fontSize={20} />, label: "Leave Request" },
        { path: "/performance-reports", icon: <IoMdAnalytics fontSize={20} />, label: "Performance Reports" },
        { path: "/profile", icon: <BsPersonCircle fontSize={20} />, label: "Profile" },
    ];

    return (
        <div className="flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white">
            <div className="mx-[56px] mt-[32px] flex items-center">
                <div className="mt-1 ml-2 flex justify-center items-center">
                    <img
                        src="/assets/logo/worknest-logo2.png"
                        alt="Worknest Logo"
                        className="w-auto h-24"
                    />
                </div>
            </div>
            <div className="mt-[32px] mb-7 h-px bg-neutral-300"></div>
            <ul className="mb-auto pt-1 p-2">
                {menuItems.map((item, index) => (
                    <Link to={item.path} key={index}>
                        <div
                            className={`w-[280px] relative mb-3 flex items-center hover:cursor-pointer px-8 py-2 transition-all duration-200 rounded-lg 
                                ${location.pathname === item.path
                                    ? "bg-[#0065FF] text-white shadow-lg"
                                    : "text-gray-700 hover:bg-sky-100"
                                }`}
                        >
                            <span className="font-bold">{item.icon}</span>
                            <p className="leading-1 ms-4 font-medium text-sm">
                                {item.label}
                            </p>
                            {location.pathname === item.path && (
                                <div className="absolute top-1/2 transform -translate-y-1/2 end-0 h-6 w-1 bg-[#0065FF] rounded-lg"></div>
                            )}
                        </div>
                    </Link>
                ))}
                <div className="mt-12">
                    <a href="">
                        <div className="relative mb-3 flex items-center px-8 py-2 transition-all duration-200 rounded-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-navy-700 hover:cursor-pointer">
                            <span className="font-bold">
                                <TbLogout2 fontSize={20} />
                            </span>
                            <p className="leading-1 ms-4 font-medium text-sm">
                                Log Out
                            </p>
                        </div>
                    </a>
                </div>
            </ul>
        </div>
    );
}
