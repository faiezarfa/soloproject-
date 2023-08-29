import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Createone.css'
import axios from 'axios'
function Createone(){
  const navigate=useNavigate("")
  const [title,settitle]=useState("")
  const [author,setauthor]=useState("")
  const [pages,setpages]=useState(0)
  
  const creatone=(e)=>{
    e.preventDefault()
    const newbook={
      title:title,
      author:author,
      pages:pages
    }
    axios.post(`http://localhost:5000/api/allbooks/`,newbook)
    .then(()=>{
      console.log('createdbook')
      navigate("/allbooks")
      settitle("")
      setauthor("")
      setpages(0)
    }).catch((err)=>{
      console.log('not created book',err)
    })


  }
  return(
    <>
    <h1 style={{textAlign:"center", marginBottom:"40px"}}>Create Other Book</h1>
  <div className='formdiv'>
  <form className='form' onSubmit={creatone}>
      <div>
        <label>Title:</label>
        <input type="text" onChange={(e)=>settitle(e.target.value)} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" onChange={(e)=>setauthor(e.target.value)} />
      </div>
      <div>
        <label>Pages:</label>
        <input type="number" onChange={(e)=>setpages(e.target.value)} />
      </div>
      <button className='createbtn' type="submit">add one</button>

    </form>
  </div>
    </>
  )
}
export default Createone;