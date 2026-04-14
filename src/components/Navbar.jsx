"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaHome, FaClock, FaChartBar } from "react-icons/fa";


const navLinks = [
  { label: "Home",      href: "/",          icon: FaHome },
  { label: "Timeline",  href: "/timeline",  icon: FaClock },
  { label: "Stats",     href: "/stats",     icon: FaChartBar },
];


const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-green-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#244D3F] tracking-tight">
            KeenKeeper
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center gap-1">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link 
                key={href}
                href={href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#244D3F] text-white shadow-md"
                      : "text-gray-600 hover:text-[#244D3F] hover:bg-green-50"
                  }`}
                >
                  <Icon className={"text-base " + (isActive ? "text-white" : "text-slate-400")} />
                  {label}
                </Link>
            );
          })}
        </ul>

        {/* Mobile Nav */}
        <div className="flex sm:hidden items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#244D3F] text-white"
                    : "text-gray-600 hover:bg-green-50"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
