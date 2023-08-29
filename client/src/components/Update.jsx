import React from 'react'
import './Update.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Update(){
  const {id}=useParams()
  const navigate=useNavigate("")
  const [title,settitle]=useState("")
  const [author,setauthor]=useState("")
  const [pages,setpages]=useState()
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/allbooks/${id}`)
    .then((res)=>{
      console.log(res.data.onebook)
      const {title,author,pages}=res.data.onebook
      settitle(title)
      setauthor(author)
      setpages(pages)
    }).catch(()=>{
      console.log('not found')
    })

  },[])
  const handleupdate=(e)=>{
    e.preventDefault()
    const upd={
      title:title,
      author:author,
      pages:pages
    }
    axios.put(`http://localhost:5000/api/allbooks/${id}`,upd)
    .then(()=>{
      console.log('updated')
      settitle('')
      setauthor('')
      setpages(0)
      navigate("/allbooks")
    }).then((err)=>{
      console.log("nor updated yet")
    })
  }
  return(
    
    <>
    <h3 style={{textAlign:"center"}}>Update form</h3>
  <div className='updateformcontainer'>
  <form className='updateform' onSubmit={handleupdate}>
      <div>
        <label>title</label>
        <input type="text" onChange={(e)=>settitle(e.target.value)} value={title} />
      </div>

      <div>
        <label>author</label>
        <input type="text" onChange={(e)=>setauthor(e.target.value)} value={author} />
      </div>
      <div>
        <label>pages</label>
        <input type="number" onChange={(e)=>setpages(e.target.value)} />
      </div>
      <button className='upbtn' type="submit">Update</button>
    </form>
  </div>
    </>
  )
}
export default Update;