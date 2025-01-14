import React from 'react'

// import from nextui
import {
    Input,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
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

            <div className='flex gap-3'>
                <Dropdown>
                    <DropdownTrigger className="hidden sm:flex">
                        <Button size='sm' className="px-4 py-2 text-sm bg-slate-100"
                            endContent={<DropDownByRole className="text-small" />} variant="flat">
                            Role
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        disallowEmptySelection
                        aria-label="Table Columns"
                        closeOnSelect={false}
                        selectionMode="multiple"
                    >
                    </DropdownMenu>
                </Dropdown>

                <Dropdown>
                    <DropdownTrigger className="hidden sm:flex">
                        <Button size='sm' className="px-4 py-2 text-sm bg-slate-100"
                            endContent={<DropDownByRole className="text-small" />} variant="flat">
                            Departmen
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        disallowEmptySelection
                        aria-label="Table Columns"
                        closeOnSelect={false}
                        selectionMode="multiple"
                    >
                    </DropdownMenu>
                </Dropdown>

                <Dropdown>
                    <DropdownTrigger className="hidden sm:flex">
                        <Button size='sm' className="px-4 py-2 text-sm bg-slate-100"
                            endContent={<DropDownByRole className="text-small" />} variant="flat">
                            Status
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        disallowEmptySelection
                        aria-label="Table Columns"
                        closeOnSelect={false}
                        selectionMode="multiple"
                    >
                    </DropdownMenu>
                </Dropdown>
            </div>


        </div>
    )
}
