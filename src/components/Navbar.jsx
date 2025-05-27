import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      {/* Search Bar */}
      <div className="hidden md:flex item-center gap-2 ring-[1.5px] ring-gray-400 p-2 rounded-full text-xs">
        <Image src={"/search.png"} width={20} height={20} alt="" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-none outline-none w-[200px] ml-2"
        />
      </div>
      {/* Icons and Profile */}
      <div className="flex gap-6 items-center justify-end w-full">
        <div className="flex justify-center items-center w-7 h-7 rounded-full cursor-pointer bg-white ">
          <Image src="/message.png" width={20} height={20} alt="" />
        </div>
        <div className="flex justify-center items-center w-7 h-7 rounded-full cursor-pointer bg-white relative">
          <Image src="/announcement.png" width={20} height={20} alt="" />
          <div className="w-5 h-5 text-center text-white -top-3 -right-3 flex justify-center items-center bg-red-500 rounded-full absolute">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">Peter Alber </span>
          <span className="text-sm text-gray-500">Admin</span>
        </div>
        <Image
          src={"/avatar.png"}
          width={36}
          height={36}
          alt=""
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
