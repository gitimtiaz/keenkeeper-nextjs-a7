import friendsData from "@/data/friends.json";

export const getFriends = () => {
  return friendsData;
};

export const getFriendById = (id) => {
  return friendsData.find((friend) => friend.id === id) || null;
};

export const getFriendsByStatus = (status) => {
  return friendsData.filter((friend) => friend.status === status);
};

export const getFriendsStats = () => {
  const total = friendsData.length;
  const onTrack = friendsData.filter((f) => f.status === "on-track").length;
  const needAttention = friendsData.filter(
    (f) => f.status === "overdue" || f.status === "almost-due"
  ).length;

  return { total, onTrack, needAttention };
};
