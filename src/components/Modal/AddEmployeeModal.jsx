import React, { useState } from 'react'

// import from nextui
import { Button } from '@nextui-org/react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from '@nextui-org/react'
import { Select, SelectItem, DatePicker, Textarea } from '@nextui-org/react'

// import icon
import { AddEmployee } from '../Button/IconsButton'
import { EyeSlashFilledIcon, EyeFilledIcon } from './IconDropdownModal'

export default function AddEmployeeModal() {
    // initialize the modal 
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // initialize password visibility
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            <Button onPress={onOpen} color="primary" size='sm' startContent={<AddEmployee />}>
                Add Employee
            </Button>
            <Modal size='3xl' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add New Employee</ModalHeader>
                            <ModalBody className='flex flex-col gap-1'>
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input size='sm' label="NIP" placeholder="Enter NIP" type="text" isRequired />
                                    <Input size='sm' label="NIK" placeholder="Enter NIK" type="number" isRequired />
                                    <Select size='sm' placeholder='Role' label="Select Role" isRequired aria-label="Role Selection">
                                        <SelectItem>Chief Executive Officer (CEO)</SelectItem>
                                        <SelectItem>Product Manager</SelectItem>
                                        <SelectItem>Software Engineer</SelectItem>
                                    </Select>
                                    <Select size='sm' placeholder='Select Departmen' label="Departmen" isRequired>
                                        <SelectItem>Frontend Developer</SelectItem>
                                        <SelectItem>Backend Developer</SelectItem>
                                        <SelectItem>Fullstack Developer</SelectItem>
                                        <SelectItem>Mobile Developer</SelectItem>
                                        <SelectItem>DevOps Engineer</SelectItem>
                                        <SelectItem>Data Scientist</SelectItem>
                                        <SelectItem>Quality Assurance</SelectItem>
                                        <SelectItem>UX/UI Designer</SelectItem>
                                    </Select>
                                    <Input size='sm' label="Name" placeholder="Enter Full Name" type="text" isRequired />
                                    <Select size='sm' placeholder='Select Gender' label="Gender" isRequired>
                                        <SelectItem>Male</SelectItem>
                                        <SelectItem>Female</SelectItem>
                                    </Select>
                                    <Input size='sm' label="Birth Place" placeholder="Enter Birth Place" type="text" isRequired />
                                    <DatePicker size='sm' className="w-full" label="Enter Birth date" isRequired />
                                    <Input size='sm' label="Phone" placeholder="Enter Phone Number" type="number" isRequired />
                                    <Select size='sm' placeholder='Select Religion' label="Religion" isRequired>
                                        <SelectItem>Islam</SelectItem>
                                        <SelectItem>Christian</SelectItem>
                                        <SelectItem>Catholic</SelectItem>
                                        <SelectItem>Hindu</SelectItem>
                                        <SelectItem>Buddhist</SelectItem>
                                    </Select>
                                    <Select size='sm' placeholder='Select Marital Status' label="Marital Status" isRequired>
                                        <SelectItem>Single</SelectItem>
                                        <SelectItem>Married</SelectItem>
                                        <SelectItem>Divorced</SelectItem>
                                    </Select>
                                    <Input size='sm'
                                        className="w-full"
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
                                    <Textarea className="w-full" label="Address" placeholder="Enter Address" isRequired />

                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Submit
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    )
}
