import React from "react";

export default function Sidebar() {
    return (
        <div className="flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 translate-x-0">
            <span
                className="absolute top-4 right-4 block cursor-pointer xl:hidden"
                aria-label="Close Sidebar"
            >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </span>
            <div className="mx-[56px] mt-[50px] flex items-center">
                <div className="mt-1 ml-1 h-2.5 text-[26px] font-bold uppercase text-white">
                    Horizon <span className="font-medium">FREE</span>
                </div>
            </div>
            <div class="mt-[58px] mb-7 h-px bg-white/30"></div>
            <ul className="mb-auto pt-1">
                <a href="">
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8">
                            <span class="font-bold text-[#0065FF]">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    class="h-6 w-6"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                                </svg>{" "}
                            </span>
                            <p class="leading-1 flex ms-4 font-semibold text-[#1b254b]">Main Dashboard</p>
                        </li>
                        <div class="absolute top-px h-9 w-1 rounded-lg bg-[#0065FF] end-0"></div>
                    </div>
                </a>
            </ul>
        </div>
    );
}
