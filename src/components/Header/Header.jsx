import React from "react";
import { useLocation } from "react-router-dom";

// import from nextui
import { Badge, Avatar, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

// import icon from react-icons
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Header() {
    // initialize location path
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case "/":
                return "Main Dashboard";
            case "/employee-management":
                return "Employee Management";
            case "/attendance-tracker":
                return "Attendance Tracker";
            case "/leave-request":
                return "Leave Request";
            case "/performance-reports":
                return "Performance Reports";
            case "/profile":
                return "Profile";
            default:
                return "Page Not Found";
        }
    };


    return (
        <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-4 backdrop-blur-xl">
            <div className="ml-4">
                <div className="h-6 w-auto pt-1">
                    <a
                        className="text-sm font-normal text-[#1b254b] hover:underline"
                        href=" "
                    >
                        Pages
                        <span
                            className="mx-1 text-sm text-[#1b254b] hover:text-[#1b254b]"
                        >
                            {" "}
                            /{" "}
                        </span>
                    </a>
                    <a
                        className="text-sm font-normal capitalize text-[#1b254b] hover:underline"
                        href=""
                    >
                        {getTitle()}
                    </a>
                </div>
                <p className="shrink text-[30px] capitalize text-[#1b254b] mt-2">
                    <a
                        className="font-bold capitalize hover:text-navy-700"
                        href="/horizon-tailwind-react/admin/default"
                    >
                        {getTitle()}
                    </a>
                </p>
            </div>
            <div className="relative flex h-[61px] w-full max-w-[355px] items-center justify-between gap-4 rounded-full bg-white px-4 py-2 mr-4 shadow-lg shadow-shadow-500 md:w-[365px] xl:w-[365px]">
                <div className="flex h-full items-center rounded-full bg-slate-100 text-neutral-400 xl:w-[225px]">
                    <p className="pl-3 pr-2 text-xl">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-gray-700"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </p>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="block h-full w-full rounded-full bg-slate-100 text-sm font-medium text-gray-700 outline-none placeholder:text-gray-700 sm:w-fit"
                    />
                </div>
                <div className="relative flex mt-2">
                    <Popover showArrow offset={20} placement="bottom-end">
                        <PopoverTrigger>
                            <div className="flex">
                                <div className="cursor-pointer">
                                    <Badge className="h-3 w-3" color="danger" content="3">
                                        <IoMdNotificationsOutline fontSize={25} />
                                    </Badge>
                                </div>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-4 py-3">
                                <div className="text-sm font-bold mb-2">Notifications</div>
                                <div className="flex flex-col gap-3 text-sm">
                                    <div className="flex items-start gap-2">
                                        <div className="h-2 w-2 rounded-full bg-red-500 mt-1.5"></div>
                                        <div>
                                            <p className="font-medium text-gray-800">New Message</p>
                                            <p className="text-gray-600 text-xs">You have a new message from John Doe</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="h-2 w-2 rounded-full bg-yellow-500 mt-1.5"></div>
                                        <div>
                                            <p className="font-medium text-gray-800">Upcoming Meeting</p>
                                            <p className="text-gray-600 text-xs">Meeting scheduled for 3:00 PM today</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                                        <div>
                                            <p className="font-medium text-gray-800">System Update</p>
                                            <p className="text-gray-600 text-xs">A new system update is available</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-2" />
                                <button className="w-full text-xs font-medium text-blue-600 hover:underline text-center">
                                    View All Notifications
                                </button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="relative flex">
                    <Popover showArrow offset={20} placement="bottom-end">
                        <PopoverTrigger>
                            <div className="flex">
                                <Avatar src="https://i.pinimg.com/736x/a4/8f/7b/a48f7b8c75dcf005195f078491eb5045.jpg" />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                                <div className="text-small font-bold">👋 Hey, Admin Manager</div>
                                <div className="text-tiny">
                                    <hr className="mt-2 mb-2" />
                                    <div className="flex flex-col gap-2">
                                        <a href="/">
                                            Profile Settings
                                        </a>
                                        <a href="/" className="text-red-600">
                                            Log Out
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>

                </div>
            </div>
        </nav>
    );
}
