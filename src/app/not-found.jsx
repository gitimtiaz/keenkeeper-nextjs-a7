import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#f0fdf4]">

            {/* Loading */}
            <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-green-100 opacity-50 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 rounded-full bg-green-200 opacity-40 blur-3xl pointer-events-none"></div>

            {/* 404 Not Found */}
            <h1 className="text-8xl sm:text-9xl font-black text-[#244D3F] leading-none mb-2 tracking-tighter">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>

            <p className="text-gray-500 mb-6 max-w-md">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>

            {/* Button */}
            <Link href="/">
                <button className="btn bg-[#244D3F] hover:bg-[#1b3c31] text-white border-none px-8 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200">
                    ← Back to Home
                </button>
            </Link>
        </div>
    );
}
export default NotFound;


