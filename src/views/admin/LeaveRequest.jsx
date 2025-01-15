import React from 'react'

// import components
import DataActionButtonLeave from '../../components/Button/DataActionButtonLeave'
import SearchFilterLeave from '../../components/SearchFilter/SearchFilterLeave'

export default function LeaveRequest() {
    return (
        <div className='pt-2 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2'>
            <div className='relative flex bg-white shadow-lg rounded-[20px] p-4'>
                <div className='w-full flex flex-col gap-4'>
                    <DataActionButtonLeave />

                    <SearchFilterLeave />
                </div>
            </div>

            <div className="mb-12">
                <br />
            </div>
        </div>
    )
}
