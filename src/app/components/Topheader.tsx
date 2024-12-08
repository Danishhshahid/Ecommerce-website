import Link from 'next/link';
import React from 'react';
import { SiJordan } from "react-icons/si";

const TopHeader = () => {
  return (
    <div className="w-full flex h-[50px] bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full h-full flex justify-between items-center">
        {/* Left Icon */}
        <div>
          <SiJordan className="text-lg sm:text-xl" />
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-2 sm:gap-4 items-center text-sm sm:text-base">
            <li>
              <Link href="/" className="hover:underline">
                Find a Store |
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Help |
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:underline">
                Join Us |
              </Link>
            </li>
            <li>
              <Link href="/signin" className="hover:underline">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
