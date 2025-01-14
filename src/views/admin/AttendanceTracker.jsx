import React from 'react'

// import components
import AttendanceData from '../../components/Table/AttendanceData'
import InputTrackerDate from '../../components/Input/InputTrackerDate'

export default function AttendanceTracker() {
    return (
        <div className='pt-2 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2'>
            <div className='relative flex bg-white shadow-3xl rounded-[20px] p-4'>
                <div className='w-full flex flex-col gap-4'>
                    <InputTrackerDate />

                    <AttendanceData />
                </div>
            </div>
        </div>
    )
}
