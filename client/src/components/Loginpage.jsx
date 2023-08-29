import React from 'react'
import './Loginpage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Loginpage(){
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const navigate=useNavigate("")
  const login=(e)=>{
    e.preventDefault()
    {
      if(email == '' || password == ''){
        return;
      }
    }
    navigate("/allbooks")
    setemail('')
    setpassword('')
  }
  return(
    <>
  <div className='Logincontainer'>
  <form className='Loginform' onSubmit={login}>
      <div>
        <label>email: </label>
        <input type="email"placeholder="ecrire ton adresse email" onChange={(e)=>setemail(e.target.value)} />
      </div>
      <div>
        <label>password: </label>
        <input type="password" placeholder="ecrire ton password" onChange={(e)=>setpassword(e.target.value)} />
      </div>
      <button className='loginbtn' type="submit">Login</button>
    </form>
  </div>
    </>
  )
}
export default Loginpage;