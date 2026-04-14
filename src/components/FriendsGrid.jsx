import React from "react";
import FriendCard from "./FriendCard";
import { getFriends } from "@/lib/getFriends";

const FriendsGrid = () => {
  const friends = getFriends();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
      <h2 className="text-xl font-bold text-[#244D3F] mb-6">Your Friends</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsGrid;
