import React from 'react'
import './Onebook.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
function Onebook(){
  const [onebook,setonebook]=useState({})
  const {id}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/allbooks/${id}`)
    .then((response)=>{
      console.log(response.data.onebook)
      setonebook(response.data.onebook)
    }).catch(()=>{
      console.log(' no one book founded ')
    })

  },[])
  return(
    <div className='bookdetailcontainer'>
      <h2>Book Details</h2>
      <span>This book title is :{onebook.title}</span>
      <span>the Author of this book is :{onebook.author}</span>
      <span>thne number of pages is :{onebook.pages}</span>
      <Link  to={("/update/" + onebook._id)}><button className='updatebtn' style={{cursor:"pointer"}}>Update</button></Link>
    </div>
  )
}
export default Onebook;