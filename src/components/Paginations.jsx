import React from "react";

const Paginations = () => {
  return (
    <div className="flex  justify-between items-center p-4 text-gray-500 gap-4">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center gap-2"
      >
        <span className="sm:hidden">←</span>
        <span className="hidden sm:inline">Prev</span>
      </button>
      <div className="flex items-center gap-1 sm:gap-2 text-sm  justify-center">
        <button className="px-2 py-1 rounded-sm bg-lamaSky text-white">
          1
        </button>
        <button className="px-2 py-1 rounded-sm hover:bg-gray-100">2</button>
        <button className="px-2 py-1 rounded-sm hover:bg-gray-100">3</button>
        <button className="px-2 py-1 rounded-sm hover:bg-gray-100 hidden sm:block">
          4
        </button>
        <span className="px-1 hidden sm:inline">...</span>
        <button className="px-2 py-1 rounded-sm hover:bg-gray-100">10</button>
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center gap-2">
        <span className="hidden sm:inline">Next</span>
        <span className="sm:hidden">→</span>
      </button>
    </div>
  );
};

export default Paginations;
