//task1]

const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => total + user.balance, 0);
};
//task2
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
};
//task3
const getNamesSortedByFriendsCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};
//task4
const getSortedUniqueSkills = (users) => {
  return users
    .flatMap((user) => user.skills)
    .filter((skill, index, arr) => arr.indexOf(skill) === index)
    .sort((a, b) => a.localeCompare(b));
};
