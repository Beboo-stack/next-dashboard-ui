import Image from "next/image";

const Announcement = () => {
  return (
    <div className="p-4 bg-white rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="my-4">Announcement</h2>
        <span className="text-sm text-gray-500 cursor-pointer">See all</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaPurpleLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
            reprehenderit! Tenetur,
          </p>
        </div>
        <div className="bg-lamaSkyLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
            reprehenderit! Tenetur,
          </p>
        </div>
        <div className="bg-lamaYellowLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
            reprehenderit! Tenetur,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
