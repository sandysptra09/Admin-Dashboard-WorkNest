import React from "react";

// import icons from react-icon
import { BsPeopleFill } from "react-icons/bs";
import { IoPersonAdd } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { IoTime } from "react-icons/io5";
import { HiClipboardDocument } from "react-icons/hi2";
import { FaChartPie } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";

// import components
import AnalyticsChart from "../../components/Chart/AnalyticsChart";
import AttendanceOverviewChart from "../../components/Chart/AttendanceOverviewChart";
import CalendarOverview from "../../components/Calendar/CalendarOverview";
import RequestOverviewChart from "../../components/Chart/RequestOverviewChart";
import AttendanceDetailChart from "../../components/Chart/AttendanceDetailChart";

export default function AnalyticsDashboard() {
    return (
        <div className="pt-2 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
            <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
                <div className="relative flex bg-white shadow-3xl rounded-[20px] items-center">
                    <div className="ml-[18px] flex h-[90px] items-center">
                        <div className="rounded-full bg-sky-100 p-3">
                            <span className="flex items-center text-[#0065FF]">
                                <BsPeopleFill fontSize={20} />
                            </span>
                        </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                        <p className="font-dm text-sm font-medium text-gray-700">
                            Total Employees
                        </p>
                        <h4 className="text-xl font-bold text-[#1b254b]">70</h4>
                    </div>
                </div>

                <div className="relative flex bg-white shadow-3xl rounded-[20px] items-center">
                    <div className="ml-[18px] flex h-[90px] items-center">
                        <div className="rounded-full bg-sky-100 p-3">
                            <span className="flex items-center text-[#0065FF]">
                                <IoPersonAdd fontSize={20} />
                            </span>
                        </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                        <p className="font-dm text-sm font-medium text-gray-700">
                            New Hires
                        </p>
                        <h4 className="text-xl font-bold text-[#1b254b]">12</h4>
                    </div>
                </div>

                <div className="relative flex bg-white shadow-3xl rounded-[20px] items-center">
                    <div className="ml-[18px] flex h-[90px] items-center">
                        <div className="rounded-full bg-sky-100 p-3">
                            <span className="flex items-center text-[#0065FF]">
                                <MdOutlinePayments fontSize={20} />
                            </span>
                        </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                        <p className="font-dm text-sm font-medium text-gray-700">
                            Monthly Income
                        </p>
                        <h4 className="text-xl font-bold text-[#1b254b]">
                            IDR. 100.000.000
                        </h4>
                    </div>
                </div>

                <div className="relative flex bg-white shadow-3xl rounded-[20px] items-center">
                    <div className="ml-[18px] flex h-[90px] items-center">
                        <div className="rounded-full bg-sky-100 p-3">
                            <span className="flex items-center text-[#0065FF]">
                                <BiTask fontSize={20} />
                            </span>
                        </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                        <p className="font-dm text-sm font-medium text-gray-700">
                            Total Attendance
                        </p>
                        <h4 className="text-xl font-bold text-[#1b254b]">0</h4>
                    </div>
                </div>

                <div className="relative flex bg-white shadow-3xl rounded-[20px] items-center">
                    <div className="ml-[18px] flex h-[90px] items-center">
                        <div className="rounded-full bg-sky-100 p-3">
                            <span className="flex items-center text-[#0065FF]">
                                <IoTime fontSize={20} />
                            </span>
                        </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                        <p className="font-dm text-sm font-medium text-gray-700">
                            Attend Today
                        </p>
                        <h4 className="text-xl font-bold text-[#1b254b]">15</h4>
                    </div>
                </div>

                <div className="relative flex bg-white shadow-3xl rounded-[20px] items-center">
                    <div className="ml-[18px] flex h-[90px] items-center">
                        <div className="rounded-full bg-sky-100 p-3">
                            <span className="flex items-center text-[#0065FF]">
                                <HiClipboardDocument fontSize={20} />
                            </span>
                        </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                        <p className="font-dm text-sm font-medium text-gray-700">
                            Total Leave Request
                        </p>
                        <h4 className="text-xl font-bold text-[#1b254b]">0</h4>
                    </div>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="relative flex flex-col rounded-[20px] bg-white shadow-3xl p-[20px] text-center">
                    <div className="mb-2 flex items-center justify-between px-6">
                        <h2 className="text-lg font-bold text-[#1b254b]">Attendance Overview</h2>
                        <button className="linear flex items-center justify-center rounded-lg bg-sky-100 p-2 text-[#0065FF] transition duration-200 hover:bg-gray-100">
                            <FaChartPie fontSize={20} />
                        </button>
                    </div>
                    <div className="">
                        <AttendanceOverviewChart />
                    </div>
                </div>

                <div className="relative flex flex-col rounded-[20px] bg-white shadow-3xl p-[20px] text-center">
                    <div className="mb-2 flex items-center justify-between px-6">
                        <h2 className="text-lg font-bold text-[#1b254b]">Attendance Detail</h2>
                        <button className="linear flex items-center justify-center rounded-lg bg-sky-100 p-2 text-[#0065FF] transition duration-200 hover:bg-gray-100">
                            <FaChartLine fontSize={20} />
                        </button>
                    </div>
                    <div className="">
                        <AttendanceDetailChart />
                    </div>
                </div>
            </div>


            <div className="mx-auto mt-6 ">
                <AnalyticsChart />
            </div>

            <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
                <div className="relative flex flex-col rounded-[20px] bg-white shadow-3xl p-6 text-center">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-[#1b254b]">
                            Request Overview
                        </h2>
                    </div>

                    <div className="flex justify-center">
                        <RequestOverviewChart />
                    </div>
                </div>


                <div className="relative flex bg-white shadow-3xl rounded-[20px] items-center">

                </div>

                <div className="relative flex bg-white shadow-3xl rounded-[20px] items-center p-5">
                    <CalendarOverview />
                </div>
            </div>

        </div>
    );
}
