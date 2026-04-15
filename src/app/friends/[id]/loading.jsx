import React from "react";

const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left side skeleton */}
        <div className="bg-white rounded-3xl border border-green-100 shadow-sm p-8 flex flex-col gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-green-100 shrink-0"></div>
            <div className="space-y-3">
              <div className="h-5 w-40 bg-green-100 rounded-lg"></div>
              <div className="h-4 w-20 bg-green-50 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full bg-green-50 rounded"></div>
            <div className="h-3 w-4/5 bg-green-50 rounded"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-14 bg-green-100 rounded-full"></div>
            <div className="h-6 w-14 bg-green-100 rounded-full"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-48 bg-green-50 rounded"></div>
            <div className="h-4 w-32 bg-green-50 rounded"></div>
          </div>
          <div className="flex gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-green-100"></div>
            ))}
          </div>
          <div className="flex gap-3 pt-2 border-t border-green-50">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-8 w-20 bg-green-100 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Right side skeleton */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-green-50 rounded-2xl px-5 py-4 text-center">
                <div className="h-7 w-10 bg-green-200 rounded mx-auto mb-2"></div>
                <div className="h-3 w-16 bg-green-100 rounded mx-auto"></div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-3xl border border-green-100 p-6">
            <div className="h-4 w-32 bg-green-100 rounded mb-4"></div>
            <div className="h-4 w-48 bg-green-50 rounded"></div>
          </div>
          <div className="bg-white rounded-3xl border border-green-100 p-6">
            <div className="h-4 w-28 bg-green-100 rounded mb-5"></div>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-20 bg-green-50 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Loading;
