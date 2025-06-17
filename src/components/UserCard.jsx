import Image from "next/image";
import React from "react";

const UserCard = ({ type }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-sm text-green-600 bg-white rounded-full py-1 px-2">2024/25</span>
        <Image src="/more.png" width={20} height={20} alt="" />
      </div>
      <h2 className="text-2xl font-bold my-4">1,234</h2>
      <h2 className="text-sm text-gray-500 font-medium">{type}</h2>
    </div>
  );
};

export default UserCard;
