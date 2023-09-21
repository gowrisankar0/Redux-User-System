import React, { useContext,useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
import "./Home.css"
import { useDispatch } from 'react-redux';
import { addUser } from '../../Slices/UserSlice';


const Home=()=> {
 
const dispatch=useDispatch()

  const [userInfo,setUserInfo]=useState({
    id:"",
    name:"",
    email:"",
    contact:"",
    age:"",
    jobRole:"",
  })
  useEffect(()=>{
    setUserInfo((currInfo)=>{
      return{
        ...currInfo,
        id:uuid(),
      }
    }); 
  },[]);

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setUserInfo((currInfo)=>{
      return{
        ...currInfo,
        [name]:value
      }
    })
   
  

  };


  const add=()=>{
   dispatch((addUser(userInfo)));
    setUserInfo({
      id:uuid(),
      name:"",
      email:"",
      contact:"",
      age:"",
      jobRole:""
     });
   };
   

useEffect(()=>{
  setUserInfo((currInfo)=>{
    return {
      ...currInfo,
      id:uuid(),

    }
  })

},[])




  return (
    <div className='home'>
      <div className='home_container'>
        <div className='home_form_container'>
          <h1 className='home_title'>Add User Information</h1>

           <input type="text" placeholder='enter user id' disabled  value={userInfo.id} onChange={handleChange}/><br/>
           <input type="text" placeholder='enter user name' name="name"  value={userInfo.name} onChange={handleChange}/><br/>
           <input type="email" placeholder='enter email' name="email"  value={userInfo.email} onChange={handleChange}/><br/>
           <input type="number" placeholder='enter user contact no' name="contact"  value={userInfo.contact} onChange={handleChange}/><br/>
           <input type="number" placeholder='enter user age' name="age"  value={userInfo.age} onChange={handleChange}/><br/>
           <input type="text" placeholder='enter jobrole' name="jobRole"  value={userInfo.jobRole} onChange={handleChange}/><br/>

       <button onClick={add}>Add User</button>
        </div>


      </div>

  
    </div>
  )
}

export default Home