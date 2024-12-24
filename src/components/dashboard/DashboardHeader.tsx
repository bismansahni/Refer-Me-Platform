//
//
//
// "use client";
// import { useRouter } from "next/navigation";
// import ProfileDropdown from "@/components/dashboard/ProfileDropdown";
//  // Import the ProfileDropdown component
//
// const DashboardHeader = () => {
//     const router = useRouter();
//
//     return (
//         <nav className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300/80 fixed w-full z-20 top-0 dark:bg-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
//             <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
//                 <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//                     <span className="text-2xl font-semibold text-gray-900 dark:text-white">Refer Me</span>
//                 </a>
//                 <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//                     {/* Use the ProfileDropdown component */}
//                     <ProfileDropdown />
//                     <button
//                         data-collapse-toggle="navbar-sticky"
//                         type="button"
//                         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//                         aria-controls="navbar-sticky"
//                         aria-expanded="false"
//                     >
//                         <span className="sr-only">Open main menu</span>
//                         <svg
//                             className="w-5 h-5"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 17 14"
//                         >
//                             <path
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M1 1h15M1 7h15M1 13h15"
//                             />
//                         </svg>
//                     </button>
//                 </div>
//                 <div
//                     className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//                     id="navbar-sticky"
//                 >
//                     <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent dark:border-gray-700">
//                         <li>
//                             <a
//                                 href="/dashboard/inbox"
//                                 className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                                 aria-current="page"
//                             >
//                                 Inbox Requests
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="/dashboard/sent-requests"
//                                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                             >
//                                 Sent Requests
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };
//
// export default DashboardHeader;


"use client";
import {usePathname, useRouter} from "next/navigation";
import ProfileDropdown from "@/components/dashboard/ProfileDropdown";

const DashboardHeader = () => {
    const router = useRouter();
    // const currentPath = router.pathname;
    const pathname = usePathname();
    console.log("Current path:", pathname);// Get the current path

    return (
        <nav className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300/80 fixed w-full z-20 top-0 dark:bg-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl font-semibold text-gray-900 dark:text-white">Refer Me</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* Use the ProfileDropdown component */}
                    <ProfileDropdown />
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a
                                href="/dashboard/inbox"
                                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                                    pathname === "/dashboard/inbox"
                                        ? "text-blue-700 dark:text-blue-500"
                                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                }`}
                            >
                                Inbox Requests
                            </a>
                        </li>
                        <li>
                            <a
                                href="/dashboard/sent-requests"
                                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                                    pathname === "/dashboard/sent-requests"
                                        ? "text-blue-700 dark:text-blue-500"
                                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                }`}
                            >
                                Sent Requests
                            </a>
                        </li>

                        <li>
                            <a
                                href="/dashboard/ask-referral"
                                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                                    pathname === "/dashboard/ask-referral"
                                        ? "text-blue-700 dark:text-blue-500"
                                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                }`}
                            >
                                Request Referral
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default DashboardHeader;
