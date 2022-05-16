import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
function App() {

const [usersList, setUserList] = useState([])
const onAddUserHandler=(uName, uAge)=>{
  setUserList( (prevState)=>{
    return [...prevState, {name:uName, age: uAge, id: Math.random().toString()}]
  })

}

  return (
    <div>
    <AddUser onAddUser={onAddUserHandler}/>
    <UsersList users={usersList}/>
    </div>
  );
}

export default App;
