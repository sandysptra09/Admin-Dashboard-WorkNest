import React from 'react'

// import from nextui
import { Button } from '@nextui-org/react'

// import icon
import { AddEmployee } from '../Button/IconsButton'

export default function AddEmployeeModal() {
    return (
        <Button color="primary" size='sm' startContent={<AddEmployee />}>
            Add Employee
        </Button>
    )
}
