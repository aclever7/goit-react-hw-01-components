import React from 'react';
import Profile from './Profile/Profile';
import userData from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import statisticsData from './Statistics/data.json';
import FriendList from './FriendList/FriendsList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      {/* <Statistics stats={statisticsData} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
