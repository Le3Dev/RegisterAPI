import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function EditUser() {

  let navigate=useNavigate();

  const {id}=useParams();

  const [user,setUser]=useState({
    name:"",
    username:"",
    email:""
  })
  const{name,username,email}=user;
  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`,user);
    navigate("/");
  }
  useEffect(()=>{
    loadUser();
  },[])
  const loadUser = async() =>{
    const result=await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
          <h2 className='text-center m-4'>Edit user</h2>
          <form onSubmit={(e)=> onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>
                Name
              </label>
              <input type={"text"} className='form-control' placeholder='Enter your name' name='name' value={name} onChange={onInputChange}></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='UserName' className='form-label'>
                UserName
              </label>
              <input type={"text"} className='form-control' placeholder='Enter your Username' name='username' value={username} onChange={onInputChange}></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='Email' className='form-label'>
                Email
              </label>
              <input type={"text"} className='form-control' placeholder='Enter your E-mail address' name='email' value={email} onChange={onInputChange}></input>
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
          </form>
          
        </div>
      </div>
    </div>
  )
}
