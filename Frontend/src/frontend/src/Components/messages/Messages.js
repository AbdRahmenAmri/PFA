import React, { useRef } from 'react'
import { useParams } from 'react-router-dom';
import { GetConversationDetails, GetConversations, GetMessages } from '../../services/messagesService'
import './Messages.css'

const Messages = (props) => {
  const all = useRef();
  const unread = useRef();
  const unreply = useRef();
  const viewed = useRef();
  const messageInput = useRef();
  const { idConv } = useParams();

  const msg_nav = [all, unread, unreply, viewed];
  const msgNavClick = (e) => {
    msg_nav.forEach(nav => {
      if (nav.current === e.target || nav.current.classList.contains('active')) {
        nav.current.classList.toggle('active')
      }
    });
  }
  return (
    <section className='messages-root'>
      <div className="messages-users">
        <header className="messages-header">
          <div className="messages-head">
            <h4>Chats</h4>
            <i className="fa-solid fa-magnifying-glass" id='messages-search'></i>
            <i className="fa-solid fa-circle-plus" id='messages-plus'></i>
          </div>
          <div className="messages-box">
            <span className='active' id="messages-all" ref={all} onClick={msgNavClick}>all</span>
            <span id="messages-unread" ref={unread} onClick={msgNavClick}>unread</span>
            <span id="messages-unreply" ref={unreply} onClick={msgNavClick}>unreply</span>
            <span id="messages-viwed" ref={viewed} onClick={msgNavClick}>viewed</span>
          </div>
        </header>
        <div className="messages-messages">
          <GetMessages />
        </div>
      </div>

      <div className="messages-main">
        <GetConversations idConv={idConv} messageInput={messageInput} />
      </div>

      <div className="messages-details">
        {
          idConv?
          <GetConversationDetails idConv={idConv}/>
          :''
        }
      </div>
    </section>
  )
}

export default Messages
