import React, { useState } from 'react'
import { parseDate, getLocalTimeZone } from '@internationalized/date'

// import from nextui
import { Button, Tooltip } from '@nextui-org/react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from '@nextui-org/react'
import { Select, SelectItem, DatePicker, Textarea } from '@nextui-org/react'

// import icon
import { AddEmployee } from '../Button/IconsButton'
import { EyeSlashFilledIcon, EyeFilledIcon, ViewIcon, EditIcon } from './IconDropdownModal'

export default function EditEmployeeModal() {
    // initialize the modal 
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isConfirmOpen, onOpen: onConfirmOpen, onOpenChange: onConfirmOpenChange } = useDisclosure();

    // initialize password visibility
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    // initialize value date
    const [value, setValue] = useState(parseDate('2006-06-12'))

    // handle form submission
    const handleSubmit = () => {
        // open confirmation modal
        onConfirmOpen();
    };

    // handle update
    const handleUpdate = () => {
        onConfirmOpenChange(false);
        onOpenChange(false);

        console.log('Employee information updated.');
    };


    return (

        <>
            <Button onPress={onOpen} isIconOnly variant='flat' className='bg-white'>
                <Tooltip content="Edit user">
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
                                d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                                strokeWidth={1.5}
                            />
                            <path
                                d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                                strokeWidth={1.5}
                            />
                            <path
                                d="M2.5 18.3333H17.5"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
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
                            <ModalHeader className="flex flex-col gap-1">Update Employee Information</ModalHeader>
                            <ModalBody className='flex flex-col gap-1'>
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input size='sm' label="NIP" defaultValue='20061228-0001' type="text" isRequired />
                                    <Input size='sm' label="NIK" defaultValue='3201122800010001' type="number" isRequired />
                                    <Select size='sm' defaultSelectedKeys={['se']} label="Select Role" isRequired>
                                        <SelectItem>Chief Executive Officer (CEO)</SelectItem>
                                        <SelectItem>Product Manager</SelectItem>
                                        <SelectItem key='se'>Software Engineer</SelectItem>
                                    </Select>
                                    <Select size='sm' defaultSelectedKeys={['fe']} label="Departmen" isRequired>
                                        <SelectItem key='fe'>Frontend Developer</SelectItem>
                                        <SelectItem>Backend Developer</SelectItem>
                                        <SelectItem>Fullstack Developer</SelectItem>
                                        <SelectItem>Mobile Developer</SelectItem>
                                        <SelectItem>DevOps Engineer</SelectItem>
                                        <SelectItem>Data Scientist</SelectItem>
                                        <SelectItem>Quality Assurance</SelectItem>
                                        <SelectItem>UX/UI Designer</SelectItem>
                                    </Select>
                                    <Input size='sm' label="Name" defaultValue='John Doe' type="text" isRequired />
                                    <Select size='sm' defaultSelectedKeys={['male']} label="Gender" isRequired>
                                        <SelectItem key='male'>Male</SelectItem>
                                        <SelectItem>Female</SelectItem>
                                    </Select>
                                    <Input size='sm' label="Birth Place" defaultValue='Bandung' type="text" isRequired />
                                    <DatePicker size='sm' className="w-full" label="Birth date" value={value} onChange={setValue} isRequired />
                                    <Input size='sm' label="Phone" defaultValue='+6281141321889' type="text" isRequired />
                                    <Select size='sm' defaultSelectedKeys={['chr']} label="Religion" isRequired>
                                        <SelectItem>Islam</SelectItem>
                                        <SelectItem key='chr'>Christian</SelectItem>
                                        <SelectItem>Catholic</SelectItem>
                                        <SelectItem>Hindu</SelectItem>
                                        <SelectItem>Buddhist</SelectItem>
                                    </Select>
                                    <Select size='sm' defaultSelectedKeys={['single']} label="Marital Status" isRequired>
                                        <SelectItem key='single'>Single</SelectItem>
                                        <SelectItem>Married</SelectItem>
                                        <SelectItem>Divorced</SelectItem>
                                    </Select>
                                    <Input size='sm' label="Email" defaultValue='johndoework@employee.nest' type="email" isRequired />

                                    <Textarea className="w-full" label="Address" defaultValue='Jl. Cibaduyut Indah No. 17 Blok F' isRequired />
                                    <Input size='sm'
                                        className="w-full"
                                        defaultValue='johndoe123'
                                        isRequired
                                        endContent={
                                            <button
                                                aria-label="toggle password visibility"
                                                className="focus:outline-none"
                                                type="button"
                                                onClick={toggleVisibility}
                                            >
                                                {isVisible ? (
                                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                ) : (
                                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                )}
                                            </button>
                                        }
                                        label="Password"
                                        placeholder="Enter password"
                                        type={isVisible ? "text" : "password"}

                                    />

                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" onPress={onConfirmOpen}>
                                    Update
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <Modal isOpen={isConfirmOpen} onOpenChange={onConfirmOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Confirm Update</ModalHeader>
                            <ModalBody>
                                <p className='text-[15px]'>
                                    Are you sure you want to update this employee's information?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" onPress={handleUpdate}>
                                    Yes, Update
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
