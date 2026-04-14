import React from "react";

const Loading = () => {
  return (
    <div>
      {/* Banner skeleton */}
      <section className="bg-white border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col items-center gap-4 animate-pulse">
          <div className="h-5 w-40 bg-green-100 rounded-full"></div>
          <div className="h-10 w-80 bg-green-100 rounded-xl"></div>
          <div className="h-4 w-64 bg-green-50 rounded-lg"></div>
          <div className="h-10 w-36 bg-green-200 rounded-full mt-2"></div>
        </div>
      </section>

      {/* Summary cards skeleton */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-green-100 p-6">
              <div className="h-8 w-12 bg-green-100 rounded-lg mx-auto mb-2"></div>
              <div className="h-3 w-20 bg-green-50 rounded mx-auto"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Friends grid skeleton */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="h-6 w-32 bg-green-100 rounded-lg mb-6 animate-pulse"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-green-100 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-green-100 rounded w-3/4"></div>
                  <div className="h-2 bg-green-50 rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                <div className="h-4 w-12 bg-green-50 rounded-full"></div>
                <div className="h-4 w-10 bg-green-50 rounded-full"></div>
              </div>
              <div className="flex justify-end">
                <div className="h-5 w-16 bg-green-100 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
