import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex item-center gap-2 ring-[1.5px] ring-gray-400 p-2 rounded-full text-xs">
      <Image src={"/search.png"} width={20} height={20} alt="" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent border-none outline-none w-[200px] ml-2"
      />
    </div>
  );
};

export default TableSearch;
