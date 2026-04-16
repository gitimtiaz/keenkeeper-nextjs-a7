"use client";

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getFriendById } from "@/lib/getFriends";
import { useTimeline } from "@/context/TimelineContext";
import toast from "react-hot-toast";
import { FaTwitter, FaInstagram, FaFacebookF, FaPhone, FaSms, FaVideo, FaEnvelope } from "react-icons/fa";
import { use } from "react";

const statusStyles = {
  "on-track": { badge: "badge-on-track", label: "On-Track" },
  "almost-due": { badge: "badge-almost-due", label: "Almost Due" },
  overdue: { badge: "badge-overdue", label: "Overdue" },
};

const StatCard = ({ value, label }) => {
  return (
    <div className="bg-white border border-green-200 shadow rounded-lg px-5 py-4 text-center flex flex-col justify-center">
      <p className="text-2xl font-bold text-[#244D3F]">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  );
};

const FriendDetailPage = ({ params }) => {
  const { id } = use(params);
  const friend = getFriendById(id);
  const { addEntry } = useTimeline();

  if (!friend) notFound();

  const style = statusStyles[friend.status] || statusStyles["on-track"];

  const handleCheckIn = (type) => {
    addEntry({ friendName: friend.name, type });
    const icons = { call: "📞", text: "💬", video: "📹" };
    toast.success(`${icons[type]} ${type.charAt(0).toUpperCase() + type.slice(1)} logged with ${friend.name}!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left side */}
        <div className="bg-white rounded-lg border border-green-100 shadow-sm p-2 flex flex-col gap-6">

          {/* Avatar, name and status */}
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-green-100 shrink-0">
              <img 
                src={friend.avatar} 
                alt={friend.name}  
                className="object-cover" 
                />
            </div>

            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold text-[#244D3F]">{friend.name}</h1>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full mt-1 inline-block ${style.badge}`}>
                {style.label}
              </span>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {friend.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-green-50 text-[#244D3F] border border-green-200 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bio Block*/}
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <p className="text-sm text-gray-500 italic px-4">"{friend.bio}"</p>

            {/* Email and contact info*/}
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#244D3F]" size={13} />
                <span>{friend.email}</span>
              </div>
              <div className="flex justify-center items-center gap-2 text-center">
                <span className="text-gray-400 text-xs">Preferred:</span>
                <span className="font-medium text-[#244D3F] capitalize">{friend.preferred}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: <FaTwitter size={13} />, href: friend.social.twitter },
                { icon: <FaInstagram size={13} />, href: friend.social.instagram },
                { icon: <FaFacebookF size={13} />, href: friend.social.facebook },
              ].map(({ icon, href }, i) => (
                <a key={i} href={href}
                  className="w-8 h-8 rounded-full border border-green-200 flex items-center justify-center text-[#244D3F] hover:bg-[#244D3F] hover:text-white transition-all duration-200">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 pt-2 border-t border-green-50">
            {["Archive", "Snooze 2 weeks", "Delete"].map((label) => (
              <button key={label}
                className={`text-xs font-medium px-4 py-2 rounded-lg border transition-all duration-200 ${label === "Delete"
                  ? "border-red-200 text-red-500 hover:bg-red-50"
                  : "border-green-200 text-[#244D3F] hover:bg-green-50"
                  }`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-10">

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4">
            <StatCard value={friend.daysSinceContact} label="Days Since Contact" />
            <StatCard value={friend.goalDays} label="Goal (Days)" />
            <StatCard value={friend.nextDue} label="Next Due" />
          </div>

          {/* Relationship goal card */}
          <div className="bg-white rounded-lg border border-green-100 shadow-sm p-6 lg:py-9">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-[#244D3F] uppercase tracking-wide">
                Relationship Goal
              </h3>
              <button className="text-xs text-gray-400 hover:text-[#244D3F] font-medium transition-colors border border-gray-300 hover:border-[#244D3F] px-3 py-1 rounded-md">
                Edit
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Connect every{" "}
              <span className="font-semibold text-[#244D3F]">{friend.goalDays} days</span>
            </p>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-lg border border-green-100 shadow-sm p-6 lg:py-9">
            <h3 className="text-sm font-bold text-[#244D3F] uppercase tracking-wide mb-5">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { type: "call", icon: <FaPhone size={18} />, label: "Call" },
                { type: "text", icon: <FaSms size={18} />, label: "Text" },
                { type: "video", icon: <FaVideo size={18} />, label: "Video" },
              ].map(({ type, icon, label }) => (
                <button
                  key={type}
                  onClick={() => handleCheckIn(type)}
                  className="flex flex-col items-center gap-2 py-4 rounded-lg border border-green-200 text-[#244D3F] hover:bg-[#244D3F] hover:text-white hover:border-[#244D3F] transition-all duration-200 group"
                >
                  <span className="transition-transform duration-200 group-hover:scale-110">
                    {icon}
                  </span>
                  <span className="text-xs font-semibold">{label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetailPage;
