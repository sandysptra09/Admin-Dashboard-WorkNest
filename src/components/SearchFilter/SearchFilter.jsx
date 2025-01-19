import React from 'react'

// import from nextui
import {
    Input,
    Button,
    Select,
    SelectItem
} from '@nextui-org/react'

// import icons
import { SearchBy, DropDownByRole, DropDownByDepartmen, DropDownByStatus } from './IconsSearchFilter'

export default function SearchFilter() {
    return (
        <div className='mt-2 flex justify-start gap-3'>
            <Input
                size='sm'
                isClearable
                className='w-full sm:max-w-[44%] text-[#1b254b]'
                placeholder='Search by name...'
                startContent={<SearchBy />}
            />

            <div className='w-full flex gap-3'>
                <Select size='sm' placeholder='Role' aria-label="Filter by Role">
                    <SelectItem>Chief Executive Officer (CEO)</SelectItem>
                    <SelectItem>Product Manager</SelectItem>
                    <SelectItem>Software Engineer</SelectItem>
                </Select>

                <Select size='sm' placeholder='Departmen' aria-label="Filter by Departmen">
                    <SelectItem>Frontend Developer</SelectItem>
                    <SelectItem>Backend Developer</SelectItem>
                    <SelectItem>Fullstack Developer</SelectItem>
                    <SelectItem>Mobile Developer</SelectItem>
                    <SelectItem>DevOps Engineer</SelectItem>
                    <SelectItem>Data Scientist</SelectItem>
                    <SelectItem>Quality Assurance</SelectItem>
                    <SelectItem>UX/UI Designer</SelectItem>
                </Select>

                <Select size='sm' placeholder='Status' aria-label="Filter by Status">
                    <SelectItem>Active</SelectItem>
                    <SelectItem>Inactive</SelectItem>
                </Select>
            </div>


        </div>
    )
}
