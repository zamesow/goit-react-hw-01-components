import React from 'react';
import user from './js/user.json';
import statisticalData from './js/statistical-data.json';
import Profile from './components/Profile';
import StatisticsList from './components/StatisticsList';
import friends from './js/friends.json';
import FriendList from './components/FriendList';

export default function App() {
    return (
        <div>
            <Profile
                name={user.name}
                location={user.location}
                tag={user.tag}
                avatar={user.avatar}
                stats={user.stats}
            />

            <StatisticsList title="Upload stats" stats={statisticalData} />
            {/* <StatisticsList stats={statisticalData} />; */}

            <FriendList friends={friends} />
        </div>
    );
}