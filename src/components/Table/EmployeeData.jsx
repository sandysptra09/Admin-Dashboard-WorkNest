import React from 'react'
import scrollbar_custom from '../../module/gblobal.module.scss'

// import from nextui
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Chip, Avatar, Pagination } from '@nextui-org/react'

// import from other components
import ViewEmployeeModal from '../Modal/ViewEmployeeModal'
import EditEmployeeModal from '../Modal/EditEmployeeModal'
import DeleteEmployeeModal from '../Modal/DeleteEmployeeModal'

export default function EmployeeData() {
    return (
        <div className='mt-1 flex flex-col gap-4'>
            <span className="text-default-400 text-sm">Total 70 employees</span>
            <div className={`w-[860px] overflow-x-scroll ${scrollbar_custom.customscrollbar}`}>
                <Table fullWidth removeWrapper aria-label="Example static collection table" className=''>
                    <TableHeader className='w-full'>
                        <TableColumn>ID</TableColumn>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>ROLE</TableColumn>
                        <TableColumn>DEPARTMEN</TableColumn>
                        <TableColumn>STATUS</TableColumn>
                        <TableColumn>EMAIL</TableColumn>
                        <TableColumn>PHONE</TableColumn>
                        <TableColumn>ACTIONS</TableColumn>
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
                            <TableCell className='whitespace-nowrap'>CEO</TableCell>
                            <TableCell className='whitespace-nowrap'>Qualty Assurance</TableCell>
                            <TableCell>
                                <Chip size='sm' color="success" variant="flat">
                                    Active
                                </Chip>
                            </TableCell>
                            <TableCell>johndoe@employee.nest</TableCell>
                            <TableCell>+6281141321889</TableCell>
                            <TableCell>
                                <div className="relative flex items-center">
                                    <ViewEmployeeModal />
                                    <EditEmployeeModal />
                                    <DeleteEmployeeModal />
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
                            <TableCell className='whitespace-nowrap'>Technical Lead</TableCell>
                            <TableCell className='whitespace-nowrap'>Qualty Assurance</TableCell>
                            <TableCell>
                                <Chip size='sm' color="default" variant="flat">
                                    Inactive
                                </Chip>
                            </TableCell>
                            <TableCell>johndoe@employee.nest</TableCell>
                            <TableCell>+6281141321889</TableCell>
                            <TableCell>
                                <div className="relative flex items-center gap-2">
                                    <ViewEmployeeModal />
                                    <EditEmployeeModal />
                                    <DeleteEmployeeModal />
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div>
                <Pagination size='sm' showControls initialPage={1} total={10} />
            </div>
        </div>
    )
}
