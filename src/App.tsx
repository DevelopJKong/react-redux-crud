import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/Users';
import { useState, ChangeEvent } from 'react';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.users.value);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  return (
    <div>
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
        />
        <button onClick={() => dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username }))}>
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user: any) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <input
                type="text"
                placeholder="New Username..."
                onChange={(event: ChangeEvent<HTMLInputElement>) => setNewUsername(event.target.value)}
              />
              <button onClick={() => dispatch(updateUsername({ id: user.id, username: newUsername }))}>
                Update Username
              </button>
              <button onClick={() => dispatch(deleteUser({ id: user.id }))}> Delete Username </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
