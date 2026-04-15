import React from "react";

const Loading = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">

      {/* Heading skeleton */}
      <div className="h-8 w-36 bg-green-100 rounded-lg mb-8"></div>

      {/* Filter tabs skeleton */}
      <div className="flex gap-2 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-9 w-16 bg-green-100 rounded-lg"></div>
        ))}
      </div>

      {/* Entry skeletons */}
      <div className="flex flex-col gap-3">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 bg-white border border-green-100 rounded-lg px-5 py-4">
            <div className="w-10 h-10 rounded-full bg-green-100 shrink-0"></div>
            <div className="flex-1 space-y-2">
              <div className="h-3 w-48 bg-green-100 rounded"></div>
              <div className="h-2 w-28 bg-green-50 rounded"></div>
            </div>
            <div className="h-6 w-12 bg-green-100 rounded-full shrink-0"></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Loading;
