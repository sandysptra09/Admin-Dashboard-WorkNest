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
                                    <Input size='sm' label="NIP" placeholder="Enter NIP" type="text" required />
                                    <Input size='sm' label="NIK" placeholder="Enter NIK" type="number" required />
                                    <Select size='sm' placeholder='Select Role' label="Role" required>
                                        <SelectItem>Employee</SelectItem>
                                    </Select>
                                    <Select size='sm' placeholder='Select Departmen' label="Departmen" required>
                                        <SelectItem>Frontend Developer</SelectItem>
                                        <SelectItem>Backend Developer</SelectItem>
                                        <SelectItem>Fullstack Developer</SelectItem>
                                        <SelectItem>Mobile Developer</SelectItem>
                                        <SelectItem>DevOps Engineer</SelectItem>
                                        <SelectItem>Data Scientist</SelectItem>
                                        <SelectItem>Quality Assurance</SelectItem>
                                        <SelectItem>UX/UI Designer</SelectItem>
                                    </Select>
                                    <Input size='sm' label="Name" placeholder="Enter Full Name" type="text" />
                                    <Select size='sm' placeholder='Select Gender' label="Gender" required>
                                        <SelectItem>Male</SelectItem>
                                        <SelectItem>Female</SelectItem>
                                    </Select>
                                    <Input size='sm' label="Birth Place" placeholder="Enter Birth Place" type="text" required />
                                    <DatePicker size='sm' className="w-full" label="Enter Birth date" />
                                    <Input size='sm' label="Phone" placeholder="Enter Phone Number" type="number" required />
                                    <Select size='sm' placeholder='Select Religion' label="Religion" required>
                                        <SelectItem>Islam</SelectItem>
                                        <SelectItem>Christian</SelectItem>
                                        <SelectItem>Catholic</SelectItem>
                                        <SelectItem>Hindu</SelectItem>
                                        <SelectItem>Buddhist</SelectItem>
                                    </Select>
                                    <Select size='sm' placeholder='Select Marital Status' label="Marital Status" required>
                                        <SelectItem>Single</SelectItem>
                                        <SelectItem>Married</SelectItem>
                                        <SelectItem>Divorced</SelectItem>
                                    </Select>
                                    <Input size='sm'
                                        className="w-full"
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
                                        placeholder="Enter your password"
                                        type={isVisible ? "text" : "password"}

                                    />
                                    <Textarea className="w-full" label="Address" placeholder="Enter Address" />

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
