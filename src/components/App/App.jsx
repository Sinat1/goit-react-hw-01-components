import css from './App.module.css'
import Profile from 'components/Profile/Profile';
import userData from '../../data/user.json';
import Statistics from 'components/Statistics/Statistics';
import statistics from '../../data/statistics.json';
import FriendList from 'components/FriendList/FriendList';
import friendsData from '../../data/friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from '../../data/transactions.json';

export const App = () => {
  return (
    <div className={css.app}>
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
