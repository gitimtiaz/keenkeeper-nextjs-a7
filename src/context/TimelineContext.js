"use client";

import { createContext, useContext, useState, useEffect } from "react";

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("kinkeeper-timeline");
    if (stored) {
      try {
        setEntries(JSON.parse(stored));
      } catch {
        setEntries([]);
      }
    }
  }, []);

  // Persist to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem("kinkeeper-timeline", JSON.stringify(entries));
  }, [entries]);

  const addEntry = ({ friendName, type }) => {
    const icons = { call: "📞", text: "💬", video: "📹" };
    const newEntry = {
      id: Date.now(),
      friendName,
      type,
      icon: icons[type] || "🤝",
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friendName}`,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      timestamp: Date.now(),
    };
    setEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  const ctx = useContext(TimelineContext);
  if (!ctx) throw new Error("useTimeline must be used within TimelineProvider");
  return ctx;
}
