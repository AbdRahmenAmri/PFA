import React from 'react'
import "./notification.css"
import user_pic from "./photo-1633332755192-727a05c4013d.jpeg"
function Notification() {
  return (
    <div className='notification_container'>
    <img src={user_pic} alt="user_image"/>
    <div className="notif_info">
        <small><span>Mohamed Haj Ali</span>: followed you</small>
        <small className='date'>8 hours ago</small>
    </div>
</div>
  )
}

export default Notification