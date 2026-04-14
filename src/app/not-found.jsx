import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#F4F7F5]">

            <h1 className="text-7xl font-bold text-green-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>

            <p className="text-gray-500 mb-6 max-w-md">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>

            {/* Button */}
            <Link href="/">
                <button className="btn bg-green-800 text-white hover:bg-[#1b3c31] border-none">Back to Home</button>
            </Link>
        </div>
    );
}
export default NotFound;


