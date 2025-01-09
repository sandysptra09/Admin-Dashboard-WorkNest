import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';

export default function Admin() {
    return (
        <div className="flex flex-row bg-slate-100 h-screen w-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 h-full">
                <div className="sticky top-0 z-10 mb-4">
                    <Header />
                </div>
                <div className="overflow-y-auto flex-1 p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
