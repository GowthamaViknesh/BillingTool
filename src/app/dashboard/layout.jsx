

"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import { MdOutlineStore } from "react-icons/md";
import Link from 'next/link';
import { MdOutlineDashboard } from "react-icons/md";
import Image from 'next/image';
import { RiStockLine } from "react-icons/ri";
import { FaHouseFlag } from "react-icons/fa6";
const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`${isCollapsed ? 'w-16' : 'w-48'} bg-[#3E0E55] text-white transition-all duration-300 flex-shrink-0`}>
        <div className="mb-6 flex justify-between items-center p-4">
          {/* <Image src="/logo.png" alt="logo" width={150} height={100} className={`${isCollapsed ? 'w-10 h-10' : 'w-full h-10'}`} />
           */}
          {/* Collapse/Expand Toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white text-2xl focus:outline-none lg:hidden"
          >
            {isCollapsed ? <FiMenu /> : <FiX />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="">
          {[
            { href: "/dashboard", label: "Dashboard", icon: <MdOutlineDashboard className="mr-2" /> },
            { href: "/dashboard/salestable", label: "Sales", icon: <MdOutlineStore className="mr-2" /> },
          ].map(({ href, label, icon }) => (
            <li
              key={href}
              className={`font-bold flex items-center pl-3 p-3 hover:bg-white hover:text-black ${
                isCollapsed ? 'justify-center' : ''
              } ${pathname === href ? 'bg-white text-black' : ''}`}
            >
              <Link href={href}>
                <p className="flex items-center">
                  {icon}
                  {!isCollapsed && <span className="ml-2">{label}</span>}
                </p>
              </Link>
            </li>
          ))}

          {/* Additional Links */}
          {[
            { href: "/dashboard/invetory", label: "invertory", icon: <FaHouseFlag className="mr-2" /> },
            { href: "/dashboard/stock", label: "stock", icon: <RiStockLine className="mr-2" /> },
           
          ].map(({ href, label, icon }) => (
            <li
              key={href}
              className={`font-bold flex items-center pl-3 p-3 hover:bg-white hover:text-black ${
                isCollapsed ? 'justify-center' : ''
              } ${pathname === href ? 'bg-white text-black' : ''}`}
            >
              <Link href={href}>
                <p className="flex items-center">
                  {icon}
                  {!isCollapsed && <span className="ml-2">{label}</span>}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <div className="navbar bg-base-100 h-14 px-4 flex items-center justify-between shadow">
          <div className="text-black font-poppins text-lg font-semibold">
            {/* Show current section name */}
            {/* {pathname.replace('/dashboard/', '').replace('-', ' ').toUpperCase() || 'DASHBOARD'} */}
          </div>
          

            {/* User Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="User avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                <li>
                  <Link href="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li><Link href="/settings">Settings</Link></li>
                <li><Link href="/logout">Logout</Link></li>
              </ul>
            </div>
          </div>
        

        {/* Main Section */}
        <main className=" bg-white flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;