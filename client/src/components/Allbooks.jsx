import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Allbooks.css'
import axios from 'axios'
function Allbooks(props){
  const {refreshy ,refresh}=props
  const [books,setbooks]=useState([])
  const handledelete=(id)=>{
    axios.delete(`http://localhost:5000/api/allbooks/${id}`)
    .then(()=>{
      console.log('deleted')
      refreshy()
    }).catch((err)=>{
      console.log('not deleted',err)
    })
  }
  useEffect(()=>{
    axios.get('http://localhost:5000/api/allbooks/')
    .then((res)=>{
      console.log(res.data.allbooks)
      setbooks(res.data.allbooks)
      refreshy()
      
    }).catch(()=>{
      console.log('we dont find this')
    })


  },[refresh])
  return(
    <>
      <h2 className='title' >All Books</h2>
      <h4 className='link'>Click <Link to="/create">here</Link> to add another Book</h4>
    {
     books.map((onebook)=>{
      return(
      <>
      
        <div className='bookscontainer'>
        
        <p> Book author:{onebook.author}</p>
        <p> Book title:{onebook.title}</p>
        <button type="submit" onClick={(e)=>handledelete(onebook._id)} >delete</button>
        <Link to={("/onebook/" + onebook._id) } > More details </Link>
        </div>

      
       </>
      )
     })
    }
    </>
  )
}
export default Allbooks;