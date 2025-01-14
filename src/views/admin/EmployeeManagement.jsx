import React from 'react'

// import components
import DataActionButton from '../../components/Button/DataActionButton'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import EmployeeData from '../../components/Table/EmployeeData'

export default function EmployeeManagement() {
    return (
        <div className='pt-2 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2'>
            <div className='relative flex bg-white shadow-3xl rounded-[20px] p-4'>
                <div className='w-full flex flex-col gap-4'>
                    <DataActionButton />

                    <SearchFilter />

                    <EmployeeData />
                </div>
            </div>
        </div>
    )
}
