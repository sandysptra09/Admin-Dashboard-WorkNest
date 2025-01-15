import React from 'react'

// import from react-icons
import { MdAvTimer } from "react-icons/md";
import { WiTime8 } from "react-icons/wi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaRightToBracket } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";

// import components
import AttendanceData from '../../components/Table/AttendanceData'
import InputTrackerDate from '../../components/Input/InputTrackerDate'
import AttendanceStatusChart from '../../components/Chart/AttendanceStatusChart'

export default function AttendanceTracker() {
    return (
        <div className='pt-2 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2'>
            <div className='flex flex-col gap-4'>
                <div className='relative bg-white shadow-lg rounded-[20px] p-4'>
                    <div className='w-full flex flex-row gap-4'>
                        <InputTrackerDate />

                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                        <div className="flex items-center bg-white shadow-lg rounded-[20px] p-6">
                            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-sky-100">
                                <AiOutlineFieldTime fontSize={28} className="text-[#0065FF]" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-700">Average Hours</p>
                                <h4 className="text-xl font-bold text-[#1b254b]">7h 17mins</h4>
                            </div>
                        </div>

                        <div className="flex items-center bg-white shadow-lg rounded-[20px] p-6">
                            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-sky-100">
                                <FaRightToBracket fontSize={22} className="text-[#0065FF]" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-700">Average Check-in</p>
                                <h4 className="text-xl font-bold text-[#1b254b]">07:55 AM</h4>
                            </div>
                        </div>

                        <div className="flex items-center bg-white shadow-lg rounded-[20px] p-6">
                            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-emerald-100">
                                <WiTime8 fontSize={28} className="text-green-500" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-700">On-time arrival</p>
                                <h4 className="text-xl font-bold text-green-500">98.56%</h4>
                            </div>
                        </div>

                        <div className="flex items-center bg-white shadow-lg rounded-[20px] p-6">
                            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-sky-100">
                                <FaSignOutAlt fontSize={22} className="text-[#0065FF]" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm w-20 font-medium text-gray-700">Average Check-out</p>
                                <h4 className="text-xl font-bold text-[#1b254b]">19:30 PM</h4>
                            </div>
                        </div>
                    </div>


                    <div className='flex-1'>
                        <div className="relative flex flex-col rounded-[20px] bg-white shadow-lg p-[20px] text-center">
                            <div className="mb-2 flex items-center justify-between px-6">
                                <h2 className="text-lg font-bold text-[#1b254b]">Attendance Status</h2>
                                <button className="linear flex items-center justify-center rounded-lg bg-sky-100 p-2 text-[#0065FF] transition duration-200 hover:bg-gray-100">
                                    <FaChartPie fontSize={20} />
                                </button>
                            </div>
                            <div className="ml-2">
                                <AttendanceStatusChart />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='relative bg-white shadow-lg rounded-[20px] p-4'>
                    <div className='w-full'>
                        <AttendanceData />
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <br />
            </div>

        </div>
    )
}
