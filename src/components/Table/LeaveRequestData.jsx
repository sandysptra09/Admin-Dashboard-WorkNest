import React from 'react'
import scrollbar_custom from '../../module/gblobal.module.scss'

// import from nextui
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Chip, Avatar, Pagination } from '@nextui-org/react'

// import react-icons
import { GoInfo } from "react-icons/go";
import ViewRequestModal from '../Modal/ViewRequestModal';

export default function LeaveRequestData() {
    return (
        <div className='mt-3'>
            <div className={`w-[860px] overflow-x-scroll ${scrollbar_custom.customscrollbar}`}>
                <Table fullWidth removeWrapper aria-label="Example static collection table" className=''>
                    <TableHeader className='w-full'>
                        <TableColumn>ID</TableColumn>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>TYPE</TableColumn>
                        <TableColumn>START DATE</TableColumn>
                        <TableColumn>END DATE</TableColumn>
                        <TableColumn>MANAGE</TableColumn>
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
                            <TableCell className='whitespace-nowrap'>
                                <Chip size='sm' color="primary" variant="flat">
                                    Annual
                                </Chip>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>
                                04/04/2024
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>04/04/2024</TableCell>
                            <TableCell className='whitespace-nowrap'>
                                <div className='relative flex items-center'>
                                    <ViewRequestModal />
                                </div>
                            </TableCell>

                        </TableRow>
                        <TableRow key="2">
                            <TableCell>EMP002</TableCell>
                            <TableCell className='whitespace-nowrap'>
                                <div className='flex items-center gap-2'>
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <span>John Doe</span>
                                </div>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>
                                <Chip size='sm' className='text-[#6ad2ff] bg-[#6ad2ff]/20' variant="flat">
                                    Vacation
                                </Chip>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>
                                04/04/2024
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>04/04/2024</TableCell>
                            <TableCell className='whitespace-nowrap'>
                                <div className='relative flex items-center'>
                                    <ViewRequestModal />
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow key="3">
                            <TableCell>EMP002</TableCell>
                            <TableCell className='whitespace-nowrap'>
                                <div className='flex items-center gap-2'>
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <span>John Doe</span>
                                </div>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>
                                <Chip size='sm' color="warning" variant="flat">
                                    Sick
                                </Chip>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>
                                04/04/2024
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>04/04/2024</TableCell>
                            <TableCell className='whitespace-nowrap'>
                                <div className='relative flex items-center'>
                                    <ViewRequestModal />
                                </div>
                            </TableCell>
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
