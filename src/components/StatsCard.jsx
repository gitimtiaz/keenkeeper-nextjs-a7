import React from "react";

const StatsCard = ({ value, label, color }) => {
  return (
    <div className="bg-white rounded-2xl border border-green-100 shadow-sm px-6 py-5 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-200">
      <span
        className="text-3xl font-bold mb-1"
        style={{ color: color || "#244D3F" }}
      >
        {value}
      </span>
      <span className="text-gray-500 text-sm font-medium">{label}</span>
    </div>
  );
};

export default StatsCard;
