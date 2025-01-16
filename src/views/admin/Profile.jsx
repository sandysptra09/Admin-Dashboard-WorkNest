import React from 'react'

// import react-icons
import { BsPersonCircle } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";

// import from nextui
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function Profile() {
    return (
        <div className='pt-2 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2'>
            <div className="flex w-full flex-col ">
                <Tabs aria-label="Options" className='' color='primary'>
                    <Tab key="profile" title={
                        <div className="flex items-center space-x-2">
                            <BsPersonCircle fontSize={18} />
                            <span>Profile</span>
                        </div>
                    }>
                        <Card className='shadow-lg rounded-[20px] text-sm p-4'>
                            <CardBody >
                                Profile tabs
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="settings" title={
                        <div className="flex items-center space-x-2">
                            <IoMdSettings fontSize={18} />
                            <span>Settings</span>
                        </div>
                    }>
                        <Card className='shadow-lg rounded-[20px] text-sm p-4'>
                            <CardBody>
                                Settings tabs
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
