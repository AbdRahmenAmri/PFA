import React, { useCallback, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import $ from 'jquery'

const baseurl = "http://127.0.0.1:5000/"


const CreateConv = () => {
    const gau = baseurl + "fakeusers"
    const [allUser,setAllUser] = useState(null)
    useEffect(()=>{
        axios.get(gau).then(res=>{
            setAllUser(res.data);
            console.log(res.data);
        }).catch(err => console.log(err))
    },[])

    const create = () => {
        alert(5)
    }

    return (
        <div className="startcnv">
            {
                allUser != null ?
                    allUser.map(user => {
                        return (
                            <div className="start-user"  key={user.id}>
                                <img src={user.user_pic} alt={user.name} className="start-pro" />
                                <span className="start-name">{user.name}</span>
                                <span className="start-start" onClick={create}>{`->`}</span>
                            </div>
                        )
                    })
                :''
            }
        </div>
    )

}


const GetMessages = () => {
    const msgsurl = baseurl + "data/msguser.json"

    const [msgs, setMsgs] = useState(null);

    useEffect(() => {
        axios({
            method: 'GET',
            url: msgsurl,
        }).then(res => {
            if (res.status === 200) {
                setMsgs(res.data)
            }
        })
    }, [msgsurl]);

    return (
        <>
            {
                msgs != null ?
                    msgs.map(msgbox => {
                        return (
                            <Link to={`/messages/t/${msgbox.cnv_id}`}>
                                <div className="messages-msgbox" key={`${msgbox.cnv_id}`}>
                                    <img src={`${msgbox.profile_pic}`} alt={`${msgbox.name}`} />
                                    <div className="messages-msgbox-text">
                                        <h1 className="messages-msgbox-name">
                                            {msgbox.name}
                                        </h1>
                                        <div className="messages-msgbox-details">
                                            <p style={(!msgbox.is_read && !msgbox.is_you) ? { fontWeight: 500 } : {}}>
                                                {msgbox.is_you ? <><i className='messages-msgbox-you'>You: </i> {msgbox.last_msg}</> : msgbox.last_msg}
                                            </p>
                                            {msgbox.is_active ? <span className='messages-msgbox-active'></span> : <span className='messages-msgbox-last_seen'>{msgbox.last_seen}</span>}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }) : ""
            }
        </>
    )
}

const GetConversations = ({ idConv, messageInput }) => {
    const cnvurl = baseurl + `data/${idConv}.json`
    const [conversation, setConversation] = useState();
    useEffect(() => {
        axios({
            method: 'GET',
            url: cnvurl,
        }).then(res => {
            setConversation(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [cnvurl]);



    const GetHeadConversation = () => {
        return (
            <>
                {
                    conversation ?
                        <div className="messsages-main-head">
                            <div className="messsages-main-head-details">
                                <img src={`${conversation.head.profile_pic}`} alt={`${conversation.head.name}`} />
                                <h4 className="messsages-main-head-details-name">
                                    {conversation.head.name}
                                </h4>
                                {conversation.head.is_active ? <span className='messsages-main-head-details-active'></span> : <span className='messsages-main-head-details-last_seen'>{conversation.head.last_seen}</span>}
                            </div>
                            <div className="messsages-main-head-calls">
                                <i className="fa-solid fa-phone-flip"></i>
                                <i className="fa-solid fa-video"></i>
                            </div>
                        </div>
                        : ''
                }
            </>
        )
    }

    const GetConversation = () => {
        return (
            <>
                {
                    conversation && conversation.conversations !== [] ?
                        conversation.conversations.map(msg => {
                            return (
                                <div className="messages-main-message" style={msg.is_you_sender ? { backgroundColor: 'var(--secondaryColor)', alignSelf: 'end' } : { backgroundColor: 'rgba(255,255,255,.1)' }}>
                                    <p>{msg.msg}</p>
                                    {
                                        msg.is_images ?
                                            msg.images.map(image => {
                                                return (
                                                    <img src={`${image}`} alt="" />
                                                )
                                            })
                                            : ''
                                    }
                                    {
                                        msg.is_videos ?
                                            msg.videos.map(vid => {
                                                return (
                                                    <video src={`${vid}`} controls />
                                                )
                                            })
                                            : ''
                                    }
                                </div>
                            )
                        })
                        : ''
                }
            </>
        )
    }

    return (
        <>
            <GetHeadConversation />
            <div className="messages-conversation">
                <GetConversation conversation={conversation} setConversation={setConversation} />
            </div>



            {
                conversation ?
                    <div className="messages-inputs">
                        <label htmlFor="file">
                            <i className="fa-solid fa-file">
                                <input type="file" name="" id="file" />
                            </i>
                        </label>
                        <textarea type="text" name="message" placeholder="Write a message" ref={messageInput} ></textarea>
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                    : ''
            }


        </>
    )


}


const GetConversationDetails = ({ idConv }) => {
    const cnvd = baseurl + 'data/' + idConv + 'details.json'
    const [details, setDetails] = useState([]);
    const [detailsString, setDetailsString] = useState(true);
    const [dataName, setDataName] = useState('');



    const imagesT = useRef();
    const videosT = useRef();
    const filesT = useRef();
    const linksT = useRef();
    const types = [imagesT,videosT,filesT,linksT];
    

    useEffect(() => {
        axios({
            method: 'GET',
            url: cnvd
        }).then(res => {
            setDetails(res.data)
            setDataName('images')
        }).catch(err => {
            console.log(err)
        })

    }, [cnvd, detailsString])
    const typesClick = (e)=>{
        types.forEach(el => {
            if(e.target === el.current || el.current.classList.contains('active')) el.current.classList.toggle('active')
        });
        setDataName($('.messages-details-types .active').attr('data-name'));
    }

    const Content = ()=>{

        const [detailsData, setDetailsData] = useState([]);

        useCallback(()=>{
            setDataName(name => $('.messages-details-types .active').attr('data-name'));
            setDetailsData(data => details[dataName])

        },[dataName])

        if(Array.isArray(details[dataName]) && !details[dataName].length){
            return(
                <i className="no-content">No content</i>
            )
        }else{
            if(dataName === 'images'){
                return (details[dataName].map(el =>{
                    return (<img src={`${el}`} alt={`${el}`}/>)
                }))
            }else if(dataName === 'videos'){
                return (details[dataName].map(el =>{
                    return (<video src={`${el}`} controls></video>)
                }))
            }else return ('')
        }

        

    };


  
    return (
        <>
            <h4>Shared Files</h4>
            {
                details !== [] ?
                    <div className="messages-details-types">
                        <span className='details-images active' data-name='images' ref={imagesT} onClick={typesClick}>Images</span>
                        <span className="details-videos" data-name='videos' ref={videosT} onClick={typesClick}>Videos</span>
                        <span className="details-files" data-name='files' ref={filesT} onClick={typesClick}>Files</span>
                        <span className="details-links" data-name='links' ref={linksT} onClick={typesClick}>Links</span>
                    </div>

                    : ''
            }

            <div className="messages-details-content">
                <Content/>
            </div>
        </>
    )
}



export { GetMessages, GetConversations, GetConversationDetails, CreateConv }
