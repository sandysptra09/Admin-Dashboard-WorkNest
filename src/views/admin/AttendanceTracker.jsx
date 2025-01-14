import React from 'react'

// import from react-icons
import { MdAvTimer } from "react-icons/md";
import { WiTime8 } from "react-icons/wi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaRightToBracket } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

// import components
import AttendanceData from '../../components/Table/AttendanceData'
import InputTrackerDate from '../../components/Input/InputTrackerDate'
import AttendanceTimeChart from '../../components/Chart/AttendanceTimeChart'

export default function AttendanceTracker() {
    return (
        <div className='pt-2 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2'>
            <div className='flex flex-col gap-4'>
                <div className='relative bg-white shadow-3xl rounded-[20px] p-4'>
                    <div className='w-full flex flex-row gap-4'>
                        <InputTrackerDate />

                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2'>
                        <div className='relative flex bg-white shadow-3xl rounded-[20px] p-4'>
                            <div className=" flex h-[90px] items-center">
                                <div className="rounded-full bg-sky-100 p-3">
                                    <span className="flex items-center text-[#0065FF]">
                                        <AiOutlineFieldTime fontSize={28} />
                                    </span>
                                </div>
                            </div>
                            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                                <p className="font-dm text-sm font-mendium text-gray-700">
                                    Average Hours
                                </p>
                                <h4 className="text-xl font-bold text-[#1b254b]">7h 17mins</h4>
                            </div>
                        </div>

                        <div className='relative flex bg-white shadow-3xl rounded-[20px] p-4'>
                            <div className=" flex h-[90px] items-center">
                                <div className="rounded-full bg-sky-100 p-3">
                                    <span className="flex items-center text-[#0065FF]">
                                        <FaRightToBracket fontSize={22} />
                                    </span>
                                </div>
                            </div>
                            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                                <p className="font-dm text-sm font-medium text-gray-700">
                                    Average Check-in
                                </p>
                                <h4 className="text-xl font-bold text-[#1b254b]">07:55 AM</h4>
                            </div>
                        </div>

                        <div className='relative flex bg-white shadow-3xl rounded-[20px] p-4'>
                            <div className=" flex h-[90px] items-center">
                                <div className="rounded-full bg-emerald-100 p-3">
                                    <span className="flex items-center text-green-500">
                                        <WiTime8 fontSize={28} />
                                    </span>
                                </div>
                            </div>
                            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                                <p className="font-dm text-sm font-medium text-gray-700">
                                    On-time arrival
                                </p>
                                <h4 className="text-xl font-bold text-green-500">98.56%</h4>
                            </div>
                        </div>

                        <div className='relative flex bg-white shadow-3xl rounded-[20px] p-4'>
                            <div className=" flex h-[90px] items-center">
                                <div className="rounded-full bg-sky-100 p-3">
                                    <span className="flex items-center text-[#0065FF]">
                                        <FaSignOutAlt fontSize={22} />
                                    </span>
                                </div>
                            </div>
                            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                                <p className="font-dm text-sm font-medium text-gray-700">
                                    Average Check-out
                                </p>
                                <h4 className="text-xl font-bold text-[#1b254b]">19:30 PM</h4>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1'>
                        <div className='relative flex bg-white shadow-3xl rounded-[20px] p-4'>
                        </div>
                    </div>
                </div>


                <div className='relative bg-white shadow-3xl rounded-[20px] p-4'>
                    <div className='w-full'>
                        <AttendanceData />
                    </div>
                </div>
            </div>

        </div>
    )
}
