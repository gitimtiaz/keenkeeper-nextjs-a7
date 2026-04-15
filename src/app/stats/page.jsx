"use client";

import React from "react";
import { useTimeline } from "@/context/TimelineContext";
import StatsCard from "@/components/StatsCard";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = {
  call:  "#244D3F",
  text:  "#4ade80",
  video: "#a855f7",
};

const LABELS = {
  call:  "Call",
  text:  "Text",
  video: "Video",
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];
    return (
      <div className="bg-white border border-green-100 rounded-xl shadow-md px-4 py-2 text-sm">
        <p className="font-semibold text-[#244D3F] capitalize">{name}</p>
        <p className="text-gray-500">{value} interaction{value !== 1 ? "s" : ""}</p>
      </div>
    );
  }
  return null;
};

const StatsPage = () => {
  const { entries } = useTimeline();

  const counts = { call: 0, text: 0, video: 0 };
  entries.forEach((e) => {
    if (counts[e.type] !== undefined) counts[e.type]++;
  });

  const total = entries.length;

  const pieData = Object.entries(counts)
    .filter(([, v]) => v > 0)
    .map(([type, value]) => ({
      name: LABELS[type],
      value,
      type,
    }));

  const hasData = pieData.length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-[#244D3F] mb-2">
        Friendship Analytics
      </h1>
      <p className="text-gray-400 text-sm mb-10">
        A breakdown of how you've been staying in touch.
      </p>

      {/* Summary stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <StatsCard value={total}          label="Total Interactions" color="#244D3F" />
        <StatsCard value={counts.call}    label="Calls"              color="#244D3F" />
        <StatsCard value={counts.text}    label="Texts"              color="#4ade80" />
        <StatsCard value={counts.video}   label="Videos"             color="#a855f7" />
      </div>

      {/* Pie chart card */}
      <div className="bg-white rounded-3xl border border-green-100 shadow-sm p-8">
        <h2 className="text-base font-bold text-[#244D3F] mb-1">
          By Interaction Type
        </h2>
        <p className="text-xs text-gray-400 mb-8">
          Distribution of calls, texts, and video check-ins
        </p>

        {hasData ? (
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={130}
                paddingAngle={4}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[entry.type]}
                    stroke="transparent"
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                iconType="circle"
                iconSize={10}
                formatter={(value) => (
                  <span className="text-sm text-gray-600 font-medium">
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <span className="text-5xl mb-4">📊</span>
            <p className="text-lg font-semibold text-[#244D3F] mb-1">
              No data yet
            </p>
            <p className="text-sm text-gray-400 max-w-xs">
              Log a Call, Text, or Video from a friend's profile to see your
              analytics here.
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default StatsPage;
