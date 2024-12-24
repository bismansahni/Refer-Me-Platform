"use client";
import { Menu } from "@headlessui/react";
import { useRouter } from "next/navigation";

const ProfileDropdown = () => {
    const router = useRouter();

    const handleLogout = () => {
        console.log("Logged out");
        router.push("/sign-in");
    };

    const handleUpdateProfile = () => {
        router.push("/dashboard/profile");
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
    <Menu.Button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Profile
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    <div className="py-1">
        <Menu.Item>
            {({ active }) => (
        <button
            className={`${
            active ? "bg-gray-100 dark:bg-gray-700" : ""
        } group flex items-center w-full px-4 py-2 text-sm text-gray-900 dark:text-white`}
    onClick={handleUpdateProfile}
        >
        Update Profile
    </button>
)}
    </Menu.Item>
    <Menu.Item>
    {({ active }) => (
        <button
            className={`${
            active ? "bg-gray-100 dark:bg-gray-700" : ""
        } group flex items-center w-full px-4 py-2 text-sm text-gray-900 dark:text-white`}
    onClick={handleLogout}
        >
        Logout
        </button>
)}
    </Menu.Item>
    </div>
    </Menu.Items>
    </Menu>
);
};

export default ProfileDropdown;
