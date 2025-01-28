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

export default function SearchFilterLeave() {
    return (
        <div className='mt-2 flex justify-start gap-3'>
            <Input
                size='sm'
                isClearable
                className='w-full sm:max-w-[44%] text-[#1b254b]'
                placeholder='Search by name...'
                startContent={<SearchBy />}
            />

            <div className='flex gap-3 w-48'>
                <Select size='sm' placeholder='Type' aria-label="Filter by Type">
                    <SelectItem>Annual</SelectItem>
                    <SelectItem>Vacation</SelectItem>
                    <SelectItem>Sick</SelectItem>
                </Select>
            </div>


        </div>
    )
}
