"use client";

import React, { useState } from "react";
import { useTimeline } from "@/context/TimelineContext";
import TimelineItem from "@/components/TimelineItem";

const FILTERS = ["All", "Call", "Text", "Video"];

const TimelinePage = () => {
  const { entries } = useTimeline();
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? entries
      : entries.filter((e) => e.type === active.toLowerCase());

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-[#244D3F] mb-8">Timeline</h1>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-5 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
              active === f
                ? "bg-[#244D3F] text-white border-[#244D3F] shadow"
                : "bg-white text-gray-500 border-green-200 hover:border-[#244D3F] hover:text-[#244D3F]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Entries */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="text-5xl mb-4">🕊️</span>
          <p className="text-lg font-semibold text-[#244D3F] mb-1">No entries yet</p>
          <p className="text-sm text-gray-400 max-w-xs">
            Head to a friend's profile and log a Call, Text, or Video to see it appear here.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} />
          ))}
        </div>
      )}

    </div>
  );
};

export default TimelinePage;
