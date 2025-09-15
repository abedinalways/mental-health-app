import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <nav className="border-1 border-gray-200 flex justify-between px-5 py-2 md:justify-around items-center md:mx-[383px] my-3  md:py-1.5 md:gap-20 text-black bg-[#FAFAFAD6] rounded-sm">
      <h1 className="font-extrabold text-lg md:ml-4">ZUNO</h1>
      <ul className="md:flex hidden md:gap-8 md:ml-20">
        <Link href="#">
          <li>Home</li>
        </Link>
        <Link href="#">
          <li>Pages</li>
        </Link>
        <Link href="#">
          <li>Template</li>
        </Link>
      </ul>
      <button className="bg-[#D2F0A3] md:w-[142px] md:h-[42px] md:p-[10px 18px] rounded-md md:ml-20 hidden md:block">
        Request Demo
      </button>
      <div className="md:hidden">
        <Menu className="h-6 w-6" />
      </div>
    </nav>
  );
};

export default Header; 