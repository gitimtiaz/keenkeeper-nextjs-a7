import React from "react";

const Loading = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">

      {/* Heading skeleton */}
      <div className="h-8 w-56 bg-green-100 rounded-lg mb-2"></div>
      <div className="h-4 w-72 bg-green-50 rounded mb-10"></div>

      {/* Stat cards skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl border border-green-100 px-6 py-5 flex flex-col items-center gap-2">
            <div className="h-8 w-10 bg-green-100 rounded-lg"></div>
            <div className="h-3 w-20 bg-green-50 rounded"></div>
          </div>
        ))}
      </div>

      {/* Chart card skeleton */}
      <div className="bg-white rounded-3xl border border-green-100 shadow-sm p-8">
        <div className="h-5 w-40 bg-green-100 rounded mb-2"></div>
        <div className="h-3 w-64 bg-green-50 rounded mb-8"></div>
        <div className="flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-green-50 border-[20px] border-green-100"></div>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-100"></div>
              <div className="h-3 w-10 bg-green-50 rounded"></div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Loading;
