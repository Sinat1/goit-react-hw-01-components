import Profile from 'components/Profile/Profile';
import userData from 'user.json';
import Statistics from 'components/Statistics/Statistics';
import statistics from 'statistics.json';
import FriendList from 'components/FriendList/FriendList';
import friendsData from 'friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101',
      }}
    >
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
