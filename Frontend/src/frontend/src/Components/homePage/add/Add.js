import React from 'react'
import { Link } from 'react-router-dom'

function Add({add_name , add_pic}) {
  return (
    <div className='add'>
        <Link className='add_name' to="/course"><small>{add_name}</small></Link>
        <img src={add_pic} alt="add_picture" />
    </div>
  )
}

export default Add