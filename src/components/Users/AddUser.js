import React,{useState, useRef} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from '../UI/Card.module.css' 
import UsersList from './UsersList';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';





 const AddUser=(props)=> {

const inputUserName=useRef();
const inputUserAge=useRef();
const [error, setError]=useState()


const addHandler=(event)=>{
 event.preventDefault()
 console.log(inputUserName)
 const enteredName=inputUserName.current.value;
 const enteredAge=inputUserAge.current.value;
 if(enteredName.trim().length===0 || enteredAge.trim().length===0){
  setError({
    title: 'Invalid Input',
    message: 'Please enter a valid name and age'
  });
  return;
 }
 if(+enteredAge<0){
setError({
    title: 'Invalid Age',
    message: 'Please enter a valid Age(>0)'
  })
   return;
 }
 props.onAddUser(enteredName,enteredAge)
 inputUserName.current.value=''
 inputUserAge.current.value=''

}

const changeHandler=()=>{
  setError(null);
}
  return (

    <Wrapper>
   { error && <ErrorModal  title={error.title} message={error.message} onConfirm={changeHandler}/>}
    <Card className={`${classes.input}`}>
    <form onSubmit={addHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" 
      type="text"
      ref={inputUserName} />

      <label htmlFor="age">Age(Years)</label>
      <input id="age" 
       type="number"
       ref={inputUserAge}/>
     <Button type='submit'>Add User</Button>
      </form>
      </Card>
   
      </Wrapper>
  )
}
export default AddUser;