import React from 'react';
import { Link } from 'react-router-dom';

// import from nextui
import { Button } from '@nextui-org/react';

// Import icons
import { ImportDataEmployee, ExportDataEmployee, AddEmployee } from './IconsButton';

export default function DataActionButton() {
    return (
        <div className="">
            <div className="flex justify-end gap-3 ">
                <Button size='sm' startContent={<ImportDataEmployee />} className='bg-slate-100'>
                    Import
                </Button>
                <Button size='sm' startContent={<ExportDataEmployee />} className='bg-slate-100'>
                    Export
                </Button>
                <Button color="primary" size='sm' startContent={<AddEmployee />}>
                    <Link to='/employee-management/add-employee'>Add Employee</Link>
                </Button>
            </div>
        </div>
    );
}
