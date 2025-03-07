// import './App.module.css';
import Profile from '../Profile/Profile';
import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import './App.css';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import Task1 from '../Task/Task1';
import Task2 from '../Task/Task2';
import Task3 from '../Task/Task3';
const App = () => {
  return (
    <>
      <Task1 />
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <Task2 />
      <FriendList friends={friends} />
      <Task3 />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
