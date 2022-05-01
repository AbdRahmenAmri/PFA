import React from 'react'
import userPhoto from "../photo-1633332755192-727a05c4013d.jpeg"
import "./user.css"
function User({username , articles , positiveRates}) {
  return (
    <div className='user_container'>
    <img src={userPhoto} alt="user_img" />
    <div className='user_infos'>
        <small>Mohamed Haj Ali</small>
        <small>Frontend Developer</small>
    </div>
</div>
  )
}

export default User