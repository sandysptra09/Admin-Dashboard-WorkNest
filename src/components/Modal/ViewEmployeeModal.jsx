import React, { useState } from 'react'
import { parseDate, getLocalTimeZone } from '@internationalized/date'

// import from nextui
import { Button, Tooltip, Avatar } from '@nextui-org/react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from '@nextui-org/react'

// import icon
import { AddEmployee } from '../Button/IconsButton'
import { EyeSlashFilledIcon, EyeFilledIcon, ViewIcon, EditIcon } from './IconDropdownModal'

export default function ViewEmployeeModal() {
    // initialize the modal 
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} isIconOnly variant='flat' className='bg-white'>
                <Tooltip content="Details">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <svg
                            aria-hidden="true"
                            fill="none"
                            focusable="false"
                            height="1em"
                            role="presentation"
                            viewBox="0 0 20 20"
                            width="1em"
                        >
                            <path
                                d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                            />
                            <path
                                d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                            />
                        </svg>
                    </span>
                </Tooltip>
            </Button>
            <Modal size='3xl' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Detail Information</ModalHeader>
                            <ModalBody className='m-4 flex flex-col gap-1'>
                                <div className='flex flex-col gap-6'>
                                    <div className='flex flex-row gap-6'>
                                        <div className='w-full flex gap-4'>
                                            <Avatar className="w-20 h-20 text-large" src="https://lenox-pasifik.co.id/wp-content/uploads/2016/06/team-1-640x640.jpg" />
                                            <div className='flex flex-col gap-2 items-start'>
                                                <h3 className='text-base font-semibold text-[#1b254b]'>John Doe</h3>
                                                <span className='text-sm text-gray-500 font-semibold'>Software Engineer</span>
                                                <span className='text-xs text-gray-500'>Jl. Cibaduyut Indah No. 17 Blok F</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-sm font-semibold text-[#1b254b]">Personal Information</h4>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            <div className='flex flex-col gap-1'>
                                                <p className="text-sm text-gray-500">NIP</p>
                                                <p className="text-sm font-medium text-[#1b254b]">20061228-0001</p>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <p className="text-sm text-gray-500">NIK</p>
                                                <p className="text-sm font-medium text-[#1b254b]">3201122800010001</p>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <p className="text-sm text-gray-500">Name</p>
                                                <p className="text-sm font-medium text-[#1b254b]">John Doe</p>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <p className="text-sm text-gray-500">Departmen</p>
                                                <p className="text-sm font-medium text-[#1b254b]">Frontend Developer</p>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <p className="text-sm text-gray-500">Gender</p>
                                                <p className="text-sm font-medium text-[#1b254b]">Male</p>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <p className="text-sm text-gray-500">Marital Status</p>
                                                <p className="text-sm font-medium text-[#1b254b]">Single</p>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <p className="text-sm text-gray-500">Birth Place</p>
                                                <p className="text-sm font-medium text-[#1b254b]">Bandung</p>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <p className="text-sm text-gray-500">Birth date</p>
                                                <p className="text-sm font-medium text-[#1b254b]">06/12/2006</p>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <p className="text-sm text-gray-500">Phone</p>
                                                <p className="text-sm font-medium text-[#1b254b]">+62 8145 346 46</p>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <p className="text-sm text-gray-500">Religion</p>
                                                <p className="text-sm font-medium text-[#1b254b]">Christian</p>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-sm text-gray-500">Single</p>
                                                <p className="text-sm font-medium text-[#1b254b]">Jl. Cibaduyut Indah No. 17 Blok F</p>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <p className="text-sm text-gray-500">Email Address</p>
                                                <p className="text-sm font-medium text-[#1b254b]">johndoework@employee.nest</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={onClose}>
                                    OK
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
