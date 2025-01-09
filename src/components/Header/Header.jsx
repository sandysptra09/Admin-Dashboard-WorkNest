import React from "react";

// import from nextui
import { Badge } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

// import icon from react-icons
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Header() {
    return (
        <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-4 backdrop-blur-xl">
            <div className="ml-4">
                <div className="h-6 w-[224px] pt-1">
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
                        Main Dashboard
                    </a>
                </div>
                <p className="shrink text-[30px] capitalize text-[#1b254b] mt-2">
                    <a
                        className="font-bold capitalize hover:text-navy-700"
                        href="/horizon-tailwind-react/admin/default"
                    >
                        Main Dashboard
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
                    <div className="flex">
                        <p className="cursor-pointer">
                            <Badge className="h-3 w-3" color="danger" content="1">
                                <IoMdNotificationsOutline fontSize={25} />
                            </Badge>
                        </p>
                    </div>
                </div>
                <div className="relative flex">
                    <div className="flex">
                        <Avatar src="https://i.pinimg.com/736x/a4/8f/7b/a48f7b8c75dcf005195f078491eb5045.jpg" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
