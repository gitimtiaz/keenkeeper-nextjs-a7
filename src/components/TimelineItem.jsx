import React from "react";

const typeStyles = {
  call:  { bg: "bg-blue-50",   border: "border-blue-100",   text: "text-blue-600"  },
  text:  { bg: "bg-green-50",  border: "border-green-100",  text: "text-green-600" },
  video: { bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-600"},
};

const TimelineItem = ({ entry }) => {
  const style = typeStyles[entry.type] || typeStyles["text"];

  return (
    <div className="flex items-center gap-4 bg-white border border-green-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200">

      {/* Icon bubble */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border text-lg ${style.bg} ${style.border}`}>
        {entry.icon}
      </div>

      {/* Title + date */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#244D3F] truncate">{entry.title}</p>
        <p className="text-xs text-gray-400 mt-0.5">{entry.date}</p>
      </div>

      {/* Type pill */}
      <span className={`text-[10px] font-semibold px-3 py-1 rounded-full border capitalize shrink-0 ${style.bg} ${style.border} ${style.text}`}>
        {entry.type}
      </span>

    </div>
  );
};

export default TimelineItem;
