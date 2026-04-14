"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const statusStyles = {
  "on-track": {
    badge: "badge-on-track",
    border: "card-on-track",
    label: "On-Track",
  },
  "almost-due": {
    badge: "badge-almost-due",
    border: "card-almost-due",
    label: "Almost Due",
  },
  overdue: {
    badge: "badge-overdue",
    border: "card-overdue",
    label: "Overdue",
  },
};

const FriendCard = ({ friend }) => {
  const router = useRouter();
  const style = statusStyles[friend.status] || statusStyles["on-track"];

  const handleClick = () => {
    router.push(`/friends/${friend.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white rounded-2xl border border-green-100 shadow-sm p-4 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${style.border}`}
    >
      {/* Top row: avatar, name, last contact */}
      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-green-50 border border-green-100">
          {/* <Image
            src={friend.avatar}
            alt={friend.name}
            fill
            className="object-cover"
          /> */}
          <img
            src={friend.avatar}
            alt={friend.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#244D3F] truncate">
            {friend.name}
          </p>
          <p className="text-xs text-gray-400">{friend.lastContact}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium bg-green-50 text-[#244D3F] border border-green-200 px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status badge */}
      <div className="flex justify-end">
        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${style.badge}`}>
          {style.label}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;
