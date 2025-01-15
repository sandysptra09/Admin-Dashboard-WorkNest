import React from 'react'

// import from nextui
import { Button } from '@nextui-org/react';

import { ExportDataEmployee } from './IconsButton';

// import from other components
import InputLeaveDate from '../Input/InputLeaveDate';

export default function DataActionButtonLeave() {
    return (
        <div>
            <div className='flex justify-between gap-3 '>
                <InputLeaveDate />

                <Button size='sm' startContent={<ExportDataEmployee />} className='bg-slate-100'>
                    Export
                </Button>
            </div>
        </div>
    )
}
