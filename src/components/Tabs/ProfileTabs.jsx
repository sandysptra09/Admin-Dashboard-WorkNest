import React from 'react'

// import icon
import { ProfileEditIcon } from './IconEdit';

// import from nextui
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function ProfileTabs() {
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-row gap-6'>
                <div className='w-full flex gap-4'>
                    <Avatar className="w-20 h-20 text-large" src="https://i.pinimg.com/736x/a4/8f/7b/a48f7b8c75dcf005195f078491eb5045.jpg" />
                    <div className='flex flex-col gap-2 items-start'>
                        <h3 className='text-base font-semibold text-[#1b254b]'>Sandy Saputra</h3>
                        <span className='text-sm text-gray-500 font-semibold'>HR Manager</span>
                        <span className='text-xs text-gray-500'>Leads, United Kingdom</span>
                    </div>
                </div>

                <div>
                    <Button size='sm' radius='full' color="primary" startContent={<ProfileEditIcon />} variant="bordered">
                        Edit
                    </Button>
                </div>
            </div>

            <div className="">
                <div className="flex justify-between items-center">
                    <h4 className="text-sm font-semibold text-[#1b254b]">Personal Information</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className='flex flex-col gap-1'>
                        <p className="text-sm text-gray-500">First Name</p>
                        <p className="text-sm font-medium text-[#1b254b]">Sandy</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className="text-sm text-gray-500">Last Name</p>
                        <p className="text-sm font-medium text-[#1b254b]">Saputra</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className="text-sm text-gray-500">Email Address</p>
                        <p className="text-sm font-medium text-[#1b254b]">sandywork@manager.nest</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="text-sm font-medium text-[#1b254b]">+62 8145 346 46</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm text-gray-500">Bio</p>
                        <p className="text-sm font-medium text-[#1b254b]">HR Manager in WorkNest Group</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
