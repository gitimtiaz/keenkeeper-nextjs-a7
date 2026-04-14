import SummaryCard from "./SummaryCard";
import { getFriendsStats } from "@/lib/getFriends";

const SummaryCards = () => {
  const { total, onTrack, needAttention } = getFriendsStats();

  const stats = [
    { value: total,         label: "Total Friends",           accent: "#244D3F" },
    { value: onTrack,       label: "On Track",                accent: "#166534" },
    { value: needAttention, label: "Need Attention",          accent: "#f59e0b" },
    { value: 12,            label: "Interactions This Month", accent: "#244D3F" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <SummaryCard
            key={i}
            value={stat.value}
            label={stat.label}
            accent={stat.accent}
          />
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;
