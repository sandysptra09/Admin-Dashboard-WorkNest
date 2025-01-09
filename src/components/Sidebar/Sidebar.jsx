import React from "react";

import { Link } from "react-router-dom";

// import icons from react-icons
import { IoHome } from "react-icons/io5";
import { FaFileSignature } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";
import { HiClipboardDocument } from "react-icons/hi2";
import { IoMdAnalytics } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";

export default function Sidebar() {
    return (
        <div className="flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 translate-x-0">
            <span
                className="absolute top-4 right-4 block cursor-pointer xl:hidden"
                aria-label="Close Sidebar"
            >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </span>
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
            <ul className="mb-auto pt-1">
                <Link to='/'>
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8">
                            <span className="font-bold text-[#0065FF]">
                                <IoHome fontSize={20} />
                            </span>
                            <p className="leading-1 flex ms-4 font-medium text-sm text-[#1b254b]">Main Dashboard</p>
                        </li>
                        <div className="absolute top-px h-6 w-1 rounded-lg bg-[#0065FF] end-0"></div>
                    </div>
                </Link>

                <Link to='/employee-management'>
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8">
                            <span className="font-bold text-gray-700">
                                <FaFileSignature fontSize={20} />
                            </span>
                            <p className="leading-1 flex ms-4 font-medium text-sm text-gray-700">Employee Management</p>
                        </li>
                    </div>
                </Link>

                <Link to='/attendance-tracker'>
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8">
                            <span className="font-bold text-gray-700">
                                <IoCalendar fontSize={20} />
                            </span>
                            <p className="leading-1 flex ms-4 font-medium text-sm text-gray-700">Attendance Tracker</p>
                        </li>
                    </div>
                </Link>

                <Link to='/leave-request'>
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8">
                            <span className="font-bold text-gray-700">
                                <HiClipboardDocument fontSize={20} />
                            </span>
                            <p className="leading-1 flex ms-4 font-medium text-sm text-gray-700">Leave Request</p>
                        </li>
                    </div>
                </Link>

                <Link to='/performance-reports'>
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8">
                            <span className="font-bold text-gray-700">
                                <IoMdAnalytics fontSize={20} />
                            </span>
                            <p className="leading-1 flex ms-4 font-medium text-sm text-gray-700">Performance Reports</p>
                        </li>
                    </div>
                </Link>

                <div className="mt-12">
                    <Link to='/profile'>
                        <div className="relative mb-3 flex hover:cursor-pointer">
                            <li className="my-[3px] flex cursor-pointer items-center px-8">
                                <span className="font-bold text-gray-700">
                                    <BsPersonCircle fontSize={20} />
                                </span>
                                <p className="leading-1 flex ms-4 font-medium text-sm text-gray-700">Profile</p>
                            </li>
                        </div>
                    </Link>

                    <a href="">
                        <div className="relative mb-3 flex hover:cursor-pointer">
                            <li className="my-[3px] flex cursor-pointer items-center px-8">
                                <span className="font-bold text-gray-700">
                                    <TbLogout2 fontSize={20} />
                                </span>
                                <p className="leading-1 flex ms-4 font-medium text-sm text-gray-700">Log Out</p>
                            </li>
                        </div>
                    </a>
                </div>
            </ul>

        </div>
    );
}
