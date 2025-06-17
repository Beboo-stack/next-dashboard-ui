import React from "react";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Paginations from "@/components/Paginations";

const page = () => {
  return (
    <div className="flex-1 p-4 bg-white rounded-md m-4 mt-0">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex w-full md:w-auto flex-col md:flex-row items-center gap-4 ">
          <TableSearch />
          <div className="flex self-end gap-4">
            <button className="flex justify-center items-center w-8 h-8 rounded-full cursor-pointer bg-lamaYellow">
              <Image src="/filter.png" alt="add" width={14} height={14} />
            </button>
            <button className="flex justify-center items-center w-8 h-8 rounded-full cursor-pointer bg-lamaYellow">
              <Image src="/sort.png" alt="add" width={14} height={14} />
            </button>
            <button className="flex justify-center items-center w-8 h-8 rounded-full cursor-pointer bg-lamaYellow">
              <Image src="/plus.png" alt="add" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className=""></div>

      {/* PAGINATION */}
      <div className="">
        <Paginations />
      </div>
    </div>
  );
};

export default page;
