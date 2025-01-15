import React from 'react'
import scrollbar_custom from '../../module/gblobal.module.scss'

// import from nextui
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Chip, Avatar, Pagination } from '@nextui-org/react'

export default function LeaveRequestData() {
    return (
        <div className=''>
            <div className={`w-[860px] overflow-x-scroll ${scrollbar_custom.customscrollbar}`}>
                <Table fullWidth removeWrapper aria-label="Example static collection table" className=''>
                    <TableHeader className='w-full'>
                        <TableColumn>ID</TableColumn>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>DATE</TableColumn>
                        <TableColumn>STATUS</TableColumn>
                        <TableColumn>CHECK-IN</TableColumn>
                        <TableColumn>CHECK-OUT</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>EMP001</TableCell>
                            <TableCell className='whitespace-nowrap'>
                                <div className='w-full flex items-center gap-2'>
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <span>John Doe</span>
                                </div>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>04/04/2024</TableCell>
                            <TableCell className='whitespace-nowrap'>
                                <Chip size='sm' color="primary" variant="flat">
                                    Attend
                                </Chip>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>07:00 AM</TableCell>
                            <TableCell className='whitespace-nowrap'>18:30 PM</TableCell>

                        </TableRow>
                        <TableRow key="2">
                            <TableCell>EMP002</TableCell>
                            <TableCell className='whitespace-nowrap'>
                                <div className='flex items-center gap-2'>
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <span>John Doe</span>
                                </div>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>04/04/2024</TableCell>
                            <TableCell className='whitespace-nowrap'>
                                <Chip size='sm' className='text-[#6ad2ff] bg-[#6ad2ff]/20' variant="flat">
                                    Absent
                                </Chip>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>--:--</TableCell>
                            <TableCell className='whitespace-nowrap'>--:--</TableCell>
                        </TableRow>

                        <TableRow key="3">
                            <TableCell>EMP002</TableCell>
                            <TableCell className='whitespace-nowrap'>
                                <div className='flex items-center gap-2'>
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <span>John Doe</span>
                                </div>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>04/04/2024</TableCell>
                            <TableCell className='whitespace-nowrap'>
                                <Chip size='sm' color="warning" variant="flat">
                                    Late
                                </Chip>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>08:30 AM</TableCell>
                            <TableCell className='whitespace-nowrap'>15:45 PM</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className='mt-2'>
                <Pagination size='sm' showControls initialPage={1} total={10} />
            </div>
        </div>
    )
}
