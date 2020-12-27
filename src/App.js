import React from 'react';
import user from './js/user.json';
import statisticalData from './js/statistical-data.json';
import Profile from './components/Profile/Profile';
import StatisticsList from './components/StatisticsList/StatisticsList';
import friends from './js/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './js/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        location={user.location}
        tag={user.tag}
        avatar={user.avatar}
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />

      <StatisticsList title="Upload stats" stats={statisticalData} />
      {/* <StatisticsList stats={statisticalData} />; */}

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
