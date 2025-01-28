import React, { useState } from 'react';

// import from react-icons
import { IoSettingsOutline } from "react-icons/io5";

// import from nextui
import { Button, Tooltip, Avatar, Chip } from '@nextui-org/react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react';

export default function ManageRequestModal() {
    // initialize the main modal
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // initialize the confirmation modals
    const { isOpen: isConfirmOpen, onOpen: onConfirmOpen, onOpenChange: onConfirmOpenChange } = useDisclosure();
    const { isOpen: isRejectOpen, onOpen: onRejectOpen, onOpenChange: onRejectOpenChange } = useDisclosure();

    const [status, setStatus] = useState('Pending'); // Manage status

    // handlers for approval
    const handleApprove = () => {
        setStatus('Approved');
        onConfirmOpenChange(false);
        onOpenChange(false);
        console.log('Request Approved!');
    };

    // handlers for rejection
    const handleReject = () => {
        setStatus('Rejected');
        onRejectOpenChange(false);
        onOpenChange(false);
        console.log('Request Rejected!');
    };

    return (
        <>
            {/* Main Button */}
            <Button onPress={onOpen} isIconOnly variant="flat" className="bg-white">
                <Tooltip content="Manage">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <IoSettingsOutline color="gray" fontSize={18} />
                    </span>
                </Tooltip>
            </Button>

            {/* Main Modal */}
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className='flex flex-col gap-1'>
                                        <h4 className="text-sm text-gray-500">Leave Type:</h4>
                                        <Chip size="sm" color="warning" variant="flat">
                                            Sick Leave
                                        </Chip>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h4 className="text-sm text-gray-500">Status:</h4>
                                        <Chip
                                            size="sm"
                                            color={
                                                status === 'Approved'
                                                    ? 'success'
                                                    : status === 'Rejected'
                                                        ? 'danger'
                                                        : 'default'
                                            }
                                            variant="flat"
                                        >
                                            {status}
                                        </Chip>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h4 className="text-sm text-gray-500">Start Date:</h4>
                                        <p className="text-sm font-medium text-[#1b254b]">2025-01-10</p>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h4 className="text-sm text-gray-500">End Date:</h4>
                                        <p className="text-sm font-medium text-[#1b254b]">2025-01-15</p>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <h4 className="text-sm font-medium text-gray-600">Reason:</h4>
                                    <p className="text-sm font-medium text-[#1b254b]">
                                        I am not feeling well and need to rest for recovery.
                                    </p>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" onPress={onRejectOpen}>
                                    Reject
                                </Button>
                                <Button color="success" onPress={onConfirmOpen}>
                                    Approve
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            {/* Confirm Approve Modal */}
            <Modal isOpen={isConfirmOpen} onOpenChange={onConfirmOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Confirm Approval</ModalHeader>
                            <ModalBody>
                                <p>Are you sure you want to approve this leave request?</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="success" onPress={handleApprove}>
                                    Approve
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            {/* Confirm Reject Modal */}
            <Modal isOpen={isRejectOpen} onOpenChange={onRejectOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Confirm Rejection</ModalHeader>
                            <ModalBody>
                                <p>Are you sure you want to reject this leave request?</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="danger" onPress={handleReject}>
                                    Reject
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
