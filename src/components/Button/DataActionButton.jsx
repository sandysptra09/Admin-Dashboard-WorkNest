import React from 'react';
import { Link } from 'react-router-dom';

// import from nextui
import { Button } from '@nextui-org/react';

// Import icons
import { ImportDataEmployee, ExportDataEmployee } from './IconsButton';

// Import modal components
import AddEmployeeModal from '../Modal/AddEmployeeModal';

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
                <AddEmployeeModal />
            </div>
        </div>
    );
}
