import React from 'react'
import "./notifications.css"
import Notification from './notifaction/Notification'
import $ from "jquery"
export default function Notifications({notifState}) {

    if(notifState){
        $(".notifications").css("transform","translateY(0)")
    }else{
        $(".notifications").css("transform","translateY(-200%)")
    }

  return (
    <div className="notifications">
        <h1>Notifications</h1>
        <div className="list_notifications">
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
        </div>
  </div>
  )
}
