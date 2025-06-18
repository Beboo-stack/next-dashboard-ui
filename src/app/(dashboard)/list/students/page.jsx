import React from "react";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Paginations from "@/components/Paginations";
import Table from "@/components/Table";
import Link from "next/link";
import { role, studentsData } from "@/lib/data";

const page = () => {
  const columns = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Student Id",
      accessor: "studentId",
      className: "hidden md:table-cell",
    },
    {
      header: "Grade",
      accessor: "grade",
      className: "hidden md:table-cell",
    },
    {
      header: "Phone",
      accessor: "phone",
      className: "hidden md:table-cell",
    },
    {
      header: "Address",
      accessor: "address",
      className: "hidden md:table-cell",
    },
    {
      header: "Actions",
      accessor: "actions",
    },
  ];

  const renderRow = (data) => (
    <tr
      key={data.id}
      className="py-4 px-2 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          alt=""
          src={data.photo}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{data.name}</h3>
          <p className="text-xs text-gray-500">{data.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell"> {data.studentId} </td>
      <td className="hidden md:table-cell"> {data.grade} </td>
      <td className="hidden md:table-cell"> {data.phone} </td>
      <td className="hidden md:table-cell"> {data.address} </td>
      <td>
        <div className="flex items-center gap-2 ">
          <Link
            href={`/list/teachers/${data.id}`}
            className="h-7 w-7 flex items-center justify-center rounded-full  bg-lamaSky"
          >
            <Image alt="" src={"/view.png"} width={16} height={16} />
          </Link>
          {role === "admin" && (
            <button className="h-7 w-7 flex items-center justify-center rounded-full  bg-lamaPurple">
              <Image alt="" src={"/delete.png"} width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="flex-1 p-4 bg-white rounded-md m-4 mt-0">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
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
      <Table columns={columns} renderRow={renderRow} data={studentsData} />

      {/* PAGINATION */}
      <div className="">
        <Paginations />
      </div>
    </div>
  );
};

export default page;
