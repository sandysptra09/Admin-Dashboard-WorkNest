import React from 'react'

// import from nextui
import { Button, Tooltip, Avatar, Chip } from '@nextui-org/react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'

export default function ViewRequestModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} isIconOnly variant="flat" className="bg-white">
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
            <Modal size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Leave Request Details</ModalHeader>
                            <ModalBody className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <Avatar src="https://lenox-pasifik.co.id/wp-content/uploads/2016/06/team-1-640x640.jpg" alt="Employee Avatar" size="lg" />
                                    <div className='flex flex-col items-start'>
                                        <h3 className='text-base font-semibold text-[#1b254b]'>John Doe</h3>
                                        <span className='text-xs text-gray-500 font-semibold'>EMPLOYEE ID : EMP001</span>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-sm text-gray-500">Start Date :</p>
                                    <p className="text-sm font-medium text-[#1b254b]">January 15, 2025</p>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-sm text-gray-500">End Date :</p>
                                    <p className="text-sm font-medium text-[#1b254b]">January 20, 2025</p>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-sm text-gray-500">Type of Request :</p>
                                    <p className="text-sm font-semibold text-[#1b254b]">Personal</p>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-sm text-gray-500">Reason :</p>
                                    <p className="text-sm font-medium text-[#1b254b]">
                                        Attending a family wedding and spending time with relatives.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <p className="text-sm text-gray-500">Status :</p>
                                    <Chip size='md' color="success" variant="flat">
                                        Approved
                                    </Chip>
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
    );
}
